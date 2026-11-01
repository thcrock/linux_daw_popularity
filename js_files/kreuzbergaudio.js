const common = {
    developer: 'Kreuzberg Audio',
}

const apps = [
    {
        name: 'Reecer',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/downloads/reecer-synthesizer-public-beta/',
        images: [
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Bildschirmfoto-2026-02-20-um-4.05.31-PM-1024x793.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Bildschirmfoto-2026-02-20-um-4.05.45-PM-1024x793.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Mod-Tab-1024x770.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Drive-Tab-Paralell-1024x769.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/MorphEQ-Tab-1024x766.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Effects-Tab-1024x764.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Note-Splitter-Tab-1024x767.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Composer-Tab-1024x754.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/01/Perfomance-Tab-1024x767.png',
        ],
        price: 'No charge',
        tags: ['synth', 'subtractive'],
        formats: ['vst3', 'standalone'],
        created: '2026-04-16'
    },
    {
        name: 'KA-303',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/en/downloads/ka-303-acid-synthesizer/',
        images: [
            'https://kreuzberg-audio.com/wp-content/uploads/2026/03/image-1024x605.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/03/image-2-1024x606.png',
        ],
        price: '€ 69',
        tags: ['synth', 'subtractive', '303'],
        formats: ['vst3', 'standalone'],
        created: '2026-05-17'
    },
    {
        name: 'Amen Machine',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/en/downloads/amen-machine/',
        images: [
            'https://kreuzberg-audio.com/wp-content/uploads/2026/05/amen-machine-main-2048x1605.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/05/amen-machine-fx-1536x1196.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/05/amen-machine-macros-1536x1208.png',
        ],
        price: '€ 19',
        tags: ['sampler', 'slicer'],
        formats: ['vst3', 'standalone'],
        created: '2026-05-17'
    },
    // {
    //     name: 'TB-303 Distortion',
    //     developer: 'Kreuzberg Audio',
    //     url: 'https://kreuzberg-audio.com/en/downloads/tb-303-distortion-plugin-kostenlos/',
    //     images: [
    //         {
    //             manual: true,
    //             type: 'png',
    //         },
    //     ],
    //     price: 'No charge',
    //     tags: ['effect', 'distortion', '303'],
    //     formats: ['vst3', 'standalone'],
    //     created: '2026-05-17'
    // },
    {
        name: 'TB-303 Distortion Pro',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/en/downloads/tb-303-distortion-pro-1-knob-effekt-plugin/',
        images: [
            {
                manual: true,
                type: 'png',
            },
            {
                manual: true,
                type: 'png',
            },
            {
                manual: true,
                type: 'png',
            },
        ],
        price: '€ 9.99',
        tags: ['effect', 'distortion', '303'],
        formats: ['vst3', 'standalone'],
        created: '2026-05-17'
    },
    {
        name: 'Grid-909',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/en/downloads/grid-909-midi-drum-pattern-generator/',
        images: [
            'https://kreuzberg-audio.com/wp-content/uploads/2026/04/image-1024x527.png',
            'https://kreuzberg-audio.com/wp-content/uploads/2026/04/Bildschirmfoto-2026-04-04-um-00.08.00-765x1024.png',
        ],
        price: '€ 19.99',
        tags: ['midi'],
        formats: ['vst3', 'standalone'],
        created: '2026-05-17'
    },
    {
        name: 'Uplifter',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/en/downloads/uplifter/',
        image: 'https://kreuzberg-audio.com/wp-content/uploads/2026/05/Uplifter-Main-2048x1491.png',
        price: '€ 49',
        tags: ['synth'],
        formats: ['vst3', 'standalone'],
        created: '2026-05-17'
    },
    {
        name: 'Oberton',
        developer: 'Kreuzberg Audio',
        url: 'https://kreuzberg-audio.com/en/downloads/oberton/',
        image: 'https://kreuzberg-audio.com/wp-content/uploads/2026/05/Oberton-2048x1495.png',
        price: '€ 49',
        tags: ['effect', 'eq', 'saturation', 'multiband'],
        formats: ['vst3', 'standalone'],
        created: '2026-05-17'
    },
    {
        name: 'BREITSEITE',
        url: 'https://kreuzberg-audio.com/downloads/breitseite/',
        image: 'https://kreuzberg-audio.com/wp-content/uploads/2026/09/breitseite-front-0-3-2-2048x1355.png',
        price: '€ 49',
        tags: ['effect', 'stereo'],
        formats: ['clap', 'vst3', 'standalone'],
        created: '2026-09-18',
    },
    {
        name: 'STAFFEL',
        description: 'Creative filter and IMPRINT resonator.',
        url: 'https://kreuzberg-audio.com/en/downloads/staffel/',
        image: 'https://kreuzberg-audio.com/wp-content/uploads/2026/09/staffel-front-1-0-0.jpg',
        price: '€ 49',
        tags: ['effect', 'filter', 'resonator'],
        formats: ['clap', 'vst3', 'standalone'],
        created: '2026-10-22',
    },
    {
        name: 'RASPEL',
        description: 'Saturating filter and wavefolder.',
        url: 'https://kreuzberg-audio.com/en/downloads/raspel/',
        image: 'https://kreuzberg-audio.com/wp-content/uploads/2026/10/raspel-front-1-0-0.jpg',
        price: 'No charge',
        tags: ['effect', 'filter', 'saturation'],
        formats: ['clap', 'vst3', 'standalone'],
        created: '2026-10-22',
    },
    {
        name: 'POLSCHWARM',
        description: 'Pole swarm filter.',
        url: 'https://kreuzberg-audio.com/en/downloads/polschwarm/',
        image: 'https://kreuzberg-audio.com/wp-content/uploads/2026/10/polschwarm-front-1-0-0.jpg',
        price: '€ 49',
        tags: ['effect', 'filter'],
        formats: ['clap', 'vst3', 'standalone'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
