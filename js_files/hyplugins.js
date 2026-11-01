const developer = {
    name: 'HY-Plugins',
    trimImages: 5,
}

const common = {
    developer: developer.name,
    formats: ['vst3', 'vst2'],
}

const apps = [
    {
        name: 'HY-Filter4',
        url: 'https://hy-plugins.com/product/hy-filter4/',
        image: 'https://hy-plugins.com/wp-content/uploads/filter4_resize-min.png',
        price: '$ 55 / No charge',
        tags: ['effect', 'filter'],
        created: '2022-12-30',
    },
    {
        name: 'HY-SEQ32',
        url: 'https://hy-plugins.com/product/hy-seq16x3/',
        image: 'https://hy-plugins.com/wp-content/uploads/seq32_resize-min.png',
        price: '$ 50 / No charge',
        tags: ['sequencer', 'midi'],
        created: '2022-12-30',
    },
    {
        name: 'HY-Slicer2',
        url: 'https://hy-plugins.com/product/hy-slicer2/',
        image: 'https://hy-plugins.com/wp-content/uploads/slicer2_cover2-2.jpg',
        price: '$ 60 / No charge',
        tags: ['sampler', 'slicer'],
        created: '2023-06-12',
    },
    {
        name: 'HY-POLY',
        url: 'https://hy-plugins.com/product/hy-poly/',
        image: 'https://hy-plugins.com/wp-content/uploads/hypoly_resize2-min.png',
        price: '$ 60 / No charge',
        tags: ['synth', 'subtractive'],
        created: '2023-06-12',
    },
    {
        name: 'HY-RPE2',
        url: 'https://hy-plugins.com/product/hy-rpewin-mac/',
        image: 'https://hy-plugins.com/wp-content/uploads/rpe2_resize-min.png',
        price: '$ 48 / No charge',
        tags: ['sequencer', 'midi'],
        created: '2023-06-12',
    },
    {
        name: 'HY-MPS2',
        url: 'https://hy-plugins.com/product/hy-mps3/',
        image: 'https://hy-plugins.com/wp-content/uploads/Cover2-scaled.webp',
        price: '$ 50 / No charge',
        tags: ['sequencer', 'midi'],
        created: '2024-06-25',
    },
    {
        name: 'HY-MBMFX3',
        url: 'https://hy-plugins.com/product/hy-mbmfx3/',
        image: 'https://hy-plugins.com/wp-content/uploads/mbmfx3_coverscl.png',
        price: '$ 60 / No charge',
        tags: ['effect', 'glitch'],
        created: '2025-08-08',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
