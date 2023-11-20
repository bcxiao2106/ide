import * as cryptojs from 'crypto-js';
export const ENV: string = 'local'; //pages, local
export const ENCRYPT_KEY = 'ayden';
export const getHostingContext: any = () => {
    let localTks: string[] = [
        'U2FsdGVkX1/t9+AJmE7rIli2izLqAGBHlf4RvKuSRc1iPA0D9TSYLjdOgtTU8rOaeF4DfrW3fEhfQGFFVAcPOg==',
        'U2FsdGVkX1+kePFCD9loKnUoeHT9spYbih6VjKdRMpXgLg34NGdt/18UfaRYcNkyOiIlBRnc+SVtzjIsIoDFa/himi5E9OtzBy0BEZSFliwvXFIB1w5WHltw65PqQJPAXjNnCNfFHYF53fDYngVkUg=='
    ];
    let pagesTks: string[] = [
        'U2FsdGVkX1/OovCxkf7hyeDGZ0UeAV6HnCrv9/xSicBfAQcYeI+EGtSRNNz3kmu5VAKHx5cqXvajPYZCRAUTAw==',
        'U2FsdGVkX1+McjFUbhUa2QpP79BFloA9kErSFk1Q/aBlWb+qSyNMQOazZBvhR/oUkMC0//soZ0dvMAp0kufECKOFL/oOiiRIjBQu2BSMxhgn60TAO0ImlTBnN7nkAiCWu3a5+JEkVcuP6kiceY7CnQ=='
    ];
    if (ENV == 'local') return {
        cid: decrypt('U2FsdGVkX1/ELeOwnYD4/3d2b0o30Pknyjb0wExdfF/qgSLZVLrMdXuU7rP1fRS8'),
        sid: decrypt('U2FsdGVkX19CL5rbJF6/q9hyjpEFGvvOoMoSjnzwqBchmbt77Iq+u3+HIwIGIggv5OlDiwMmDoHeARVrHkdthQ=='),
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