export const ENV: string = 'local'; //pages
export const getHostingContext: any = () => {
    if(ENV == 'local') return {
        cid: 'SXYxLmY3ZjVmNzkzMTQxNjMwNGM=',
        sid: 'ZDVlNTY0OTIzNzUwMTYzNTJmYjUyMmU4YWQ2MWRkZDE3MDU2NmQ4Zg==',
        tk: 'Z2h1X1FubG93MXJXS2ttbmk2Sk9zOTJDQ0JXWkZQaHg3UDJGcGpCeQ==',
        rtk: 'Z2hyX0lxaGl4QnVobE9IUGNQQXlSRUN5T0dPOVV4R2d2bVBBS2FmYWQxMlE4SkdNeG1rMUNxWU50b0MwbUlFWURURnJiOWZFdzUwR0R6NHY=',
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