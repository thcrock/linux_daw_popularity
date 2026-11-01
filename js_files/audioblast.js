const developer = {
    name: 'Audio Blast',
    trimImages: 5,
}

const common = {
    developer: developer.name,
    formats: ['vst2', 'vst3'],
}

const apps = [
    {
        name: 'AcidBox',
        url: 'https://www.audioblast.me/product/acidbox/',
        image: 'https://www.audioblast.me/wp-content/uploads/2020/09/AcidBox2-1.jpg',
        price: '€ 49,99',
        tags: ['synth', '303'],
        created: '2023-04-23',
    },
    {
        name: 'Mininn Drum',
        url: 'https://www.audioblast.me/product/mininn-drum/',
        image: 'https://www.audioblast.me/wp-content/uploads/2023/01/MininnDrum-ROM1.jpg',
        price: '€ 79',
        tags: ['synth', 'percussion'],
        created: '2023-04-23',
    },
    {
        name: 'BreadSlicer',
        url: 'https://www.audioblast.me/breadslicer/',
        image: 'https://www.audioblast.me/wp-content/uploads/2021/12/bread-slicer-FX-1024x896.jpg',
        price: 'No charge',
        tags: ['effect', 'glitch'],
        created: '2023-04-23',
    },
    {
        name: 'BreadSlicer Pro',
        url: 'https://www.audioblast.me/product/breadslicer-pro/',
        image: 'https://www.audioblast.me/wp-content/uploads/2023/04/BreadSlicerPro_BreadSlicer-UI.jpg',
        price: '€ 99',
        tags: ['effect', 'glitch'],
        created: '2023-05-14',
    },
    {
        name: 'Minilooper',
        url: 'https://www.audioblast.me/product/minilooper/',
        image: 'https://www.audioblast.me/wp-content/uploads/2023/10/Hero-GUI.webp',
        price: '€ 60',
        tags: ['effect', 'glitch'],
        created: '2023-10-17',
    },
    {
        name: 'Instalooper3',
        url: 'https://www.audioblast.me/product/instalooper3/',
        image: 'https://www.audioblast.me/wp-content/uploads/2020/09/instalooper3-scope.jpg',
        price: '€ 84.99',
        tags: ['effect', 'glitch'],
        created: '2023-10-17',
    },
    {
        name: 'Rave Generator 3',
        url: 'https://www.audioblast.me/product/rave-generator-3/',
        image: 'https://www.audioblast.me/wp-content/uploads/2024/02/AudioBlast-Rave-Generator-III.webp',
        price: '€ 149',
        tags: ['synth', 'sampler'],
        created: '2024-02-09',
    },
    {
        name: 'Abx3',
        url: 'https://www.audioblast.me/product/abx3/',
        image: 'https://www.audioblast.me/wp-content/uploads/2024/09/abx3.webp',
        price: '€ 179',
        tags: ['synth', '303'],
        created: '2024-09-25',
        trimImage: 30,
    },
    {
        name: 'Multi FX Blaster',
        description: 'Multi effect with sequencing.',
        url: 'https://www.audioblast.me/product/multi-fx-blaster/',
        image: {
            url: 'https://www.audioblast.me/wp-content/uploads/2026/02/Multi-Fx-Blaster-White.png',
            trim: 150,
        },
        price: '€ 99',
        tags: ['effect', 'reverb', 'chorus', 'phaser', 'flanger', 'vibrato', 'pan', 'distortion', 'filter', 'delay', 'gate', 'glitch'],
        created: '2026-08-04',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
