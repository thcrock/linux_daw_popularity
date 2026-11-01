const developer = {
    name: 'Audio Assault',
    trimImages: 10,
}

const common = {
    developer: developer.name,
}

const apps = [
    {
        name: 'Berry Amp',
        url: 'https://audioassault.mx/product/berry_amp',
        images: [
            'https://audioassault.mx/product/img/berrypromo.png',
            'https://audioassault.mx/img/berrysc.jpg',
            'https://audioassault.mx/img/Blueberry.png',
            'https://audioassault.mx/img/Redberry.png',
            'https://audioassault.mx/img/Greenberry.png',
            'https://audioassault.mx/img/pedalberry.png',
            'https://audioassault.mx/img/cabberry.png',
        ],
        price: '$ 29.99',
        tags: ['effect', 'amp', 'cab', 'pedal', 'ir'],
        formats: ['vst3', 'vst2', 'standalone'],
        created: '2023-03-29',
        search: 'amplocker amp locker',
    },
    {
        name: 'IQ 505',
        url: 'https://audioassault.mx/legacy',
        image: 'https://audioassault.mx/img/iq505.jpg',
        price: '$ 14.99',
        tags: ['effect', 'eq'],
        formats: ['vst3', 'vst2'],
        created: '2022-12-30',
    },
    {
        name: 'EchoVibe',
        url: 'https://audioassault.mx/legacy',
        image: 'https://audioassault.mx/img/evisc.jpg',
        price: '$ 14.99',
        tags: ['effect', 'delay'],
        formats: ['vst3', 'vst2'],
        created: '2023-01-08',
    },
    {
        name: 'XCTR',
        url: 'https://audioassault.mx/legacy',
        image: 'https://audioassault.mx/img/xctrsc.png',
        price: '$ 24.99',
        tags: ['effect', 'saturation', 'multiband'],
        formats: ['vst3', 'vst2'],
        created: '2022-12-30',
    },
    {
        name: 'Klank',
        url: 'https://audioassault.mx/product/klank',
        image: 'https://audioassault.mx/product/img/klank.png',
        price: '$ 14.99',
        tags: ['effect', 'preamp', 'eq', 'compressor'],
        created: '2022-12-30',
    },
    {
        name: 'Duality EX',
        url: 'https://audioassault.mx/legacy',
        image: 'https://audioassault.mx/img/dualitysc.jpg',
        price: '$ 24.99',
        tags: ['effect', 'amp', 'cab', 'pedal'],
        formats: ['vst3', 'vst2', 'standalone'],
        created: '2022-12-30',
    },
    {
        name: 'Amp Locker',
        url: 'https://audioassault.mx/getamplocker',
        images: [
            'https://audioassault.mx/img/amplockeramps.png',
            'https://audioassault.mx/img/prestige.jpg',
            'https://audioassault.mx/img/alpedals.png',
            'https://audioassault.mx/img/free.png',
            'https://audioassault.mx/img/alfeatures.png',
        ],
        price: 'No charge',
        tags: ['effect', 'amp', 'cab', 'pedal', 'ir', 'nam'],
        formats: ['standalone', 'vst3', 'lv2'],
        created: '2023-10-02',
        search: 'amplocker',
    },
    {
        name: 'Mix Locker',
        url: 'https://audioassault.mx/mixlocker',
        images: [
            'https://audioassault.mx/img/mixlocker.png',
            'https://audioassault.mx/img/modules.png',
            'https://audioassault.mx/img/ml3.png',
        ],
        price: 'No charge',
        tags: ['effect', 'preamp', 'compressor', 'eq'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
    },
    {
        name: 'Channel551',
        url: 'https://audioassault.mx/plugin/Channel551',
        image: 'https://audioassault.mx/plugin/img/upd/channel551.png',
        price: '$ 24.99',
        tags: ['effect', 'channel strip'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5'
    },
    {
        name: 'Equalizer551',
        url: 'https://audioassault.mx/plugin/Equalizer551',
        image: 'https://audioassault.mx/plugin/img/upd/equalizer551.png',
        price: '$ 14.99',
        tags: ['effect', 'eq'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5'
    },
    {
        name: 'Compressor551',
        url: 'https://audioassault.mx/plugin/Compressor551',
        image: 'https://audioassault.mx/plugin/img/upd/compressor551.png',
        price: '$ 14.99',
        tags: ['effect', 'compressor'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5'
    },
    {
        name: 'DoubleTake',
        url: 'https://audioassault.mx/plugin/DoubleTake',
        image: 'https://audioassault.mx/plugin/img/upd/doubletake.png',
        price: '$ 14.99',
        tags: ['effect', 'vocal'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5'
    },
    {
        name: 'EchoVerb',
        url: 'https://audioassault.mx/plugin/EchoVerb',
        image: 'https://audioassault.mx/plugin/img/upd/echoverb.png',
        price: '$ 14.99',
        tags: ['effect', 'reverb'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5'
    },
    {
        name: 'Head Crusher',
        url: 'https://audioassault.mx/plugin/Head_Crusher',
        image: 'https://audioassault.mx/plugin/img/headcrusher.png',
        price: '$ 24.99',
        tags: ['effect', 'saturation'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5'
    },
    {
        name: 'RM-2',
        url: 'https://audioassault.mx/plugin/RM-2',
        image: 'https://audioassault.mx/plugin/img/rm2.png',
        price: '$ 14.99',
        tags: ['effect', 'channel strip'],
        formats: ['vst3', 'lv2'],
        created: '2025-03-04',
        search: '5dbB5 console'
    },
    {
        name: 'Drum Locker',
        url: 'https://audioassault.mx/drumlocker',
        images: [
            'https://audioassault.mx/img/dls1.jpg',
            'https://audioassault.mx/img/dls2.jpg',
            'https://audioassault.mx/img/dls3.jpg',
        ],
        price: 'No charge',
        tags: ['sample based', 'percussion'],
        formats: ['vst3', 'lv2'],
        created: '2025-09-02',
    },
    {
        name: 'Snapshot Player',
        url: 'https://audioassault.mx/snapshotplayer',
        image: 'https://audioassault.mx/img/snapshotplayer.jpg',
        price: '$ 4.99',
        tags: ['effect', 'amp', 'cab', 'ir'],
        formats: ['standalone', 'vst3', 'lv2'],
        created: '2026-03-12',
    },
    {
        name: 'Snapshot Maker',
        url: 'https://audioassault.mx/snapshotmaker',
        image: 'https://audioassault.mx/img/snapshotmaker.jpg',
        price: '$ 14.99',
        tags: ['amp', 'cab', 'ir'],
        formats: ['standalone'],
        created: '2026-03-12',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
