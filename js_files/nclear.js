const common = {
    developer: 'nClear',
    formats: ['clap', 'lv2', 'vst3'],
}

const apps = [
    {
        name: 'VocRide',
        description: 'Pitch-aware vocal harmonic EQ.',
        url: 'https://plugins.nclear.pro/plugins/vocride.html',
        image: {
            url: 'https://plugins.nclear.pro/assets/product-hero/vocride-main.png',
            crop: {
                left: 99,
                top: 96,
                right: 1700,
                bottom: 902,
            },
        },
        price: 'Pay what you want / No charge',
        tags: ['effect', 'eq', 'pitch', 'vocal'],
        badges: [ 'tested-working' ],
        created: '2026-07-31',
    },
    {
        name: 'Sibalance',
        description: 'Sibilance and harshness control for vocals.',
        url: 'https://plugins.nclear.pro/plugins/sibalance.html',
        image: {
            url: 'https://plugins.nclear.pro/assets/product-hero/sibalance-main.png',
            crop: {
                left: 100,
                top: 96,
                right: 1700,
                bottom: 902,
            },
        },
        price: 'Pay what you want / No charge',
        tags: ['effect', 'deesser'],
        badges: [ 'tested-working' ],
        created: '2026-07-31',
    },
    {
        name: 'Gluon',
        description: 'Bus compressor with optional external sidechain.',
        url: 'https://plugins.nclear.pro/plugins/gluon.html',
        image: 'https://plugins.nclear.pro/assets/gluon/gluon-interface-dark.png?v=e7ea0e9b637f',
        price: 'Donation / No charge',
        tags: ['effect', 'compressor'],
        created: '2026-10-22',
    },
    {
        name: 'VocRide 2',
        description: 'Pitch-following vocal harmonic dynamics.',
        url: 'https://plugins.nclear.pro/plugins/vocride-2.html',
        image: 'https://plugins.nclear.pro/assets/vocride-2/interface-preview-dark.webp',
        price: '$ 39 / No charge',
        tags: ['effect', 'eq', 'pitch', 'vocal'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
