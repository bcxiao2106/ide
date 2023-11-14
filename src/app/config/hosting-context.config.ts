import * as cryptojs from 'crypto-js';
export const ENV: string = 'pages'; //pages, local
export const ENCRYPT_KEY = 'ayden';
export const getHostingContext: any = () => {
    let aa: string = 'AAA';
    let bb: string = 'BBB';
    let enA: string = cryptojs.AES.encrypt(aa, ENCRYPT_KEY).toString();
    let enB: string = cryptojs.AES.encrypt(bb, ENCRYPT_KEY).toString();
    console.log('XXXXXXX', enA, enB);
    if(ENV == 'local') return {
        cid: decrypt('U2FsdGVkX1+NFuIhxPdNS+QkfU2i5xQHpZTsegzqQYm+3s1ujHrRimK5zjJIGQGB'),
        sid: decrypt('U2FsdGVkX196FhXCAfM7Qi/xq35RLC3KhdC1yHn76O45PBCGwZcfYHlti7D5Oq0m/htUrKV5Sx0sEU6Y8Zg+4g=='),
        tk: decrypt('U2FsdGVkX180CY56oT5gwYYStdgEEEjurKdHb/PXvtSUBkTDzEn63MVsju5LKYtXIGy48v8oxGbNuekW9wp7Ag=='),
        rtk: decrypt('U2FsdGVkX1+Dn2bSYCc7E8irtAs9YtYv2wUzMPmTnnvdY6MF5DbfdEx07JJKSc3T86fCAahwRyZR2PnyDqV9x8rjavn3hrJgcxuTVsiK7j5SBRjw4dq7KmWdPL8TXWqW7UNaV/YNq09QsR2z+ucmog=='),
        baseHref: '/',
        callbackUrl: 'http://localhost:3000/'
    };
    return {
        cid: decrypt('U2FsdGVkX18eQBlQ62xAKJOZG38fhlbUk5kYDjpYyR9RWov02oV6+xoTWCdPRPTk'),
        sid: decrypt('U2FsdGVkX1/CTcKyFkPHR5yfHlMAT+OOoJsmIU4LgNVscfd1+Xo09AQpjToRb5q+r5Qt3rBl8RpTuuLC0d4v4Q=='),
        tk: decrypt('U2FsdGVkX184HZLCRz4Mw1+m0UuIx2xzh6LYO6Xi6dRY4FzQY5PMS9DfuSCDGISdOvg4ck09tkMifM35NlcUJA=='),
        rtk: decrypt('U2FsdGVkX19L0liPTSrnuAPJrKuqRWDI2t0c2TOZphdS3dO909d08tbgCUmughbBCSnzVLDBCecZCBx/UjzSP3ogSGjM2xuHWnbmRuTa/m3sv1uII74/UPog3arB8VAN1ZCEMJuTLRxqBoVzJP1sHw=='),
        baseHref: 'https://bcxiao2106.github.io/ide/',
        callbackUrl: 'https://bcxiao2106.github.io/ide/'
    }
}  
export const decrypt = (original: string): string => {
    return cryptojs.AES.decrypt(original, ENCRYPT_KEY).toString(cryptojs.enc.Utf8);
}