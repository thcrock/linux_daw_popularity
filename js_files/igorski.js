const common = {
    developer: 'igorski',
    formats: ['vst3'],
    price: 'No charge',
}

const apps = [
    {
        name: 'Darvaza',
        url: 'https://www.igorski.nl/plugins/darvaza',
        image: {
            url: 'https://www.igorski.nl/data/modules/download/8/preview.jpg',
            crop: {
                left: 251,
                top: 25,
                right: 748,
                bottom: 507,
            },
        },
        source: 'https://github.com/igorski/darvaza',
        tags: ['effect', 'gate', 'tremelo'],
        created: '2026-08-25',
    },
    {
        name: 'Delirion',
        url: 'https://www.igorski.nl/plugins/delirion',
        image: 'https://www.igorski.nl/data/modules/download/10/preview.jpg',
        source: 'https://github.com/igorski/delirion',
        tags: ['effect', 'distortion', 'reverb'],
        created: '2026-08-25',
    },
    {
        name: 'FogPad',
        url: 'https://www.igorski.nl/plugins/fogpad',
        image: 'https://www.igorski.nl/data/modules/download/4/preview.jpg',
        source: 'https://github.com/igorski/fogpad',
        tags: ['effect', 'reverb'],
        created: '2026-08-25',
    },
    {
        name: 'Phlegetron',
        url: 'https://www.igorski.nl/plugins/phlegetron',
        image: {
            url: 'https://www.igorski.nl/data/modules/download/11/preview.jpg',
            crop: {
                left: 187,
                top: 0,
                right: 802,
                bottom: 530,
            },
        },
        source: 'https://github.com/igorski/phlegetron',
        tags: ['effect', 'distortion'],
        created: '2026-08-25',
    },
    {
        name: 'Rechoir',
        url: 'https://www.igorski.nl/plugins/rechoir',
        image: {
            url: 'https://www.igorski.nl/data/modules/download/9/preview.jpg',
            trim: 50,
        },
        source: 'https://github.com/igorski/rechoir',
        tags: ['effect', 'delay'],
        created: '2026-08-25',
    },
    {
        name: 'Regrader',
        url: 'https://www.igorski.nl/plugins/regrader',
        image: 'https://www.igorski.nl/data/modules/download/3/preview.jpg',
        source: 'https://github.com/igorski/regrader',
        tags: ['effect', 'delay'],
        created: '2026-08-25',
    },
    {
        name: 'Transformant',
        url: 'https://www.igorski.nl/plugins/transformant',
        image: {
            url: 'https://www.igorski.nl/data/modules/download/6/preview.jpg',
            trim: 20,
        },
        source: 'https://github.com/igorski/transformant',
        tags: ['effect', 'noise', 'filter'],
        created: '2026-08-25',
    },
    {
        name: 'VSTSID',
        url: 'https://www.igorski.nl/plugins/vstsid',
        image: {
            url: 'https://www.igorski.nl/data/modules/download/2/preview.jpg',
            crop: {
                left: 13,
                top: 126,
                right: 974,
                bottom: 405,
            },
        },
        source: 'https://github.com/igorski/VSTSID',
        tags: ['synth', 'chiptune'],
        created: '2026-08-25',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
