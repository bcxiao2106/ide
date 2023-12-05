import * as cryptojs from 'crypto-js';
export const ENV: string = 'local'; //pages, local, console
export const ENCRYPT_KEY: string = 'ayden';
export const OWNER: string = 'bcxiao2106'; //GEP-GitHub aydenxiao-gep bcxiao2106
export const ACCOUNT_TYPE: string = 'users'; //orgs users
export const getHostingContext: any = () => {
    let localTks: string[] = [
        'U2FsdGVkX1/MLkji5VLytbPDiCfxj4pWImFEnFKi2/OX5KWGmXAjREDvHk85AqMFuMYCQ7Z02HDD8jDXIt+awg==',
        'U2FsdGVkX18BdJZpBuKKZzkxPl5aKoZZoGfDD5VO0QBrm0d3heO+yY0SXDgpHd0+fg+9DpBE7NB/NnC+8zkcGDe27uj2D1TKP1+hL461M9cGmYenyZX9zITpLCZ67noB0cA5+nPm1LYvG6OvLczEcg=='
    ];
    let consoleTks: string[] = [
        'U2FsdGVkX18VgIrMsOCv4v7ZnHeZ0DrnZf+ltIW275miaei41jUAS5PRxVrSfaPm10V0h00OMaduxRY0by0TYA==',
        'U2FsdGVkX18ESnh7rYLadnil893m7PFCW23B6sno4FtGihe3ZtfC5f49j01g2T3eaQvd2ftH/OG46j9UtsH5U0hvyVEs0IK8CtWnDCGLRT/7K3romZRswVinBK1BRFhvZGXYSGNHFKfHqxk97boIDA=='
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
            // baseHref: 'https://bcxiao2106.github.io/ide/',
            // callbackUrl: 'https://bcxiao2106.github.io/ide/'
            baseHref: '/',
            callbackUrl: 'http://localhost:3000/'
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
