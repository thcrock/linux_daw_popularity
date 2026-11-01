const common = {
    developer: 'Nebula Audio',
    url: 'https://github.com/subhankardas15071992-cloud',
    license: 'AGPL-3.0',
    formats: ['clap', 'vst3'],
    comment: 'Build from source mostly for no cost option.',
}

const apps = [
    {
        name: 'Nebula Cluster',
        description: 'Distortion with post filtering and compression.',
        url: 'https://subhankar42.gumroad.com/l/mdhqe',
        image: 'https://public-files.gumroad.com/qjhkyd3crf8ofm8thzx5748dbp30',
        source: 'https://github.com/subhankardas15071992-cloud/Nebula-Cluster',
        price: '$ 15+ / No charge',
        tags: ['effect', 'distortion', 'saturation', 'filter', 'compressor'],
        created: '2026-07-31'
    },
    {
        name: 'Nebula DeEsser',
        description: '',
        url: 'https://subhankar42.gumroad.com/l/adounr',
        image: 'https://public-files.gumroad.com/i5m33moziy6fmwnhr7wnwf9rr8ja',
        source: 'https://github.com/subhankardas15071992-cloud/Nebula-De-Esser',
        price: '$ 15+ / No charge',
        tags: ['effect', 'deesser'],
        formats: ['vst3'],
        created: '2026-04-18'
    },
    {
        name: 'Nebula Delay',
        description: 'A midi controllable mono delay with filtering.',
        url: 'https://subhankar42.gumroad.com/l/eoqfvb',
        image: 'https://public-files.gumroad.com/3asailpy8mo2gt4md60bgd7pxz4g',
        source: 'https://github.com/subhankardas15071992-cloud/Nebula-Delay',
        price: '$ 6+ / No charge',
        tags: ['effect', 'delay'],
        created: '2026-07-31'
    },
    {
        name: 'Nebula Stereo Delay',
        description: 'High precision midi controllable stereo delay.',
        url: 'https://subhankar42.gumroad.com/l/slnef',
        image: 'https://public-files.gumroad.com/337d12wo7kep5bva2p2qigz3ra1o',
        source: 'https://github.com/subhankardas15071992-cloud/Nebula-Stereo-Delay',
        price: '$ 12+ / No charge',
        tags: ['effect', 'delay'],
        created: '2026-07-31'
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

