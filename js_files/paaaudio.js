const common = {
    developer: 'PAA Audio',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Legend Channel',
        description: 'Channel strip modelled on Neve V Series.',
        url: 'https://paa-audio.de/plugins/legend-channel',
        image: 'https://paa-audio.de/img/legend-channel.png',
        tags: ['effect', 'channel strip'],
        badges: ['tested-working'],
        price: '$ 129',
        created: '2026-06-30',
    },
    {
        name: 'Not Another Glue-Comp',
        description: 'SSL style bus compressor.',
        url: 'https://paa-audio.de/plugins/not-another-glue-comp',
        image: 'https://paa-audio.de/plugin-screenshot.png',
        tags: ['effect', 'compressor', 'saturation'],
        badges: ['tested-working'],
        price: '$ 29',
        created: '2026-06-30',
    },
    {
        name: 'Vintage Delay',
        description: 'Bucket bridge delay.',
        url: 'https://paa-audio.de/plugins/vintage-delay',
        image: 'https://paa-audio.de/img/vintage-delay-plugin.png',
        tags: ['effect', 'delay', 'saturation'],
        badges: ['tested-working'],
        price: '$ 29',
        created: '2026-06-30',
    },
    {
        name: 'Tape56K',
        description: 'Tape saturation modelled on the Lyrec TR-533.',
        url: 'https://paa-audio.de/plugins/tape56k',
        image: 'https://paa-audio.de/img/tape56k-plugin.png',
        tags: ['effect', 'tape', 'saturation'],
        badges: ['tested-working'],
        price: '$ 39',
        created: '2026-05-14',
    },
    {
        name: 'EasyLink',
        description: 'Stream DAW audio to a browser.',
        url: 'https://paa-audio.de/plugins/easylink',
        image: 'https://paa-audio.de/easylink-screenshot.png',
        tags: ['tool'],
        price: 'No charge',
        created: '2026-06-30',
        comment: 'Plugin loads but my network is complex. It sets up a local websocket server.',
    },
    {
        name: 'American FET',
        description: 'Model of the 500-series FET compressor/limiter, calibrated against the factory measured readings.',
        url: 'https://paa-audio.de/plugins/american-fet',
        image: 'https://paa-audio.de/img/american-fet.png',
        price: '$ 69',
        tags: ['effect', 'compressor', 'limiter'],
        created: '2026-09-02',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

