export const ENV: string = 'pages'; //pages
export const getHostingContext: any = () => {
    if(ENV == 'local') return {
        cid: 'SXYxLmY3ZjVmNzkzMTQxNjMwNGM=',
        sid: 'ZDVlNTY0OTIzNzUwMTYzNTJmYjUyMmU4YWQ2MWRkZDE3MDU2NmQ4Zg==',
        tk: 'Z2h1X0czTVNubnQ2cnVkQ2JhakZLazE5MGVGczdteFFsMTNLM3E5MA==',
        rtk: 'Z2hyXzlQc0R2RElRTVJkUmh2UWpXVk5zTFdqdjJVQ2JnNHB4dUM0U2hva2t0NEhNazdHemJ0TGZiNE5RbjU2WWplNnpVc2IxUmowTGQ4b0I=',
        baseHref: '/',
        callbackUrl: 'http://localhost:3000/'
    };
    return {
        cid: 'SXYxLjgyNDI2NjIxY2IxODYxZDM=',
        sid: 'MjEzMzE1OWMxOWYxNDZiNTRlMjUzOTQ5MGVjMmIyNzIxMGZlZWVjOQ==',
        tk: 'Z2h1X0Rld2tHUU1qbUlsTWpYNVlsYzF2R20yNmpEWDRIOTNNYW15Vw==',
        rtk: 'Z2hyX1NKQ3I3Zm1aR0JOdUZHcHNwMndod3hEWDl2ZVZxcDQ2cGdacndRNVp2dVhTbjBqM0dGMm5rT2NrUjB0MHpLa0tBQmlrVEEzVkl3UXA=',
        baseHref: 'https://bcxiao2106.github.io/ide/',
        callbackUrl: 'https://bcxiao2106.github.io/ide/'
    }
}