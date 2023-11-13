import * as cryptojs from 'crypto-js';
export const ENV: string = 'pages'; //pages, local
export const ENCRYPT_KEY = 'ayden';
export const getHostingContext: any = () => {
    let aa: string = 'ghu_KRvIsb9nITTpiL2p1rrgwZ9o9NiRmi1pfZpc';
    let bb: string = 'ghr_Tzxd1z9S5rwLidTAplCiYnFRoHpwEzPJhp47cx5MefYnIQBbeFzY69xR1AwFlNsUAJLTBW0GC8T5';
    let enA: string = cryptojs.AES.encrypt(aa, ENCRYPT_KEY).toString();
    let enB: string = cryptojs.AES.encrypt(bb, ENCRYPT_KEY).toString();
    console.log('XXXXXXX', enA, enB);
    if(ENV == 'local') return {
        cid: decrypt('U2FsdGVkX1+NFuIhxPdNS+QkfU2i5xQHpZTsegzqQYm+3s1ujHrRimK5zjJIGQGB'),
        sid: decrypt('U2FsdGVkX196FhXCAfM7Qi/xq35RLC3KhdC1yHn76O45PBCGwZcfYHlti7D5Oq0m/htUrKV5Sx0sEU6Y8Zg+4g=='),
        tk: decrypt('U2FsdGVkX19F53KJ8e8O2MYgRsLFvsy9h+44qDlIwW4yA8NutbcjoL+UXmkOhAjcSN4qtSrQ7Y4mnlkB5GPd1g=='),
        rtk: decrypt('U2FsdGVkX18sw0J4zGYkj1WQqtkPfGV1ZyY2uvh/v8s3v9qmS6lW9Hcwn7w4KW6jAToO4zQeKpqz4HLwnJ67Zdu/yS3wIl5XpHsdjLg3IlTPoFa61/NuXmPcke+Ylzfcigv8tfdv06x4sqpcw+SlcQ=='),
        baseHref: '/',
        callbackUrl: 'http://localhost:3000/'
    };
    return {
        cid: decrypt('U2FsdGVkX18eQBlQ62xAKJOZG38fhlbUk5kYDjpYyR9RWov02oV6+xoTWCdPRPTk'),
        sid: decrypt('U2FsdGVkX1/CTcKyFkPHR5yfHlMAT+OOoJsmIU4LgNVscfd1+Xo09AQpjToRb5q+r5Qt3rBl8RpTuuLC0d4v4Q=='),
        tk: decrypt('U2FsdGVkX1+cLhSl/XfZh6mROzG7C+zTckwyuiVyf0cnptIE1dOnJBjYnIbpEdxplG3IcRxt9IC9npOF+frc6g=='),
        rtk: decrypt('U2FsdGVkX19NBkkg6NEq3CNJr7L6bmynVMemoVb6ZFzsstNJO+4A/vLWrmhefHH7Qc4EXiMSZK6Tw3oqCXsn3V8zlp+CMs7y/virQSe+tFgHPdSfpAsFvXCL3+oaWoRiitdr7Xtp6HvP1J4lmZgNwQ=='),
        baseHref: 'https://bcxiao2106.github.io/ide/',
        callbackUrl: 'https://bcxiao2106.github.io/ide/'
    }
}  
export const decrypt = (original: string): string => {
    return cryptojs.AES.decrypt(original, ENCRYPT_KEY).toString(cryptojs.enc.Utf8);
}