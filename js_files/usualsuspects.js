const developer = {
    name: 'The Usual Suspects',
}

const common = {
    developer: developer.name,
    price: 'Donation / No charge',
    source: 'https://github.com/dsp56300/gearmulator',
    tags: ['synth', 'subtractive', 'vintage', 'ROM'],
    formats: ['clap', 'lv2', 'vst3', 'vst2'],
    license: 'GPL-3.0',
}

const apps = [
    {
        name: 'Osirus',
        url: 'https://dsp56300.wordpress.com/osirus/',
        image: 'https://dsp56300.files.wordpress.com/2022/01/image-1.png',
        search: 'access virus',
        created: '2023-08-22',
    },
    {
        name: 'Vavra',
        url: 'https://dsp56300.wordpress.com/vavra/',
        image: 'https://synthanatomy.com/wp-content/uploads/2023/04/The-Usual-Suspects-Vavra.001.jpeg',
        search: 'waldorf micro q',
        created: '2024-02-04',
    },
    {
        name: 'OsTIrus',
        url: 'https://dsp56300.wordpress.com/ostirus-downloads/',
        image: 'https://cdn.gearnews.com/wp-content/uploads/2023/11/dsp56300-ostirus.jpg',
        search: 'access virus ti',
        created: '2024-05-03',
        trimImage: 10,
    },
    {
        name: 'Xenia',
        url: 'https://dsp56300.wordpress.com/xenia/',
        images: [
            {
                url: 'https://synthanatomy.com/wp-content/uploads/2024/08/%E2%80%8EThe-Usual-Suspects-Xenia.jpeg',
                trim: 50,
            },
            'https://dsp56300.wordpress.com/wp-content/uploads/2025/03/grafik.png',
        ],
        search: 'waldorf microwave xt',
        created: '2025-03-11',
        trimImage: 10,
    },
    {
        name: 'NodalRed2x',
        url: 'https://dsp56300.wordpress.com/nodalred2x-downloads/',
        image: {
            url: 'https://dsp56300.wordpress.com/wp-content/uploads/2021/06/cropped-virus.png',
            manual: true,
        },
        search: 'nord lead 2',
        created: '2026-01-02',
    },
    {
        name: 'JE8086',
        url: 'https://dsp56300.wordpress.com/je8086/',
        image: {
            url: 'https://dsp56300.wordpress.com/wp-content/uploads/2021/06/cropped-virus.png',
            manual: true,
        },
        search: 'roland jp-8000 jp-8080 jp 8000 8080',
        created: '2026-01-02',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
