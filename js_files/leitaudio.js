const common = {
    developer: 'Leit Audio',
    price: 'No charge',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Phrotator',
        url: 'https://leitaudio.com/phrotator/',
        image: 'https://leitaudio.com/uploads/phrotator.png',
        tags: ['effect', 'phase'],
        created: '2026-09-02',
    },
    {
        name: 'UnClip',
        description: 'Repair peaks that hit the ceiling.',
        url: 'https://leitaudio.com/unclip/',
        image: 'https://leitaudio.com/img/unclip.webp',
        tags: ['effect', 'enhancer'],
        created: '2026-10-22',
    },
    {
        name: 'Purrenator',
        description: 'Make your notes purr.',
        url: 'https://leitaudio.com/purrenator',
        image: 'https://leitaudio.com/img/purrenator.webp',
        tags: ['effect', 'saturation', 'vibrato'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
