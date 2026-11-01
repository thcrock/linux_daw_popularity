const common = {
    developer: 'Fors',
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'Sala',
        url: 'https://fors.fm/sala',
        image: 'https://api.fors.fm/storage/v1/object/public/images/devices/sala/sala.webp',
        price: 'No charge',
        tags: ['effect', 'reverb'],
        created: '2025-03-29',
    },
    {
        name: 'Pivot',
        url: 'https://fors.fm/pivot',
        image: 'https://api.fors.fm/storage/v1/object/public/images/devices/pivot/pivot.webp',
        price: '€ 39',
        tags: ['synth', 'fm'],
        created: '2025-07-10',
    },
    {
        name: 'Pivot-Lite',
        url: 'https://fors.fm/pivot',
        image: 'https://api.fors.fm/storage/v1/object/public/images/devices/pivot/pivot-lite.webp',
        price: 'No charge',
        tags: ['synth', 'fm'],
        created: '2025-07-10',
    },
    {
        name: 'Junior',
        url: 'https://fors.fm/junior',
        image: 'https://api.fors.fm/storage/v1/object/public/images/devices/junior/junior.webp',
        price: '€ 39',
        tags: ['synth', 'chiptune'],
        created: '2026-04-28',
    },
    {
        name: 'Junior-Lite',
        url: 'https://fors.fm/junior',
        image: 'https://api.fors.fm/storage/v1/object/public/images/devices/junior/junior-lite.webp',
        price: 'No charge',
        tags: ['synth', 'chiptune'],
        created: '2026-04-28',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}


