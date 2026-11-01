const common = {
    developer: 'auDYo engineering',
    formats: ['lv2', 'vst3'],
}

const apps = [
    {
        name: 'TWIN PITCH',
        description: 'Dual pitch shifter / Delay',
        url: 'https://audyo-engineering.com/twinpitch.html',
        image: 'https://static.kvraudio.com/i/b/twinpitch-interface.jpg',
        price: '€ 13.50',
        tags: ['effect', 'pitch', 'delay'],
        created: '2025-10-21',
    },
    {
        name: 'LII FLANGER',
        description: 'Vintage-style Flanger',
        url: 'https://audyo-engineering.com/lii-flanger.html',
        image: 'https://static.kvraudio.com/i/b/lii-interface.jpg',
        price: '€ 12',
        tags: ['effect', 'flanger'],
        created: '2025-10-21',
    },
    {
        name: 'Princess Pitch',
        description: 'Stereo micropitch plugin.',
        url: 'https://audyo-engineering.com/princesspitch.html',
        image: 'https://audyo-engineering.com/assets/princesspitch-interface.05cef70e.webp',
        price: '€ 11.90',
        tags: ['effect', 'pitch', 'vocal', 'delay'],
        created: '2026-10-22',
    },
    {
        name: 'reNAMed',
        description: 'NAM profile and IR browser.',
        url: 'https://audyo-engineering.com/renamed.html',
        image: 'https://audyo-engineering.com/assets/reNAMed-interface.e5c85995.webp',
        price: 'No charge',
        tags: ['tool', 'guitar', 'nam'],
        formats: ['lv2', 'vst3', 'standalone'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
