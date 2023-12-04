import * as cryptojs from 'crypto-js';
export const ENV: string = 'console'; //pages, local, console
export const ENCRYPT_KEY: string = 'ayden';
export const OWNER: string = 'GEP-GitHub'; //GEP-GitHub aydenxiao-gep bcxiao2106
export const ACCOUNT_TYPE: string = 'orgs'; //orgs users
export const getHostingContext: any = () => {
    let localTks: string[] = [
        'U2FsdGVkX1/Io20/0PMuxLjBiFy1cupXdeyILTjwrvks4N9GIm0dmgV3JkMvZZgWqG5UcgCj3R+q66xEo51wTQ==',
        'U2FsdGVkX19b9J9CtDXD4VYNi5/n/7Skp7pSE7Oyri/KaCON4dY+ff2X8Q+WJjAjMjc9+mHI0r9lKqJIlcO51zf/h2u8nUb/2fXKxaiO4LV7Ff5GSxoDxXzCHTb0MmES9DZQWl3S6EXa3yiRMeXl+g=='
    ];
    let consoleTks: string[] = [
        'U2FsdGVkX18seA+KciWXba2cYhecfhDrqWcQqfMiB9XNKFT2S9Dk4ZziFVu4dGUnce9kBg8MyJDzI/iFnQvH1w==',
        'U2FsdGVkX1/+21Mm0W8Ujv0YMyj8Lzg5Zt8zyTyomcP0QFHy8j+CSnq+V5hVWCNFSxOuRF6rLZVZ11onLLdOA3TEqaf3L6WbDowos7TdkHPD6c1VNDVn+fx3CcjodITgvZ/B32qlMLRGv9vNyCgmgw=='
    ];
    let pagesTks: string[] = [
        'U2FsdGVkX1/OovCxkf7hyeDGZ0UeAV6HnCrv9/xSicBfAQcYeI+EGtSRNNz3kmu5VAKHx5cqXvajPYZCRAUTAw==',
        'U2FsdGVkX1+McjFUbhUa2QpP79BFloA9kErSFk1Q/aBlWb+qSyNMQOazZBvhR/oUkMC0//soZ0dvMAp0kufECKOFL/oOiiRIjBQu2BSMxhgn60TAO0ImlTBnN7nkAiCWu3a5+JEkVcuP6kiceY7CnQ=='
    ];
    if (ENV == 'local') {
        return {
            cid: decrypt('U2FsdGVkX1/ELeOwnYD4/3d2b0o30Pknyjb0wExdfF/qgSLZVLrMdXuU7rP1fRS8'),
            sid: decrypt('U2FsdGVkX19CL5rbJF6/q9hyjpEFGvvOoMoSjnzwqBchmbt77Iq+u3+HIwIGIggv5OlDiwMmDoHeARVrHkdthQ=='),
            tk: decrypt(localTks[0]),
            rtk: decrypt(localTks[1]),
            baseHref: '/',
            callbackUrl: 'http://localhost:3000/'
        }
    } else if (ENV == 'console') {
        return {
            cid: decrypt('U2FsdGVkX1/xmXp6yzGwMetZaZ/2tSFwDb+VtQbAKqj2HMnwoVna2IM1qh1ugX0S'),
            sid: decrypt('U2FsdGVkX18qgRawXIbmZZ5gJEl4Nn6XfmC9S9JrQzym/wB+8Eu6qunIhICW9IG7CkDFtcs4ptyLzzhnHa/csA=='),
            tk: decrypt(consoleTks[0]),
            rtk: decrypt(consoleTks[1]),
            baseHref: 'https://bcxiao2106.github.io/ide/',
            callbackUrl: 'https://bcxiao2106.github.io/ide/'
            // baseHref: '/',
            // callbackUrl: 'http://localhost:3000/'
        }
    } else return {
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
