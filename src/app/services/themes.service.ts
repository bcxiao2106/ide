import { Injectable } from "@angular/core";
import { IThemesConfig } from "../interfaces/interfaces";

@Injectable()
export class ThemesService {
    private element: any;
    private map: Map<string, Map<string, string>>;
    theme!: string;

    constructor() {
        this.map = new Map<string, Map<string, string>>();
        console.log(document.querySelector('head'));
        if(!this.element) this.element = this.createElement('themes', '');
    }

    init(config: IThemesConfig) {
        config.themes && Array.isArray(config.themes) && config.themes.forEach(theme => {
            if(!this.map.has(theme)) this.map.set(theme, new Map<string, string>());
        });
        Object.keys(config.map).forEach(key => {
            Object.keys(config.map[key]).forEach(theme => {
                this.map.get(theme)?.set(key, config.map[key][theme]);
            })
        });
        this.theme = config.default;
        this.applyTheme(this.theme);
        console.log(this.map);
    }

    setTheme(theme: string, styles: Record<string, string>) {
        if(!this.map.has(theme)) this.map.set(theme, new Map<string, string>());
    }

    set(key: string, value: string) {
        this.map.get(this.theme)?.set(key, value);
    }

    switch(theme: string) {
        if(theme == this.theme) return;
        this.applyTheme(theme);
        this.theme = theme;
        this.setMonacoTheme(theme);
    }

    setMonacoTheme(theme: string) {
        monaco.editor.setTheme(theme);
    }

    private applyTheme(theme: string) {
        let themes: string = ':root {\n';
        this.map.get(theme)?.forEach((value, key) => {
            themes += `\t${key}: ${value};\n`;
        });
        this.element.innerHTML = themes + '}';
    }

    private createElement(styleId: string, innerHTML: string): any {
        let element: HTMLStyleElement = document.createElement('style');
        element.id = styleId;
        element.innerHTML = innerHTML;
        document.getElementsByTagName('head')[0].appendChild(element);
        return element;
    }
}
