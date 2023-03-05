import { Injectable } from "@angular/core";

@Injectable()
export class ViewCacheService {
    private map: Map<string, any> = new Map<string, any>();

    constructor() {}

    set(key: string, viewRef: any) {
        this.map.set(key, viewRef);
    }

    get(key: string): any {
        return this.map.get(key);
    }

    remove(key: string) {
        this.map.has(key) && this.map.delete(key);
    }
}