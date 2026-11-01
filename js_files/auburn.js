const developer = {
    name: 'Auburn Sounds',
    crawl: {
        engine: 'fetch',
        tasks: [{
            target: 'version',
            el: '#main-content h1',
            match: 'v(\\d{1,2}\\.\\d{1,2}\\.?\\d{0,2})\\s'
        }]
    }
}

const common = {
    developer: developer.name,
    created: '2022-12-30',
    formats: ['vst3', 'vst2', 'lv2'],
}

const apps = [
    {
        name: 'Lens',
        url: 'https://www.auburnsounds.com/products/Lens.html',
        image: 'https://www.auburnsounds.com/images/lens.jpg',
        price: '$ 65.34 / No charge',
        tags: ['effect', 'compressor', 'expander'],
    },
    {
        name: 'Renegate',
        url: 'https://www.auburnsounds.com/products/Renegate.html',
        image: 'https://www.auburnsounds.com/images/renegate.jpg',
        price: '$ 38 / No charge',
        tags: ['effect', 'gate'],
    },
    {
        name: 'Panagement',
        url: 'https://www.auburnsounds.com/products/Panagement.html',
        image: 'https://www.auburnsounds.com/images/panagement2.jpg',
        price: '$ 52 / No charge',
        tags: ['effect', 'pan', 'reverb', 'delay'],
    },
    {
        name: 'Couture',
        url: 'https://www.auburnsounds.com/products/Couture.html',
        image: 'https://www.auburnsounds.com/images/couture.jpg',
        price: '$ 25 / No charge',
        tags: ['effect', 'saturation'],
    },
    {
        name: 'Graillon',
        url: 'https://www.auburnsounds.com/products/Graillon.html',
        image: 'https://www.auburnsounds.com/images/graillon2.jpg',
        price: '$ 38 / No charge',
        tags: ['effect', 'pitch', 'vocal', 'bitcrusher'],
    },
    {
        name: 'Inner Pitch',
        url: 'https://www.auburnsounds.com/products/InnerPitch.html',
        image: 'https://www.auburnsounds.com/images/innerpitch.jpg',
        price: '$ 29 / No charge',
        tags: ['effect', 'pitch'],
        created: '2023-10-06',
    },
    {
        name: 'Selene',
        url: 'https://www.auburnsounds.com/products/Selene.html',
        image: 'https://www.auburnsounds.com/images/selene.jpg',
        price: '$ 38 / No charge',
        tags: ['effect', 'reverb'],
        created: '2025-10-28',
    },
    {
        name: 'Psypan 2',
        url: 'https://www.auburnsounds.com/products/Psypan.html',
        image: 'https://www.auburnsounds.com/images/psypan2.webp',
        price: '$ 38.67 / No charge',
        tags: ['effect', 'pan'],
        badges: [ 'tested-working' ],
        created: '2026-07-31',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
