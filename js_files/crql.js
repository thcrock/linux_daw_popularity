const common = {
    developer: 'CRQL',
}

const apps = [
    {
        name: 'LOCD',
        url: 'https://crql.works/locd/',
        image: 'https://crql.works/locd/LOCD_IMAGE.png',
        price: 'Pay what you want / No charge',
        tags: ['effect', 'phaser', 'distortion'],
        description: 'A Phase-Lock VST with some tricks up its sleeve',
        formats: ['vst3', 'clap'],
        created: '2025-10-21',
    },
    {
        name: 'UZU',
        url: 'https://crql.works/uzu/',
        image: 'https://crql.works/uzu/img/UZU_Static_1K.png',
        price: '£ 13',
        tags: ['effect', 'phaser'],
        description: 'The Frequency-Domain Phaser',
        formats: ['vst3', 'clap'],
        created: '2025-10-21',
    },
    {
        name: 'ANINA',
        url: 'https://crql.works/anina/',
        image: 'https://static.kvraudio.com/i/b/preview.1772054951.png',
        price: 'No charge',
        tags: ['effect', 'spectral'],
        description: 'Free spectral resonance suppression',
        formats: ['vst3', 'clap'],
        created: '2026-02-27',
    },
    {
        name: 'CRUMPETS',
        description: 'Vocal character processor.',
        url: 'https://crql.works/crumpets/',
        image: 'https://crql.works/media/CRUMPETSIMG/Crumpets_Interface.png',
        price: '£ 13',
        tags: ['effect', 'vocal'],
        formats: ['vst3', 'clap'],
        created: '2026-09-13',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
