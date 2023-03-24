import { IThemesConfig } from "../interfaces/interfaces";

export const Themes: IThemesConfig = {
    themes: ['vs-dark', 'vs-light'],
    default: 'vs-light',
    map: {
        //ide
        '--ide-bgcolor': { 'vs-dark': '#000000', 'vs-light': '#ffffff'},
        '--ide-color': { 'vs-dark': '#cccccc', 'vs-light': '#666666'},

        //worspace nav
        '--ide-ws-nav-bgcolor': { 'vs-dark': '#2e3138', 'vs-light': '#eaeaea'},
        '--ide-ws-nav-btn-fill': { 'vs-dark': '#7e7e7e', 'vs-light': '#66666680'},
        '--ide-ws-nav-btn-hover-fill': { 'vs-dark': '#ffffff', 'vs-light': '#666666'},
        '--ide-ws-nav-btn-border-color': { 'vs-dark': '1px solid #ffffff', 'vs-light': '1px solid #666666'},

        //top nav
        '--ide-top-nav-bgcolor': { 'vs-dark': '#2e3138', 'vs-light': '#e8e8e8'},
        //sider
        '--ide-section-header-bgcolor': { 'vs-dark': '#2f3138', 'vs-light': '#80808033'},
        '--ide-sider-bgcolor': {'vs-dark': '#15181E', 'vs-light': '#f3f3f3'},
        '--ide-sider-footer-bgcolor': {'vs-dark': '#2e3138', 'vs-light': '#eaeaea'},
        '--ide-sider-footer-color': {'vs-dark': '#cccccc', 'vs-light': '#666666'},
        '--ide-tree-node-selected-bgcolor': {'vs-dark': '#434751', 'vs-light': '#e3e9f3'},
        '--ide-tree-node-selected-color': {'vs-dark': '#ffffff', 'vs-light': '#666666'},
        '--ide-tree-node-selected-focused-bgcolor': {'vs-dark': '#0086ff', 'vs-light': '#0086ff'},
        '--ide-tree-node-selected-focused-color': {'vs-dark': '#ffffff', 'vs-light': '#ffffff'},
        '--ide-menu-item-hover-bgcolor': {'vs-dark': '#2e3138', 'vs-light': '#e7e7e7'},
        '--ide-menu-item-selected-bgcolor': {'vs-dark': '#434751', 'vs-light': '#eee'},

        //editor
        '--ide-editor-tabitem-bgcolor': {'vs-dark': '#26292e', 'vs-light': '#ececec'},
        '--ide-editor-tabitem-color': {'vs-dark': '#9e9e9e', 'vs-light': '#666666'},
        '--ide-editor-tabstatus-hover-bgcolor': {'vs-dark': '#454952', 'vs-light': '#f2f2f2'},
        '--ide-editor-tab-focused-bgcolor': {'vs-dark': '#1E1E1E', 'vs-light': '#ffffff'},
        '--ide-editor-tab-focused-color': {'vs-dark': '#ffffff', 'vs-light': '#666666'},
        '--ide-editor-tabbar-bgcolor': {'vs-dark': '#202327', 'vs-light': '#f2f2f2'},

        //functional
        '--ide-function-panel-bgcolor': {'vs-dark': '#15181E', 'vs-light': '#f3f3f3'},

        //scrollbar
        '--ide-scrollbar-track-bgcolor': {'vs-dark': '#15181E', 'vs-light': '#f3f3f3'},
        '--ide-scrollbar-thumb-color': {'vs-dark': '#2e3138', 'vs-light': '#eaeaea'},
        '--ide-scrollbar-thumb-hover-color': {'vs-dark': '#555', 'vs-light': '#ccc'},
        '--ide-scrollbar-size': {'vs-dark': '5px', 'vs-light': '5px'},

        //popup
        '--ide-popup-bgcolor': { 'vs-dark': '#000000', 'vs-light': '#ffffff'},
        '--ide-popup-border-color': {'vs-dark': '#454952', 'vs-light': '#f2f2f2'},
        '--ide-popup-header-bgcolor': {'vs-dark': '#3c4348', 'vs-light': '#f3f3f3'},

        //hyperlink
        '--ide-hyperlink-color': {'vs-dark': '#7acbf3', 'vs-light': '#5177fc'},

        //button
        // '--ide-btn-confirm-color': {'vs-dark': '#7acbf3', 'vs-light': '#5177fc'},
        '--ide-btn-confirm-bgcolor': {'vs-dark': '#98d9ff', 'vs-light': '#98d9ff'},
        '--ide-btn-cancel-bgcolor': {'vs-dark': '#f7afaf', 'vs-light': '#f7afaf'},

        //list grid table
        '--ide-table-header-bgcolor': {'vs-dark': '#2f3138', 'vs-light': '#f3f3f3'},
        '--ide-table-header-color': {'vs-dark': '#cbcbcb', 'vs-light': '#655f5f'},
        '--ide-table-border-color': {'vs-dark': '#414141', 'vs-light': '#cacaca'},
    }
}
