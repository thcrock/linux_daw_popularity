const common = {
    developer: 'atkAudio',
    formats: ['vst3'],
    created: '2026-05-18',
}

const apps = [
    {
        name: 'atkDucker',
        description: 'Ducker with M/S mode and sidechain.',
        url: 'https://www.atkaudio.com/products/atkducker',
        image: 'https://docs.atkaudio.com/products/atkDucker/atkDucker.png',
        tags: ['effect', 'ducker', 'broadcast'],
        price: 'No charge',
    },
    {
        name: 'atkSpeechLimiter',
        description: 'Limiter and de-esser',
        url: 'https://www.atkaudio.com/products/atkspeechlimiter',
        image: 'https://docs.atkaudio.com/products/atkSpeechLimiter/atkSpeechLimiter.png',
        tags: ['effect', 'limiter', 'deesser', 'vocal', 'broadcast'],
        price: 'No charge',
    },
    {
        name: 'atkAutoleveller',
        description: 'Gain rider aimed at live voice',
        url: 'https://www.atkaudio.com/products/atkautoleveller',
        image: 'https://docs.atkaudio.com/products/atkAutoleveller/atkAutoleveller.png',
        tags: ['effect', 'limiter', 'broadcast'],
        price: '$ 79',
    },
    {
        name: 'atkAutoEq',
        description: 'Automatic spectral EQ, resonance suppressor and de-esser for voice and other sources.',
        url: 'https://www.atkaudio.com/products/atkautoeq',
        image: 'https://docs.atkaudio.com/products/atkAutoEq/atkAutoEq.png',
        tags: ['effect', 'eq', 'vocal', 'spectral', 'broadcast'],
        price: '$ 99',
    },
    {
        name: 'atkAutomixer',
        description: 'An automixer (auto-gate or auto-expander) which attenuating low level inputs and preserves gain on sources with higher input levels.',
        url: 'https://www.atkaudio.com/products/atkautomixer',
        image: 'https://docs.atkaudio.com/products/atkAutomixer/atkAutomixer.png',
        tags: ['effect', 'gate', 'expander', 'broadcast'],
        price: '$ 199',
        formats: ['vst3', 'standalone'],
    },
    //{
    //    name: 'Plugin for OBS',
    //    description: 'VST3 plugin host for OBS',
    //    url: 'https://github.com/atkaudio/pluginforobsrelease',
    //    image: {
    //        url: 'https://docs.atkaudio.com/files/pluginforobs.png',
    //        crop: {
    //            left: 312,
    //            top: 170,
    //            right: 814,
    //            bottom: 698,
    //        },
    //    },
    //    source: 'https://github.com/atkaudio/pluginforobsrelease',
    //    price: 'No charge',
    //    tags: ['host'],
    //    formats: ['obs'],
    //    license: 'AGPL-3.0',
    //},
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

