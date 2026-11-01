const common = {
    developer: 'Xeni Audio',
    url: 'https://xeni-audio.com/',
    formats: ['vst3', 'clap'],
}

const apps = [
    {
        name: 'SpectralMediator',
        description: 'A multiband dynamics processor whose sidechain is the other track',
        url: 'https://xeni-audio.com/spectralmediator.html',
        image: 'https://xeni-audio.com/assets/spectralmediator.png',
        price: '€ 29',
        tags: ['effect', 'compressor', 'spectral', 'multiband', 'sidechain'],
        created: '2026-06-01',
    },
    {
        name: 'McPlugins',
        description: '4 compressors, 7 emulation types',
        url: 'https://xeni-audio.com/mcplugins.html',
        image: 'https://xeni-audio.com/assets/mc.png',
        price: '€ 69',
        tags: ['effect', 'compressor', 'multiband', 'sidechain'],
        created: '2026-06-01',
    },
    {
        name: 'GrooveTransfer',
        description: 'Rhythmic groove extractor and transfer effect',
        url: 'https://xeni-audio.com/groovetransfer.html',
        image: 'https://xeni-audio.com/assets/groovetransfer.png',
        price: 'No charge',
        tags: ['effect', 'envelope', 'transient'],
        created: '2026-07-17',
    },
    {
        name: 'PhantomTrack',
        description: 'Adds harmonies and sympathetic voices.',
        url: 'https://xeni-audio.com/phantomtrack.html',
        image: 'https://xeni-audio.com/assets/phantomtrack.png',
        price: '€ 29',
        tags: ['effect', 'pitch'],
        created: '2026-08-08',
    },
    {
        name: 'Swarm',
        description: 'Automatic unmasking.',
        url: 'https://xeni-audio.com/swarm.html',
        image: 'https://xeni-audio.com/assets/Swarm.png',
        price: '€ 39',
        tags: ['effect', 'spectral', 'pan'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'Busbar',
        description: 'Saturator that communicates between instances.',
        url: 'https://xeni-audio.com/busbar.html',
        image: 'https://xeni-audio.com/assets/Busbar.png',
        price: '€ 19',
        tags: ['effect', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-08-21',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

