const common = {
    developer: 'FRCTL Audio',
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'GRN Lite',
        url: 'https://frctlaudio.com/products/grn-lite',
        image: 'https://frctlaudio.com/assets/grn-lite/GRN%20Lite%20GUI%20HD.png',
        price: 'No charge',
        tags: ['effect', 'granular'],
        created: '2026-01-20',
    },
    {
        name: 'GRN',
        url: 'https://frctlaudio.com/products/grn',
        image: 'https://frctlaudio.com/assets/grn/GRN%202.1.2%20small%20gui.png',
        price: '$ 29',
        tags: ['effect', 'granular'],
        badges: [ 'tested-working' ],
        created: '2026-01-20',
    },
    {
        name: 'SWRL Lite',
        url: 'https://frctlaudio.com/products/swrl-lite',
        image: 'https://frctlaudio.com/assets/swrl-lite/SWRL%20LITE%20GUI%202.png',
        price: 'No charge',
        tags: ['effect', 'chorus', 'stereo', 'tremolo', 'saturation'],
        created: '2026-02-12',
    },
    {
        name: 'SWRL',
        url: 'https://frctlaudio.com/products/swrl',
        image: 'https://frctlaudio.com/assets/swrl/SWRL%20GUI%20filter%20open.jpg',
        price: '$ 19',
        tags: ['effect', 'chorus', 'stereo', 'tremolo', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-02-12',
    },
    {
        name: 'DLAY Lite',
        description: 'Simple delay',
        url: 'https://frctlaudio.com/products/dlay-lite',
        image: 'https://frctlaudio.com/_next/image?url=%2Fassets%2Fdlay-lite%2FDLAY%20Lite%20GUI.png&w=1920&q=75',
        price: 'No charge',
        tags: ['effect', 'delay'],
        created: '2026-07-01',
    },
    {
        name: 'DLAY',
        description: '64 tap delay with a drag to design interface',
        url: 'https://frctlaudio.com/products/dlay',
        image: 'https://frctlaudio.com/_next/image?url=%2Fassets%2Fdlay%2Fdlay%20main%20GUI%201.1.0.png&w=1920&q=75',
        price: '$ 34.99',
        tags: ['effect', 'delay', 'tape', 'saturation'],
        created: '2026-07-01',
    },
    {
        name: 'Aura Lite',
        description: 'Ducking reverb.',
        url: 'https://frctlaudio.com/products/aura-lite',
        image: 'https://frctlaudio.com/_next/image?url=%2Fassets%2Faura-lite%2Faura_lite_gui.png&w=1920&q=75',
        price: 'No charge',
        tags: ['effect', 'reverb'],
        created: '2026-08-04',
    },
    {
        name: 'Aura',
        description: 'Ducking reverb.',
        url: 'https://frctlaudio.com/products/aura-lite',
        image: 'https://frctlaudio.com/_next/image?url=%2Fassets%2Faura-lite%2Faura_lite_gui.png&w=1920&q=75',
        price: '$ 34.99',
        tags: ['effect', 'reverb'],
        created: '2026-08-04',
    },
    {
        name: 'GRNi',
        url: 'https://frctlaudio.com/products/grni',
        image: 'https://frctlaudio.com/_next/image?url=%2Fassets%2Fgrni%2F1.0.0%2Fgrni_hero_chord.png&w=750&q=75',
        price: '$ 44.99',
        tags: ['effect', 'sampler', 'granular'],
        formats: ['clap', 'vst3', 'standalone'],
        created: '2026-09-05',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
