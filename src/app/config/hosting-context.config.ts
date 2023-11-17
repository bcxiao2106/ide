import * as cryptojs from 'crypto-js';
export const ENV: string = 'local'; //pages, local
export const ENCRYPT_KEY = 'ayden';
export const getHostingContext: any = () => {
    let localTks: string[] = [
        'U2FsdGVkX1+++2HVTlKAcWU4rif6Q6iG5RDNE/6XYy3Wp64JecDhbzwMrnLqyQVg09Ua9l5gZ2+D96fcB5kqjg==',
        'U2FsdGVkX1+aV2JPH+gOvLGdMvPJ5IdoGUUnSEhBHEnxgCpmseFOQ/wd0c4c2RBZSzbTWN00+ez6g7DZdKT5z/wimHsa4oFs/ucRkXClC9l6+sbWL2lpcHd4OUCDAxC2xxSqmIiT99fcQOYnbvsTwg=='
    ];
    let pagesTks: string[] = [
        'U2FsdGVkX1/OovCxkf7hyeDGZ0UeAV6HnCrv9/xSicBfAQcYeI+EGtSRNNz3kmu5VAKHx5cqXvajPYZCRAUTAw==',
        'U2FsdGVkX1+McjFUbhUa2QpP79BFloA9kErSFk1Q/aBlWb+qSyNMQOazZBvhR/oUkMC0//soZ0dvMAp0kufECKOFL/oOiiRIjBQu2BSMxhgn60TAO0ImlTBnN7nkAiCWu3a5+JEkVcuP6kiceY7CnQ=='
    ];
    if (ENV == 'local') return {
        cid: decrypt('U2FsdGVkX1+NFuIhxPdNS+QkfU2i5xQHpZTsegzqQYm+3s1ujHrRimK5zjJIGQGB'),
        sid: decrypt('U2FsdGVkX196FhXCAfM7Qi/xq35RLC3KhdC1yHn76O45PBCGwZcfYHlti7D5Oq0m/htUrKV5Sx0sEU6Y8Zg+4g=='),
        tk: decrypt(localTks[0]),
        rtk: decrypt(localTks[1]),
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