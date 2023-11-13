import * as cryptojs from 'crypto-js';
export const ENV: string = 'local'; //pages
export const ENCRYPT_KEY = 'AYDEN';
export const getHostingContext: any = () => {
    let key: string = 'ayden';
    let originalText: string = 'd5e56492375016352fb522e8ad61ddd170566d8f';
    let encrypted: string = cryptojs.AES.encrypt(originalText, key).toString();
    let deEncrypted: string = cryptojs.AES.decrypt(encrypted, key).toString(cryptojs.enc.Utf8);
    console.log(originalText, encrypted, deEncrypted);
    if(ENV == 'local') return {
        cid: deEncrypt('U2FsdGVkX1+NFuIhxPdNS+QkfU2i5xQHpZTsegzqQYm+3s1ujHrRimK5zjJIGQGB'),
        sid: deEncrypt('U2FsdGVkX196FhXCAfM7Qi/xq35RLC3KhdC1yHn76O45PBCGwZcfYHlti7D5Oq0m/htUrKV5Sx0sEU6Y8Zg+4g=='),
        tk: 'Z2h1X3F2RGZWaVl6ZEowVDdqU3NPWTlLOTA3WUM4WXZ1RjRPQ2hYUA==',
        rtk: 'Z2hyX1pZVDVwV2VTOVJIc0tRMFV5NnBhZ0VYcWJIeDlYTmRFTllrZzZMc2Q5a0d6ZHBpazlwSzlJM24yYVRUWTN4Vkt3czZObVg0NzljRms=',
        baseHref: '/',
        callbackUrl: 'http://localhost:3000/'
    };
    return {
        cid: 'SXYxLjgyNDI2NjIxY2IxODYxZDM=',
        sid: 'MjEzMzE1OWMxOWYxNDZiNTRlMjUzOTQ5MGVjMmIyNzIxMGZlZWVjOQ==',
        tk: 'Z2h1X1dERnlQRWVURUNXWEdGbEZERTFLaTI3ZXpjTXpVQjJ2SkR4aA==',
        rtk: 'Z2hyX09vMU4xTVgxZGxTZWJyYTk0T1V1YkNiU3VlVlBBbDNmNnA4Vm9iRW1PY3JoaDZ6S1Q3VFU0R0xzUGVCT2NObnhhQ3Q3VlEwdmFnUm0=',
        baseHref: 'https://bcxiao2106.github.io/ide/',
        callbackUrl: 'https://bcxiao2106.github.io/ide/'
    }
}  
export const deEncrypt = (original: string): string => {
    return cryptojs.AES.decrypt(original, ENCRYPT_KEY).toString(cryptojs.enc.Utf8);
}