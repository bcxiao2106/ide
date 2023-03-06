import { Injectable, Injector, NgZone } from '@angular/core';
import { IMonacoEditorGlobalConfig } from './interfaces/monaco.interfaces';
import { BehaviorSubject } from 'rxjs';
import { defaultMonacoConfig } from './monaco.config';
import { MONACO_EDITOR_CONFIG } from './token';


@Injectable({providedIn: 'root'})
export class MonacoEditorLoaderService {
  nodeRequire: any;
  isMonacoLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _monacoPath = 'assets/monaco/min/vs';
  set monacoPath(value: string) {
    if (value) this._monacoPath = value;
  }

  // DI
  private _ngZone!: NgZone;
  private get ngZone(): NgZone {
    !this._ngZone && (this._ngZone = this.ngInjector.get(NgZone));
    return this._ngZone;
  }
  private set ngZone(v: NgZone) {
    this._ngZone = v;
  }

  private _monacoConfig!: IMonacoEditorGlobalConfig;
  public get monacoConfig(): IMonacoEditorGlobalConfig {
    !this._monacoConfig && (this._monacoConfig = this.ngInjector.get(MONACO_EDITOR_CONFIG, defaultMonacoConfig));
    return this._monacoConfig;
  }
  public set monacoConfig(v: IMonacoEditorGlobalConfig) {
    this._monacoConfig = v;
  }

  constructor(private ngInjector: Injector) {
    if ((<any>window).monacoEditorInitialized) {
      this.ngZone.run(() => this.isMonacoLoaded$.next(true));
      return;
    }

    (<any>window).monacoEditorInitialized = true;
    if (this.monacoConfig && this.monacoConfig.baseUrl) this.monacoPath = this.monacoConfig.baseUrl;
    this.loadMonaco();
  }

  loadMonaco() {
    const onGotAmdLoader = () => {
      let vsPath = this._monacoPath;
      (<any>window).amdRequire = (<any>window).require;

      const isElectron = !!this.nodeRequire;
      const isPathUrl = vsPath.includes('http');

      if (isElectron) {
        // Restore node require in window
        (<any>window).require = this.nodeRequire;

        if (!isPathUrl) {
          const path = (<any>window).require('path');
          vsPath = path.resolve((<any>window).__dirname, this._monacoPath);
        }
      }

      (<any>window).amdRequire.config({ paths: { vs: vsPath } });

      // Load monaco
      (<any>window).amdRequire(['vs/editor/editor.main'], () => {
        this.ngZone.run(() => this.isMonacoLoaded$.next(true));
      }, (error: any) => console.error('Error loading monaco-editor: ', error));
    };

    // Check if AMD loader already available
    const isAmdLoaderAvailable = !!(<any>window).amdRequire;
    if (isAmdLoaderAvailable) {
      return onGotAmdLoader();
    }

    const isElectron = !!(<any>window).require;

    if (isElectron) {
      this.addElectronFixScripts();
      this.nodeRequire = (<any>window).require;
    }

    const loaderScript: HTMLScriptElement = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = `${this._monacoPath}/loader.js`;
    loaderScript.addEventListener('load', onGotAmdLoader);
    document.body.appendChild(loaderScript);
  }

  addElectronFixScripts() {
    const electronFixScript = document.createElement('script');
    // workaround monaco-css not understanding the environment
    const inlineScript = document.createTextNode('self.module = undefined;');
    // workaround monaco-typescript not understanding the environment
    const inlineScript2 = document.createTextNode('self.process.browser = true;');
    electronFixScript.appendChild(inlineScript);
    electronFixScript.appendChild(inlineScript2);
    document.body.appendChild(electronFixScript);
  }
}
