const common = {
    developer: 'yimrakhee',
    price: 'No charge',
    license: 'GPL-3.0',
    formats: ['clap', 'vst3'],
    created: '2026-03-05',
}

const apps = [
    {
        name: 'springs',
        url: 'https://codeberg.org/yimrakhee/springs',
        image: 'https://codeberg.org/yimrakhee/springs/media/branch/main/assets/springs.png',
        source: 'https://codeberg.org/yimrakhee/springs',
        tags: ['effect', 'pedal', 'reverb'],
    },
    {
        name: 'suboctb',
        url: 'https://codeberg.org/yimrakhee/suboctb',
        image: 'https://codeberg.org/yimrakhee/suboctb/media/branch/main/assets/suboctb.png',
        source: 'https://codeberg.org/yimrakhee/suboctb',
        tags: ['synth'],
    },
    {
        name: 'distb',
        url: 'https://codeberg.org/yimrakhee/distb',
        image: 'https://codeberg.org/yimrakhee/distb/media/branch/main/assets/distb.png',
        source: 'https://codeberg.org/yimrakhee/distb',
        tags: ['effect', 'pedal', 'distortion', 'bass'],
    },
    {
        name: 'ampb',
        url: 'https://codeberg.org/yimrakhee/ampb',
        image: 'https://codeberg.org/yimrakhee/ampb/media/branch/main/assets/ampb.png',
        source: 'https://codeberg.org/yimrakhee/ampb',
        tags: ['effect', 'amp', 'bass'],
    },
    {
        name: 'ampg',
        url: 'https://codeberg.org/yimrakhee/ampg',
        image: 'https://codeberg.org/yimrakhee/ampg/media/branch/main/assets/ampg.png',
        source: 'https://codeberg.org/yimrakhee/ampg',
        tags: ['effect', 'amp', 'guitar'],
    },
    {
        name: 'fuzzb',
        url: 'https://codeberg.org/yimrakhee/fuzzb',
        image: 'https://codeberg.org/yimrakhee/fuzzb/media/branch/main/assets/fuzzb.png',
        source: 'https://codeberg.org/yimrakhee/fuzzb',
        tags: ['effect', 'pedal', 'fuzz', 'bass'],
    },
    {
        name: 'letsdist',
        url: 'https://codeberg.org/yimrakhee/letsdist',
        image: 'https://codeberg.org/yimrakhee/letsdist/media/branch/main/assets/letsdist.png',
        source: 'https://codeberg.org/yimrakhee/letsdist',
        tags: ['effect', 'pedal', 'distortion', 'guitar'],
    },
    {
        name: 'smallmuffin',
        url: 'https://codeberg.org/yimrakhee/smallmuffin',
        image: 'https://codeberg.org/yimrakhee/smallmuffin/media/branch/main/assets/smallmuffin.png',
        source: 'https://codeberg.org/yimrakhee/smallmuffin',
        tags: ['effect', 'pedal', 'fuzz', 'guitar', 'bass'],
    },
    {
        name: 'crushfuzz',
        url: 'https://codeberg.org/yimrakhee/crushfuzz',
        image: 'https://codeberg.org/yimrakhee/crushfuzz/media/branch/main/assets/crushfuzz.png',
        source: 'https://codeberg.org/yimrakhee/crushfuzz',
        tags: ['effect', 'pedal', 'fuzz', 'guitar'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
