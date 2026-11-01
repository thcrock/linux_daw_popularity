const common = {
    developer: 'audiosingularity',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Neurontape 1972',
        url: 'https://audiosingularity.com/product/neurontape-1972/',
        image: 'https://audiosingularity.com/wp-content/uploads/2023/08/neurontape-1972-interface-1536x781.jpg',
        price: '$ 69',
        tags: ['effect', 'tape', 'vintage'],
        created: '2023-06-29',
    },
    {
        name: 'Neurontube Tangie',
        url: 'https://audiosingularity.com/product/neurontube-tangie/',
        image: 'https://audiosingularity.com/wp-content/uploads/2024/05/carousel-tangie-amp-dt.jpg',
        price: '$ 79',
        tags: ['effect', 'amp'],
        created: '2024-06-02',
    },
    {
        name: 'neurontube: debut',
        url: 'https://audiosingularity.com/product/neurontube-debut/',
        image: 'https://audiosingularity.com/wp-content/uploads/2022/01/neurontube-image-2.png',
        price: 'No charge',
        tags: ['effect', 'amp'],
        created: '2024-06-23',
    },
    {
        name: 'Neurontube Rectify',
        url: 'https://audiosingularity.com/product/neurontube-rectify/',
        image: 'https://sitemedia.us-southeast-1.linodeobjects.com/wp-content/uploads/2025/01/rectify-ui-amplifier-small.jpg',
        price: '$ 109',
        tags: ['effect', 'amp'],
        created: '2026-05-29',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
