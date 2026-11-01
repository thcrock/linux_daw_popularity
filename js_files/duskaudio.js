const common = {
    developer: 'Dusk Audio',
    formats: ['lv2', 'vst3'],
    license: 'GPL-3.0',
    source: 'https://github.com/dusk-audio/dusk-audio-plugins',
    created: '2026-03-02',
}

const apps = [
    {
        name: '4K-EQ',
        url: 'https://dusk-audio.github.io/plugins/4k-eq/',
        image: 'https://dusk-audio.github.io/assets/images/plugins/4k-eq-screenshot.png',
        price: 'No charge',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Multi-Comp',
        url: 'https://dusk-audio.github.io/plugins/multi-comp/',
        images: [
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/vintage-opto.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/vintage-fet.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/classic-vca.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/bus-compressor.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/studio-fet.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/studio-vca.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/digital.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-comp/multiband.png',
        ],
        price: 'No charge',
        tags: ['effect', 'compressor', 'multiband'],
    },
    {
        name: 'TapeMachine',
        url: 'https://dusk-audio.github.io/plugins/tapemachine/',
        image: 'https://dusk-audio.github.io/assets/images/plugins/tapemachine-screenshot.png',
        price: 'No charge',
        tags: ['effect', 'saturation', 'tape'],
    },
    {
        name: 'Multi-Q',
        url: 'https://dusk-audio.github.io/plugins/multi-q/',
        images: [
            'https://dusk-audio.github.io/assets/images/plugins/multi-q-digital.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-q-british.png',
            'https://dusk-audio.github.io/assets/images/plugins/multi-q-tube.png',
        ],
        price: 'No charge',
        tags: ['effect', 'eq'],
    },
    {
        name: 'DuskVerb',
        url: 'https://dusk-audio.github.io/plugins/duskverb/',
        image: 'https://dusk-audio.github.io/assets/images/plugins/duskverb-screenshot.png',
        price: 'No charge',
        tags: ['effect', 'reverb'],
    },
    {
        name: 'Chord Analyzer',
        url: 'https://dusk-audio.github.io/plugins/chord-analyzer/',
        image: 'https://dusk-audio.github.io/assets/images/plugins/chord-analyzer-screenshot.png',
        price: 'No charge',
        tags: ['midi', 'chord'],
        created: '2026-04-14',
    },
    {
        name: 'TapeMachine 2',
        url: 'https://duskaudio.com/plugins/tapemachine-2/',
        image: 'https://duskaudio.com/assets/images/plugins/tapemachine-2-screenshot.png',
        price: 'No charge',
        tags: ['effect', 'saturation', 'tape'],
        created: '2026-07-18',
    },
    {
        name: 'Sunset Circuits',
        url: 'https://duskaudio.com/plugins/sunset-circuits/',
        image: 'https://duskaudio.com/assets/images/plugins/sunset-circuits-cosmos.png',
        price: 'No charge',
        tags: ['synth', 'fm', 'subtractive', 'vintage'],
        badges: [ 'tested-working' ],
        formats: ['lv2', 'vst3', 'clap'],
        created: '2026-07-18',
    },
    {
        name: 'Tape Echo 2',
        url: 'https://duskaudio.com/plugins/tape-echo-2/',
        image: 'https://duskaudio.com/assets/images/plugins/tape-echo-2-screenshot.png',
        price: 'No charge',
        tags: ['effect', 'delay', 'tape'],
        badges: [ 'tested-working' ],
        created: '2026-08-12',
    },
    {
        name: '4K EQ 2',
        url: 'https://duskaudio.com/plugins/4k-eq-2/',
        image: 'https://duskaudio.com/assets/images/plugins/4k-eq-2-screenshot.png',
        price: 'No charge',
        tags: ['effect', 'eq'],
        created: '2026-09-05',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
