const developer = {
    name: 'Cut Through Recordings',
    crawl: {
        engine: 'curl',
        tasks: [{
            target: 'price',
            currency: '$',
            el: '.price__sale .price-item--regular .money',
            match: '\\$(\\d{1,3}\\.?\\d{1,2})',
        },{
            target: 'sale',
            currency: '$',
            el: '.price__sale .price-item--sale .money',
            match: '\\$(\\d{1,3}\\.?\\d{1,2})',
        }],
    },
}

const common = {
    developer: developer.name,
    formats: ['lv2', 'vst3', 'vst2'],
    created: '2023-01-17',
}

const apps = [
    {
        name: 'Convergence',
        url: 'https://cutthroughrecordings.com/products/convergence',
        image: 'https://cutthroughrecordings.com/cdn/shop/files/Main5Bands.png',
        price: '$ 45',
        tags: ['effect', 'compressor', 'multiband'],
    },
    {
        name: 'EpicPRESS',
        url: 'https://cutthroughrecordings.com/products/epicpress',
        image: 'https://cutthroughrecordings.com/cdn/shop/files/EpicPress_Main.png',
        price: '$ 35',
        tags: ['effect', 'compressor'],
    },
    {
        name: 'M4 Multiband Compressor',
        url: 'https://cutthroughrecordings.com/products/m4-multiband-compressor',
        image: 'https://cutthroughrecordings.com/cdn/shop/files/4-BandLimit.png',
        price: '$ 15',
        tags: ['effect', 'compressor', 'multiband'],
    },
    {
        name: 'Entropy II',
        url: 'https://cutthroughrecordings.com/products/entropy-ii',
        image: 'https://firebasestorage.googleapis.com/v0/b/ctrwebsite-db7d9.appspot.com/o/products%2F09f8a5f3b47d58762f99b234c6671330%2Fentropy2-screenshot2.png?alt=media&token=a91e9d47-15fd-404f-827a-1af41524b2db',
        price: '$ 8',
        tags: ['effect', 'delay'],
    },
    {
        name: 'Faradelay',
        url: 'https://cutthroughrecordings.com/products/faradelay',
        image: 'https://cutthroughrecordings.com/cdn/shop/files/Screenshot_1.png',
        price: '$ 6',
        tags: ['effect', 'chorus', 'phaser','tremolo'],
    },
    {
        name: 'POP Sound Shaper ',
        url: 'https://cutthroughrecordings.com/products/pop-sound-shaper',
        image: 'https://cutthroughrecordings.com/cdn/shop/files/POP_v2_screenshot.png',
        source: 'https://github.com/ctrecordings/POPSoundShaper',
        price: 'No charge',
        tags: ['effect', 'compressor'],
        license: 'GPL-3.0',
    },
    {
        name: 'Entropy 3',
        url: 'https://cutthroughrecordings.com/products/entropy-3-stereo-crossover-delay',
        image: 'https://cutthroughrecordings.com/cdn/shop/files/Entropy3_c9a52710-0963-4dd4-abb1-f4d29a1770b7.png',
        price: '$ 25',
        tags: ['effect', 'delay'],
        created: '2023-11-19',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
