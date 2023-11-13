import * as cryptojs from 'crypto-js';
export const ENV: string = 'pages'; //pages, local
export const ENCRYPT_KEY = 'ayden';
export const getHostingContext: any = () => {
    let aa: string = 'Iv1.82426621cb1861d3';
    let bb: string = '2133159c19f146b54e2539490ec2b27210feeec9';
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
        tk: 'Z2h1X1dERnlQRWVURUNXWEdGbEZERTFLaTI3ZXpjTXpVQjJ2SkR4aA==',
        rtk: 'Z2hyX09vMU4xTVgxZGxTZWJyYTk0T1V1YkNiU3VlVlBBbDNmNnA4Vm9iRW1PY3JoaDZ6S1Q3VFU0R0xzUGVCT2NObnhhQ3Q3VlEwdmFnUm0=',
        baseHref: 'https://bcxiao2106.github.io/ide/',
        callbackUrl: 'https://bcxiao2106.github.io/ide/'
    }
}  
export const decrypt = (original: string): string => {
    return cryptojs.AES.decrypt(original, ENCRYPT_KEY).toString(cryptojs.enc.Utf8);
}