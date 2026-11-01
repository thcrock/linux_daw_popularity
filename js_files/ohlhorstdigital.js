const common = {
    developer: 'Ohlhorst Digital',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'DeEdger',
        description: 'Tool to remove harshness from the high end.',
        url: 'https://ohlhorstdigital.com/deedger/',
        image: 'https://ohlhorstdigital.com/img/plugins/deedger_main_2.webp',
        price: '€ 99.00',
        tags: ['effect', 'filter', 'mastering'],
        created: '2026-06-14'
    },
    {
        name: 'Finesse',
        description: 'Resonance suppressor.',
        url: 'https://ohlhorstdigital.com/finesse/',
        image: 'https://ohlhorstdigital.com/img/plugins/finesse_main_2.webp',
        price: '€ 149.00',
        tags: ['effect', 'spectral', 'mastering'],
        created: '2026-06-14'
    },
    {
        name: 'Ancora',
        description: 'Stereo image manipulation.',
        url: 'https://ohlhorstdigital.com/ancora/',
        image: 'https://ohlhorstdigital.com/img/plugins/ancora_main_2.webp',
        price: '€ 129.00',
        tags: ['effect', 'stereo', 'filter', 'mastering'],
        created: '2026-06-14'
    },
    {
        name: 'Limen',
        description: 'High frequency limiter.',
        url: 'https://ohlhorstdigital.com/limen/',
        image: 'https://ohlhorstdigital.com/img/plugins/limen_main_2.webp',
        price: '€ 169.00',
        tags: ['effect', 'limiter', 'transient', 'mastering'],
        created: '2026-06-14'
    },
    {
        name: 'Trama',
        description: 'Stem splitter built from open source parts.',
        url: 'https://ohlhorstdigital.com/trama/',
        image: 'https://ohlhorstdigital.com/trama/img/trama.webp',
        price: 'No charge',
        tags: ['tool'],
        formats: ['standalone'],
        created: '2026-08-22'
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
