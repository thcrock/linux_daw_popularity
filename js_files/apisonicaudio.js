const developer = {
    name: 'Apisonic Audio',
}

const common = {
    developer: developer.name,
    formats: ['vst2', 'vst3'],
    created: '2023-01-22',
}

const apps = [
    {
        name: 'Speedrum',
        url: 'https://www.apisonic-audio.com/speedrum2.html',
        image: 'https://www.apisonic-audio.com/img/speedrum2/speedrum-01.jpg',
        price: '€ 99',
        tags: ['sampler', 'percussion'],
    },
    {
        name: 'Speedrum Lite',
        url: 'https://www.apisonic-audio.com/freeware.html#speedrum-lite',
        image: 'https://www.apisonic-audio.com/img/speedrum-lite/speedrum-lite-big.png',
        price: 'No charge',
        tags: ['effect', 'transient'],
        trimImage: 10,
    },
    {
        name: 'Transperc',
        url: 'https://www.apisonic-audio.com/freeware.html#transperc',
        image: 'https://www.apisonic-audio.com/img/transperc/transperc-big.jpg',
        price: 'No charge',
        tags: ['effect', 'transient'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
