const developer = {
    name: 'Kazrog',
    about: `
        <p>
            Kazrog produces an essential collection of audio plugins for VST, AU, and AAX formats, setting new standards for analog emulation and digital precision.
        </p>
        <p>
            Kazrog has received multiple NAMM TEC Awards nominations, and has become an industry staple for signal processing.
        </p>
        <p>
            At Kazrog, we are committed to a vision of extreme attention to detail and elegance in software and sound design.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['lv2', 'vst2', 'vst3'],
}

const apps = [
    {
        name: 'Retro Sta-Level',
        url: 'https://kazrog.com/products/retro-sta-level',
        image: 'https://cdn.shopify.com/s/files/1/0253/4300/0669/files/Retro_Sta_Level_-_UI_Mockup_d5922326-4d04-4c0a-a911-a0a838ceb926.png',
        price: '$ 49.99',
        description: 'Iconic Tube Compression',
        tags: ['effect', 'compressor'],
        created: '2025-04-22',
    },
    {
        name: 'Avalon EQ Bundle',
        url: 'https://kazrog.com/products/avalon-eq-bundle',
        images: [
            'https://cdn.shopify.com/s/files/1/0253/4300/0669/files/Kazrog_Avalon_AD2077_NAMM_Booth_Mockup_-_Silver_2500px.png',
            'https://cdn.shopify.com/s/files/1/0253/4300/0669/files/Kazrog_Avalon_AD2077_NAMM_Booth_Mockup_-_Black_2500px.png',
            'https://cdn.shopify.com/s/files/1/0253/4300/0669/files/Kazrog_Avalon_AD2055_NAMM_Booth_Mockup_-_Silver_2500px.png',
            'https://cdn.shopify.com/s/files/1/0253/4300/0669/files/Kazrog_Avalon_AD2055_NAMM_Booth_Mockup_-_Black_2500px.png',
        ],
        price: '$ 89.99',
        description: 'Two Legendary Equalizers in One Bundle',
        tags: ['effect', 'eq'],
        created: '2025-06-26',
    },
    {
        name: 'Airline V15',
        url: 'https://kazrog.com/collections/audio-plugins/products/airline-v15',
        images: [
            'https://static.kvraudio.com/i/b/airlinev15_amp_halfsize.jpg',
            'https://static.kvraudio.com/i/b/airlinev15_cabs_halfsize.png',
        ],
        price: '$ 29.99',
        description: 'A precise software emulation of the Airline Bass-Guitar Amplifier Model 62 9020A.',
        tags: ['effect', 'amp', 'distortion'],
        created: '2025-10-04',
    },
    {
        name: 'AmpCraft - 1992',
        url: 'https://kazrog.com/collections/audio-plugins/products/ampcraft-1992',
        images: [
            'https://static.kvraudio.com/i/b/ampcraft---1992---amp-view.png',
            'https://static.kvraudio.com/i/b/ampcraft---1992---cab-view.png',
            'https://static.kvraudio.com/i/b/ampcraft---1992---pedal-view---808.png',
        ],
        price: '$ 29.99',
        description: '4 OD pedals, a noise gate, dual-channel IR loader with speaker dynamics, EQ, and a critically-acclaimed array of over 200 impulse responses from 4 historic cabs.',
        tags: ['effect', 'amp', 'distortion'],
        created: '2025-10-04',
    },
    {
        name: 'Avalon VT-747SP',
        url: 'https://kazrog.com/collections/audio-plugins/products/avalon-vt-747sp',
        images: [
            'https://static.kvraudio.com/i/b/avalon-vt-747sp---black-theme.png',
            'https://static.kvraudio.com/i/b/avalon-vt-747sp---silver-theme.png',
        ],
        price: '$ 69.99',
        description: 'Silky 6-band EQ, musical bus compression, and switchable Class A tube / transistor.',
        tags: ['effect', 'eq', 'compressor', 'tube'],
        created: '2025-10-04',
    },
    {
        name: 'KClip 3',
        url: 'https://kazrog.com/collections/audio-plugins/products/kclip-3',
        images: [
            'https://static.kvraudio.com/i/b/kclip-3-6.png',
            'https://static.kvraudio.com/i/b/kclip-3-6---multiband.png',
        ],
        price: '$ 39.99',
        description: 'The industry standard clipper for mixing and mastering.',
        tags: ['effect', 'clipper'],
        created: '2025-10-04',
    },
    {
        name: 'KClip Zero',
        url: 'https://kazrog.com/collections/audio-plugins/products/kclip-zero',
        image: 'https://static.kvraudio.com/i/b/kclip-zero.png',
        price: 'No charge',
        description: 'Mastering-grade clipping.',
        tags: ['effect', 'clipper'],
        created: '2025-10-04',
    },
    {
        name: 'MHB Green',
        url: 'https://kazrog.com/collections/audio-plugins/products/mhb-green',
        image: 'https://static.kvraudio.com/i/b/mhbgreen_kvr.jpg',
        price: '$ 49.99',
        description: 'Rich compression and saturation heard on albums by Coldplay, John Mayer, James Bay, and more!.',
        tags: ['effect', 'compressor', 'saturation', 'tube'],
        created: '2025-10-04',
    },
    {
        name: 'Synth Warmer',
        url: 'https://kazrog.com/collections/audio-plugins/products/synth-warmer',
        image: 'https://static.kvraudio.com/i/b/synth-warmer-1-2-0.png',
        price: '$ 19.99',
        description: 'Iconic ladder filter and drive circuit from the original 70s monosynth.',
        tags: ['effect', 'filter'],
        created: '2025-10-04',
    },
    {
        name: 'True 252',
        url: 'https://kazrog.com/collections/audio-plugins/products/true-252',
        images: [
            'https://static.kvraudio.com/i/b/true-252---black-theme.png',
            'https://static.kvraudio.com/i/b/true-252---grey-theme.png',
        ],
        price: '$ 39.99',
        description: 'Emulation of the ultra-rare Langevin EQ 252A 7-band Graphic EQ.',
        tags: ['effect', 'eq'],
        created: '2025-10-04',
    },
    {
        name: 'True Dynamics',
        url: 'https://kazrog.com/collections/audio-plugins/products/true-dynamics',
        images: [
            'https://static.kvraudio.com/i/b/true-dynamics---la1b.png',
            'https://static.kvraudio.com/i/b/true-dynamics---26w.png',
        ],
        price: '$ 39.99',
        description: '3 vari-mu compressors: Presto 41A, ITA LA1B, and Collins 26W.',
        tags: ['effect', 'compressor'],
        created: '2025-10-04',
    },
    {
        name: 'True Iron',
        url: 'https://kazrog.com/collections/audio-plugins/products/true-iron',
        images: [
            'https://static.kvraudio.com/i/b/true-iron---theme-1.png',
            'https://static.kvraudio.com/i/b/true-iron---theme-2.png',
        ],
        price: '$ 39.99',
        description: "6 definitive line transformers from some of audio's most legendary hardware units",
        tags: ['effect', 'saturation'],
        created: '2025-10-04',
    },
    {
        name: 'MHB Red',
        url: 'https://kazrog.com/products/mhb-red',
        image: 'https://static.kvraudio.com/i/b/mhb_red_mainui_copper.jpg',
        price: '$ 49.99',
        description: 'Compressor/saturator plugin based on Fairchild 666 developed in collaboration with Michael H. Brauer.',
        tags: ['effect', 'compressor', 'vintage'],
        created: '2026-03-24',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
