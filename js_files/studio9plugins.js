const common = {
    developer: 'Studio9 Plugins',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'VLA-One - Voice Levelling Amplifier',
        description: 'Upward compressor especially useful for vocals. Design informed by MV2 and VOLA2',
        url: 'https://recordingstudio9.com/vla-one-voice-levelling-amplifier/',
        image: 'https://recordingstudio9.com/wp-content/uploads/2026/08/VLA-One_130_Screen-600x491.png',
        price: 'No charge',
        tags: ['effect', 'compressor'],
        created: '2026-07-11',
    },
    {
        name: 'G-Bus Compressor',
        description: 'An emulation of the SSL 4000 G-Bus stereo bus compressor.',
        url: 'https://recordingstudio9.com/g-bus-compressor/',
        image: 'https://recordingstudio9.com/wp-content/uploads/2026/08/G-Bus-Compressor-100.png',
        price: 'No charge',
        tags: ['effect', 'compressor'],
        created: '2026-07-29',
    },
    {
        name: 'VocLyrics',
        description: 'Large scale lyric display using LRC to synchronize to the session.',
        url: 'https://recordingstudio9.com/voclyrics/',
        image: 'https://recordingstudio9.com/wp-content/uploads/2026/08/VocLyric_EditMode110-600x498.png',
        price: 'No charge',
        tags: ['tool'],
        created: '2026-07-29',
    },
    {
        name: 'Crest Factor 9',
        description: 'Mastering limiter.',
        url: 'https://recordingstudio9.com/crest-factor-9/',
        image: 'https://recordingstudio9.com/wp-content/uploads/2026/09/CrestFactor9_100.png',
        price: 'No charge',
        tags: ['effect', 'limiter', 'mastering'],
        created: '2026-09-14',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
