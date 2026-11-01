const developer = {
    name: 'x42',
    crawl: {
        engine: 'fetch',
        tasks: [{
            target: 'version',
            el: [ '#right a .tooltip:contains("Linux 64bit") small', '.list .dl:contains("Linux 64bit") small' ],
            match: 'v(\\d{1,2}\\.\\d{1,2}\\.?-?\\d{0,2})\\s'
        }]
    }
}

const common = {
    developer: developer.name,
    created: '2023-01-29',
    formats: ['lv2'],
}

const apps = [
    {
        name: 'Digital Peak Limiter',
        url: 'https://x42-plugins.com/x42/x42-limiter',
        image: 'https://raw.githubusercontent.com/x42/dpl.lv2/master/img/dpl1.png',
        source: 'https://github.com/x42/dpl.lv2',
        price: 'No charge',
        tags: ['effect', 'limiter'],
        license: 'GPL-3.0',
    },
    {
        name: 'Auto Tune',
        url: 'https://x42-plugins.com/x42/x42-autotune',
        image: 'https://raw.githubusercontent.com/x42/fat1.lv2/master/img/fat1_v1.png',
        source: 'https://github.com/x42/fat1.lv2',
        price: 'No charge',
        tags: ['effect', 'pitch'],
        license: 'GPL-2.0',
    },
    {
        name: 'Compressor',
        url: 'https://x42-plugins.com/x42/x42-compressor',
        image: 'https://raw.github.com/x42/darc.lv2/master/img/darc.png',
        source: 'https://github.com/x42/darc.lv2',
        price: 'No charge',
        tags: ['effect', 'compressor'],
        license: 'GPL-3.0',
    },
    {
        name: 'setBfree',
        url: 'https://x42-plugins.com/x42/setBfree',
        image: 'https://raw.githubusercontent.com/pantherb/setBfree/master/doc/b_synth.png',
        source: 'https://github.com/pantherb/setBfree',
        price: 'No charge',
        tags: ['synth', 'organ'],
        license: 'GPL-2.0',
    },
    {
        name: 'AVL Drumkits',
        url: 'https://x42-plugins.com/x42/x42-avldrums',
        image: 'https://x42-plugins.com/x42/static/img/avl/red_zeppelin.png',
        source: 'https://github.com/x42/avldrums.lv2',
        price: 'No charge',
        tags: ['sample based', 'percussion'],
        license: 'GPL-2.0',
    },
    {
        name: 'Meter Collection',
        url: 'https://x42-plugins.com/x42/x42-meters',
        image: 'https://raw.githubusercontent.com/x42/meters.lv2/master/doc/LV2ebur128.png',
        source: 'https://github.com/x42/meters.lv2',
        price: '$ 99 / No charge',
        tags: ['analyzer'],
        license: 'GPL-2.0',
    },
    {
        name: 'Equalizer',
        url: 'https://x42-plugins.com/x42/x42-eq',
        image: 'https://raw.github.com/x42/fil4.lv2/master/img/fil4_v6.png',
        source: 'https://github.com/x42/fil4.lv2',
        price: '$ 69 / No charge',
        tags: ['effect', 'eq'],
        license: 'GPL-2.0',
    },
    {
        name: 'Whirl Speaker',
        url: 'https://x42-plugins.com/x42/x42-whirl',
        image: 'https://raw.githubusercontent.com/pantherb/setBfree/master/doc/b_whirl.png',
        source: 'https://github.com/pantherb/setBfree',
        price: '$ 49 / No charge',
        tags: ['effect', 'leslie'],
        license: 'GPL-2.0',
    },
    {
        name: 'Instrument Tuner',
        url: 'https://x42-plugins.com/x42/x42-tuner',
        image: 'https://raw.github.com/x42/tuna.lv2/master/img/tuna2.png',
        source: 'https://github.com/x42/tuna.lv2',
        price: 'Pay what you want',
        tags: ['analyzer', 'tuner'],
        license: 'GPL-2.0',
    },
    {
        name: 'Oscilloscope',
        url: 'https://x42-plugins.com/x42/x42-scope',
        images: [
            {
                url: 'https://camo.githubusercontent.com/bf218829bef2282673f22723d92bb7086946860538dc0a2d3f2ebd060de6c04e/68747470733a2f2f7261772e6769746875622e636f6d2f7834322f736973636f2e6c76322f6d61737465722f696d672f736973636f342e706e67',
                type: 'png',
            },
            {
                url: 'https://camo.githubusercontent.com/dc9f4dd4d1998f2c89d3cf6189df4ae215b11df75f08cf1033e665ad58e0bb9c/68747470733a2f2f7261772e6769746875622e636f6d2f7834322f736973636f2e6c76322f6d61737465722f696d672f73636f70655653776176652e706e67',
                type: 'png',
            },
            {
                url: 'https://camo.githubusercontent.com/7ef0b5f14dedc7fe12d0f7a558fa6cbdcb4dcae204b522c427278e4f01b0c0f0/68747470733a2f2f7261772e6769746875622e636f6d2f7834322f736973636f2e6c76322f6d61737465722f696d672f736973636f312e706e67',
                type: 'png',
            },
        ],
        source: 'https://github.com/x42/sisco.lv2',
        price: 'No charge',
        tags: ['analyzer'],
        license: 'GPL-2.0',
    },
    {
        name: 'Spectr',
        url: 'https://x42-plugins.com/x42/x42-spectra',
        image: 'https://raw.githubusercontent.com/x42/spectra.lv2/master/img/spectr.png',
        source: 'https://github.com/x42/spectra.lv2',
        price: 'No charge',
        tags: ['analyzer'],
        license: 'GPL-2.0',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
