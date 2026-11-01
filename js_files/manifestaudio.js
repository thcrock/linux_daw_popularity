const common = {
    developer: 'Manifest Audio',
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'Data FX',
        description: 'Transform data into creative audio processing.',
        url: 'https://manifest.audio/data-fx',
        image: 'https://freight.cargo.site/w/2000/q/75/i/W3171015959226900586541409951381/Screenshot-2026-10-07-at-19.39.07.png',
        price: '$ 49',
        tags: ['effect'],
        created: '2026-10-22',
    },
    {
        name: 'Data Synth',
        description: 'Transform data into modern synthesis.',
        url: 'https://manifest.audio/data-synth',
        image: 'https://freight.cargo.site/w/2000/q/75/i/C3171072483426496598096409321109/Screenshot-2026-10-07-at-19.20.19.png',
        price: '$ 79',
        tags: ['synth'],
        created: '2026-10-22',
    },
    {
        name: 'Data Path',
        description: 'Transform any data into a sequence.',
        url: 'https://manifest.audio/data-path',
        image: 'https://freight.cargo.site/w/2000/q/75/i/W3171045276489682980542116847253/Screenshot-2026-10-07-at-17.57.33.png',
        price: '$ 39',
        tags: ['tool', 'sequencer'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
