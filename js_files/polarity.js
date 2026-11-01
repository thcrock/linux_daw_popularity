const common = {
    developer: 'Polarity',
    formats: ['vst3','clap'],
    price: 'No charge',
}

const apps = [
    {
        name: 'Polarity-MD',
        url: 'https://polarity.productions/polarity-md/',
        image: 'https://polarity.productions/polarity-md/assets/images/polarity-md.png',
        tags: ['effect', 'compressor', 'expander', 'dynamics', 'multiband'],
        created: '2026-02-09',
    },
    {
        name: 'Polarity-SC-Dark',
        url: 'https://polarity.productions/polarity-sc/',
        image: 'https://polarity.productions/polarity-sc/assets/images/polarity-sc-dark.png',
        source: 'https://github.com/polarity/plugin.nih.polarity-sc-dark',
        tags: ['effect', 'spectral'],
        license: 'GPL-3.0',
        created: '2026-04-19'
    },
    {
        name: 'Polarity-RES',
        url: 'https://polarity.productions/polarity-res/',
        image: 'https://polarity.productions/polarity-res/assets/images/polarity-res.jpg',
        tags: ['effect', 'resonator'],
        created: '2026-05-14'
    },
    {
        name: 'Polarity-Recorder',
        url: 'https://polarity.productions/polarity-recorder/',
        image: 'https://i.ibb.co/HD6RzZC4/image.png',
        tags: ['tool', 'vocal'],
        formats: ['vst3'],
        created: '2026-08-28'
    },
    {
        name: 'Polarity-Glue',
        url: 'https://polarity.productions/polarity-glue/',
        image: 'https://i.ibb.co/yFQsnQ0h/2026-09-18-12-49-56.png',
        tags: ['effect', 'compressor'],
        created: '2026-09-18',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

