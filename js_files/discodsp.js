const developer = {
    name: 'discoDSP',
    crawl: {
        engine: 'fetch',
        tasks: [{
            target: 'version',
            el: '#producttitle a',
        }],
    },
}

const common = {
    developer: developer.name,
    created: '2022-12-30',
}

const apps = [
    {
        name: 'Discovery Pro',
        url: 'https://www.discodsp.com/discoverypro/',
        image: 'https://www.discodsp.com/img/discoverypro.png',
        price: '$ 149',
        tags: ['synth', 'subtractive', 'vintage'],
        formats: ['standalone', 'vst3', 'vst2'],
        search: 'clavia nord lead nordlead',
    },
    {
        name: 'Discovery',
        url: 'https://www.discodsp.com/discovery/',
        image: 'https://www.discodsp.com/img/discovery.png',
        price: '$ 99',
        tags: ['synth', 'subtractive', 'vintage'],
        formats: ['vst3', 'vst2'],
        search: 'clavia nord lead nordlead',
    },
    {
        name: 'OB-Xd',
        url: 'https://www.discodsp.com/obxd/',
        image: 'https://www.discodsp.com/img/obxd20_ilkka_rosma.jpg',
        source: 'https://github.com/reales/OB-Xd',
        price: '$ 49 / No charge',
        tags: ['synth', 'subtractive', 'vintage'],
        formats: ['standalone', 'vst3', 'vst2', 'lv2'],
        license: 'GPL-3.0',
        search: 'oberheim ob-x',
    },
    {
        name: 'OPL',
        url: 'https://www.discodsp.com/opl/',
        image: 'https://www.discodsp.com/img/opl.png',
        source: 'https://github.com/reales/OPL',
        price: '$ 49 / No charge',
        tags: ['synth', 'chiptune'],
        formats: ['standalone', 'vst3', 'vst2'],
        license: 'GPL-2.0',
    },
    {
        name: 'Vertigo',
        url: 'https://www.discodsp.com/vertigo/',
        image: 'https://www.discodsp.com/img/vertigo4.png',
        price: '$ 79',
        tags: ['synth', 'additive'],
        formats: ['standalone', 'vst3', 'vst2'],
    },
    {
        name: 'Highlife',
        url: 'https://www.discodsp.com/highlife/',
        image: 'https://www.discodsp.com/img/highlife_edit.png',
        price: '$ 49',
        tags: ['sampler'],
        formats: ['vst2'],
    },
    {
        name: 'Bliss',
        url: 'https://www.discodsp.com/bliss/',
        image: 'https://www.discodsp.com/img/bliss_edit.png',
        price: '$ 99',
        tags: ['sampler'],
        formats: ['standalone', 'vst3', 'vst2'],
    },
    {
        name: 'Corona',
        url: 'https://www.discodsp.com/corona/',
        images: [
            'https://static.kvraudio.com/i/b/corona_6_dark.jpg',
            'https://static.kvraudio.com/i/b/corona_6_light.jpg',
        ],
        price: '$ 149',
        tags: ['synth', 'subtractive'],
        description: ['Corona blends Virtual Analog and Wave Synthesis, featuring three VA/WAVE and Roland® JP8080 modeled Super 7 unison oscillators.'],
        formats: ['standalone', 'vst3', 'vst2'],
        created: '2025-11-25',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
