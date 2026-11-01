const developer = {
    name: 'AP Mastering',
}

const common = {
    developer: developer.name,
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Versatile Compressor',
        description: 'Compressor with wider than normal paramter range.',
        url: 'https://apmastering.com/plugins/versatile-compressor',
        image: 'https://assets.apmastering.com/plugins/vcscreenshot.png',
        source: 'https://github.com/apmastering/APComp',
        price: 'No charge',
        tags: ['effect', 'compressor'],
        badges: [ 'tested-working' ],
        license: 'BSD (modified)',
        created: '2025-08-30',
    },
    {
        name: 'Curvature',
        description: 'Compressor capable of mimicking most forms of compressors.',
        url: 'https://apmastering.com/plugins/curvature',
        images: [
            {
                url: 'https://assets.apmastering.com/plugins/curv-expert.png',
                trim: 10,
            },
            {
                url: 'https://assets.apmastering.com/plugins/curv-preset.png',
                trim: 10,
            },
            {
                url: 'https://assets.apmastering.com/plugins/curv-retro.png',
                trim: 10,
            },
            {
                url: 'https://assets.apmastering.com/plugins/curv-tun.png',
                trim: 10,
            },
            {
                url: 'https://assets.apmastering.com/plugins/curv-settings.png',
                trim: 10,
            },
            {
                url: 'https://assets.apmastering.com/plugins/curv-sidechain.png',
                trim: 10,
            },
            {
                url: 'https://assets.apmastering.com/plugins/curv-bs.png',
                trim: 10,
            },
        ],
        price: '€ 48',
        tags: ['effect', 'compressor'],
        badges: [ 'tested-working' ],
        created: '2025-10-26',
    },
    {
        name: 'Delta Expose',
        description: 'Discover compression curves of any compressor.',
        url: 'https://apmastering.com/plugins/delta-expose',
        image: 'https://assets.apmastering.com/plugins/delta-expose-bg.jpg',
        price: '€ 9',
        tags: ['analyzer'],
        badges: [ 'tested-working' ],
        created: '2025-10-26',
    },
    {
        name: 'Saturation',
        description: 'Saturator with eight different modes.',
        url: 'https://apmastering.com/plugins/saturation',
        image: 'https://assets.apmastering.com/plugins/sat-bg.jpg',
        source: 'https://github.com/apmastering/Saturation',
        price: 'No charge',
        tags: ['effect', 'saturation', 'distortion'],
        badges: [ 'tested-working' ],
        license: 'BSD (modified)',
        created: '2025-10-26',
    },
    {
        name: 'Saturation Reverser',
        description: 'Reverses tanh distortion when exactly level matched. Designed for education.',
        url: 'https://apmastering.com/plugins/reverser',
        image: 'https://assets.apmastering.com/plugins/reverser-bg.jpg',
        price: 'No charge',
        tags: ['effect', 'saturation', 'distortion'],
        created: '2025-10-26',
    },
    {
        name: 'Class A',
        description: 'Vintage mic pre and magical banana simulator.',
        url: 'https://apmastering.com/plugins/class-a',
        image: 'https://assets.apmastering.com/plugins/class-a-bg.jpg',
        price: '€ 9',
        tags: ['effect', 'saturation', 'distortion'],
        badges: [ 'tested-working' ],
        created: '2026-07-18',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
