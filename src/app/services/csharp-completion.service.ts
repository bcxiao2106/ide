import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class CsharpCompletionService {
    private socket!: WebSocket;

    constructor() {
        // this.initSocket();
    }

    private initSocket() {
        let webSocketProtocol: string = location.protocol == "https:" ? "wss:" : "ws:";
        // let socketHost: string = '192.168.68.113:5000';
        let socketHost: string = 'localhost:3323';
        let webSocketURI = webSocketProtocol + "//" + socketHost + "/ws";
        this.socket = new WebSocket(webSocketURI);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onerror = this.onError.bind(this);

    }

    private onOpen() {
        console.log("Connected.");
    }

    private onClose(event: any) {
        if (event.wasClean) {
            console.log('Disconnected.');
        } else {
            console.log('Connection lost.'); // for example if server processes is killed
        }
        console.log('Code: ' + event.code + '. Reason: ' + event.reason);
    }

    private onMessage(event: any) {
        console.log("Data received: " + event.data);
    }

    private onError(error: any) {
        console.log("Error: " + error.message);
    }

    private async sendRequest(type: string, request: any) {
        let endPoint: any;
        let baseUrl: string = 'http://192.168.68.113:5280';
        switch (type) {
            case 'complete': endPoint = `${baseUrl}/completion/complete`; break;
            case 'signature': endPoint = `${baseUrl}/completion/signature`; break;
            case 'hover': endPoint = `${baseUrl}/completion/hover`; break;
            case 'codeCheck': endPoint = `${baseUrl}/completion/codeCheck`; break;
        }
        // this.socket.send(JSON.stringify(request));
        return await axios.post(endPoint, JSON.stringify(request));
    }

    registerCsharpProvider() {
        var assemblies: any = null;
        monaco.languages.registerCompletionItemProvider('csharp', {
            triggerCharacters: [".", " "],
            provideCompletionItems: async (model, position): Promise<any> => {
                let suggestions = [];

                let request = {
                    Code: model.getValue(),
                    Position: model.getOffsetAt(position),
                    Assemblies: assemblies,
                    Language: 'csharp',
                    Event: 'complete'
                }

                let resultQ = await this.sendRequest("complete", request);

                for (let elem of resultQ.data) {
                    suggestions.push({
                        label: {
                            label: elem.Suggestion,
                            description: elem.Description
                        },
                        kind: monaco.languages.CompletionItemKind.Function,
                        insertText: elem.Suggestion
                    });
                }
                return { suggestions: suggestions };
            }
        });

        monaco.languages.registerSignatureHelpProvider('csharp', {
            signatureHelpTriggerCharacters: ["("],
            signatureHelpRetriggerCharacters: [","],
            provideSignatureHelp: async (model, position, token, context) => {
                let request = {
                    Code: model.getValue(),
                    Position: model.getOffsetAt(position),
                    Assemblies: assemblies,
                    Language: 'csharp',
                    Event: 'signature'
                }
                let resultQ = await this.sendRequest("signature", request);
                if (!resultQ.data) return;
                let signatures = [];
                for (let signature of resultQ.data.Signatures) {
                    let params = [];
                    for (let param of signature.Parameters) {
                        params.push({
                            label: param.Label,
                            documentation: param.Documentation ?? ""
                        });
                    }
                    signatures.push({
                        label: signature.Label,
                        documentation: signature.Documentation ?? "",
                        parameters: params,
                    });
                }
                let signatureHelp: any = {};
                signatureHelp.signatures = signatures;
                signatureHelp.activeParameter = resultQ.data.ActiveParameter;
                signatureHelp.activeSignature = resultQ.data.ActiveSignature;
                return {
                    value: signatureHelp,
                    dispose: () => { }
                };
            }
        });


        monaco.languages.registerHoverProvider('csharp', {
            provideHover: async (model, position): Promise<any> => {
                let request = {
                    Code: model.getValue(),
                    Position: model.getOffsetAt(position),
                    Assemblies: assemblies,
                    Language: 'csharp',
                    Event: 'hover'
                }
                let resultQ = await this.sendRequest("hover", request);
                if (resultQ.data) {
                    const posStart = model.getPositionAt(resultQ.data.OffsetFrom);
                    const posEnd = model.getPositionAt(resultQ.data.OffsetTo);

                    return {
                        range: new monaco.Range(posStart.lineNumber, posStart.column, posEnd.lineNumber, posEnd.column),
                        contents: [
                            { value: resultQ.data.Information }
                        ]
                    };
                }
                return null;
            }
        });

        monaco.editor.onDidCreateModel((model) => {
            async function validate(scope: any): Promise<any> {
                let request = {
                    Code: model.getValue(),
                    Assemblies: assemblies,
                    Language: 'csharp',
                    Event: 'codeCheck'
                }
                let resultQ = await scope.sendRequest("codeCheck", request)
                let markers = [];
                for (let elem of resultQ.data) {
                    const posStart = model.getPositionAt(elem.OffsetFrom);
                    const posEnd = model.getPositionAt(elem.OffsetTo);
                    markers.push({
                        severity: elem.Severity,
                        startLineNumber: posStart.lineNumber,
                        startColumn: posStart.column,
                        endLineNumber: posEnd.lineNumber,
                        endColumn: posEnd.column,
                        message: elem.Message,
                        code: elem.Id
                    });
                }
                monaco.editor.setModelMarkers(model, 'csharp', markers);
            }

            var handle: any = null;
            model.onDidChangeContent(() => {
                monaco.editor.setModelMarkers(model, 'csharp', []);
                clearTimeout(handle);
                handle = setTimeout(() => validate(this), 500);
            });
            validate(this);
        });
    }
}
