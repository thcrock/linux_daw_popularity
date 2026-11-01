const common = {
    developer: 'DsgDnB',
    url: 'https://dsgdnb.com/plugins',
    price: 'Donation / No charge',
    formats: ['vst3', 'lv2'],
}

const apps = [
    {
        name: 'Scyllascope',
        url: 'https://dsgdnb.com/plugins/scyllascope',
        image: 'https://dsgdnb.com/scyllascope-og.png',
        tags: ['analyzer', 'oscilloscope'],
        created: '2026-01-18',
    },
    {
        name: 'DuckTool',
        url: 'https://dsgdnb.com/plugins/ducktool',
        image: 'https://dsgdnb.com/ducktool-og.png',
        tags: ['effect', 'envelope'],
        created: '2026-01-20',
    },
    {
        name: 'KickSpace',
        url: 'https://dsgdnb.com/plugins/kickspace',
        image: 'https://dsgdnb.com/kickspace-og.png',
        tags: ['synth', 'percussion'],
        created: '2026-01-20',
    },
    {
        name: 'vitOTTx',
        description: 'OTT effect from Vital synth as a separate effect.',
        url: 'https://github.com/Sakhnovkrg/vitOTTx',
        image: {
            url: 'https://dsgdnb.com/vitottx-og.png',
            crop: {
                left: 119,
                top: 156,
                right: 1081,
                bottom: 473,
            },
        },
        source: 'https://github.com/Sakhnovkrg/vitOTTx',
        tags: ['effect', 'compressor'],
        badges: [ 'tested-working' ],
        license: 'GPL-3.0',
        created: '2026-08-03',
    },
    {
        name: 'FreqSense',
        url: 'https://dsgdnb.com/plugins/freqsense',
        image: {
            url: 'https://dsgdnb.com/freqsense-og.png',
            crop: {
                left: 173,
                top: 33,
                right: 1026,
                bottom: 597,
            },
        },
        tags: ['analyzer', 'spectrum'],
        badges: [ 'tested-working' ],
        created: '2026-08-03',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
