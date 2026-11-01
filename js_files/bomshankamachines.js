const developer = {
    name: 'Bom Shanka Machines',
    crawl: {
        engine: 'fetch',
        tasks: [{
            target: 'version',
            el: [ '.plugin_version', '.version:last' ],
        },{
            target: 'price',
            currency: '£',
            el: '.four-fifth-800 span',
            match: '£(\\d{1,3}\\.?\\d{1,2})',
        }],
    },
}

const common = {
    developer: developer.name,
    formats: ['vst2'],
    created: '2023-03-09',
}

const apps = [
    {
        name: 'aardvarkkPhaser',
        url: 'https://bomshankamachin.es/plugins/aardvarkkPhaser',
        image: 'https://bomshankamachin.es/assets/img/uploads/aardvarkkPhaser_panel.jpg',
        price: '$ 49.99',
        tags: ['effect', 'phaser'],
    },
    {
        name: 'chrisGlitch',
        url: 'https://bomshankamachin.es/plugins/chrisGlitch',
        image: 'https://bomshankamachin.es/assets/img/uploads/chrisGlitch_panel.jpg',
        price: '$ 49.99',
        tags: ['effect', 'glitch'],
    },
    {
        name: 'asimilonGate',
        url: 'https://bomshankamachin.es/plugins/asimilonGate',
        image: 'https://bomshankamachin.es/assets/img/uploads/asimilonGate_panel.jpg',
        price: '$ 49.99',
        tags: ['effect', 'trance gate'],
    },
    {
        name: 'psymmetrixDelay',
        url: 'https://bomshankamachin.es/plugins/psymmetrixDelay',
        image: 'https://bomshankamachin.es/assets/img/uploads/psymmetrixDelay_panel.jpg',
        price: '$ 49.99',
        tags: ['effect', 'delay'],
    },
    {
        name: 'plasticityFilter',
        url: 'https://bomshankamachin.es/plugins/plasticityFilter',
        image: 'https://bomshankamachin.es/assets/img/uploads/plasticityFilter_expert_panel.jpg',
        price: 'No charge',
        tags: ['effect', 'filter'],
    },
    {
        name: 'occularScope',
        url: 'https://bomshankamachin.es/plugins/occularScope',
        image: 'https://bomshankamachin.es/assets/img/uploads/occularScope_panel.jpg',
        price: 'No charge',
        tags: ['analyzer'],
    },
    {
        name: 'illegalMachine',
        url: 'https://bomshankamachin.es/plugins/illegalMachine',
        image: 'https://bomshankamachin.es/assets/img/uploads/illegalMachine_panel.jpg',
        price: '$ 99.99',
        tags: ['sampler'],
        created: '2023-10-02',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
