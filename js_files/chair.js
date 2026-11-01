const developer = {
    name: 'C.H.A.I.R.',
    trimImages: 50,
}

const common = {
    developer: developer.name,
    search: 'chair',
    created: '2023-05-14',
    tags: ['synth', 'percussion', 'physical modeling'],
    formats: ['vst3'],
}

const apps = [
    {
        name: 'EXC!TE CYMBAL',
        url: 'https://www.chair.audio/product/excte-cymbal/',
        image: 'https://www.chair.audio/wp-content/uploads/2022/11/CYMBAL_Bitwig.png',
        price: 'No charge',
    },
    {
        name: 'EXC!TE CYMBAL PRO',
        url: 'https://www.chair.audio/product/excte-cymbal-pro/',
        image: 'https://www.chair.audio/wp-content/uploads/2022/11/CYMBAL_PRO_Bitwig.png',
        price: '€ 25',
    },
    {
        name: 'EXC!TE SNARE DRUM',
        url: 'https://www.chair.audio/product/excite_snare_drum/',
        image: 'https://www.chair.audio/wp-content/uploads/2021/06/Bildschirmfoto-2021-06-01-um-13.22.08-2.png',
        price: 'No charge',
    },
    {
        name: 'EXC!TE SNARE DRUM PRO',
        url: 'https://www.chair.audio/product/excte-snare-drum-pro/',
        image: 'https://www.chair.audio/wp-content/uploads/2021/06/Bildschirmfoto-2021-06-01-um-13.09.49.png',
        price: '€ 20',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
