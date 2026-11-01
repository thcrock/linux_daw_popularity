const common = {
    developer: 'MousePlugins',
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'The Trick',
        url: 'https://mouseplugins.com/en/products/thetrick',
        image: 'https://mouseplugins.com/media/products/thetrick/interface-overview-dark-16.png',
        price: 'No charge',
        tags: ['effect', 'eq', 'tube'],
        created: '2026-04-20'
    },
    {
        name: 'StudioHum',
        url: 'https://mouseplugins.com/en/products/studiohum',
        image: 'https://mouseplugins.com/media/products/studiohum/interface-overview-dark-16.png',
        price: '€ 12',
        tags: ['synth', 'noise'],
        created: '2026-04-28'
    },
    {
        name: 'Mastino 60',
        url: 'https://mouseplugins.com/en/products/mastino-60',
        image: 'https://mouseplugins.com/media/products/mastino60/interface-overview-dark-16.png',
        price: '€ 18',
        tags: ['effect', 'compressor'],
        created: '2026-05-14'
    },
    {
        name: 'HysteresisShaper',
        url: 'https://mouseplugins.com/en/products/hysteresisshaper',
        image: 'https://mouseplugins.com/media/products/hysteresisshaper/interface-overview-dark-189.png',
        price: '€ 15',
        tags: ['effect', 'saturation'],
        created: '2026-05-14'
    },
    {
        name: 'DeepFryer',
        url: 'https://mouseplugins.com/en/products/deepfryer',
        image: 'https://mouseplugins.com/media/products/deepfryer/interface-overview-dark-189.png',
        price: '€ 18',
        tags: ['effect', 'saturation', 'tube'],
        created: '2026-05-14'
    },
    {
        name: 'GlassBreaker EQ',
        url: 'https://mouseplugins.com/en/products/glassbreakereq',
        image: 'https://mouseplugins.com/media/products/glassbreakereq/interface-overview-dark-189.png',
        price: '€ 18',
        tags: ['effect', 'eq'],
        created: '2026-05-14'
    },
    {
        name: 'Smith Island EQ',
        url: 'https://mouseplugins.com/en/products/glassbreakereq',
        image: 'https://mouseplugins.com/media/products/smithisland/smithisland_full_ui.png',
        price: '€ 18',
        tags: ['effect', 'eq'],
        created: '2026-05-14'
    },
    {
        name: 'X-Or',
        url: 'https://mouseplugins.com/en/products/xor',
        image: 'https://mouseplugins.com/media/products/xor/ui.png',
        price: 'No charge',
        tags: ['synth', 'subtractive', 'bass'],
        created: '2026-05-28'
    },
    {
        name: 'Harsmallow',
        url: 'https://mouseplugins.com/en/products/harshmallow',
        image: 'https://mouseplugins.com/media/products/harshmallow/ui.png',
        price: '$ 59',
        tags: ['effect', 'spectral'],
        created: '2026-06-11'
    },
    {
        name: 'Cambridge Channel Strip',
        url: 'https://mouseplugins.com/en/products/cambridge-channel-strip',
        image: 'https://mouseplugins.com/media/products/cambridgechannelstrip/interface-overview.png',
        // Price will change
        price: '€ 19.00',
        tags: ['effect', 'channel strip', 'eq', 'compressor', 'gate'],
        created: '2026-08-12'
    },
    {
        name: 'Cambridge Bus Compressor',
        url: 'https://mouseplugins.com/en/products/cambridge-bus-comp',
        image: 'https://mouseplugins.com/media/products/cambridgebuscomp/interface-overview.png',
        price: 'No charge',
        tags: ['effect', 'compressor'],
        created: '2026-08-27'
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
