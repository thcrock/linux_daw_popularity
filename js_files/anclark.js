const common = {
    developer: 'AnClark',
    formats: ['vst3', 'lv2', 'clap'],
    price: 'No charge',
}

const apps = [
    {
        name: 'Cetone333',
        url: 'https://github.com/AnClark/Cetone033',
        image: 'https://github.com/AnClark/Cetone033/raw/develop/Screenshot.png',
        source: 'https://github.com/AnClark/Cetone033',
        tags: ['synth'],
        created: '2026-08-25',
    },
    {
        name: 'CetoneSynthLight',
        url: 'https://github.com/AnClark/CetoneSynthLight',
        image: 'https://github.com/AnClark/CetoneSynthLight/raw/develop/Screenshot.png',
        source: 'https://github.com/AnClark/CetoneSynthLight',
        tags: ['synth'],
        created: '2026-08-25',
    },
    {
        name: 'Compez',
        url: 'https://github.com/AnClark/Comprez',
        image: 'https://github.com/AnClark/Comprez/raw/develop/comprez.png',
        source: 'https://github.com/AnClark/Comprez',
        tags: ['effect', 'compressor'],
        created: '2026-08-25',
    },
    {
        name: 'Minaton-XT',
        url: 'https://github.com/AnClark/Minaton-XT',
        image: 'https://github.com/AnClark/Minaton-XT/raw/develop/Screenshot.png',
        source: 'https://github.com/AnClark/Minaton-XT',
        tags: ['synth'],
        created: '2026-08-25',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
