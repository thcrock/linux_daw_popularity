const developer = {
    name: 'Plogue',
}

const common = {
    developer: developer.name,
    formats: ['vst3', 'clap', 'standalone'],
}

const apps = [
    {
        name: 'chipsounds',
        url: 'https://www.plogue.com/products/chipsounds.html',
        images: [
            'https://www.plogue.com/images/chipsound_screenshot01_870px.jpg',
            'https://www.plogue.com/images/chipsound_screenshot02_870px.jpg',
            'https://www.plogue.com/images/chipsound_screenshot03_870px.jpg',
        ],
        price: '$ 75',
        tags: ['synth', 'chiptune'],
        created: '2025-07-14',
    },
    {
        name: 'chipspeech',
        url: 'https://www.plogue.com/products/chipspeech.html',
        images: [
            'https://www.plogue.com/images/full01.jpg',
            'https://www.plogue.com/images/full02.jpg',
            'https://www.plogue.com/images/full03.jpg',
            'https://www.plogue.com/images/full04.jpg',
            'https://www.plogue.com/images/full05.jpg',
            'https://www.plogue.com/images/full06.jpg',
        ],
        price: '$ 75',
        tags: ['synth', 'chiptune', 'vocal'],
        created: '2025-07-14',
    },
    {
        name: 'sforzando',
        url: 'https://www.plogue.com/products/sforzando.html',
        image: 'https://www.plogue.com/images/Sforzando_interface_1.png',
        price: 'No charge',
        tags: ['synth', 'sample based', 'sfz', 'sf2'],
        created: '2025-07-14',
    },
    {
        name: 'chipsynth C64',
        url: 'https://www.plogue.com/products/chipsynth-c64.html',
        image: 'https://www.plogue.com/images/csc64_main_shot.png',
        price: '$ 49.95',
        tags: ['synth', 'chiptune'],
        created: '2025-11-23',
    },
    {
        name: 'chipsynth MD',
        url: 'https://www.plogue.com/products/chipsynth-md.html',
        image: 'https://www.plogue.com/images/mdui.png',
        price: '$ 49.95',
        tags: ['synth', 'chiptune'],
        created: '2025-11-23',
    },
    {
        name: 'chipsynth OPS7',
        url: 'https://www.plogue.com/products/chipsynth-ops7.html',
        image: 'https://www.plogue.com/images/csops7_main_shot.png',
        price: '$ 49.95',
        tags: ['synth', 'chiptune', 'fm'],
        created: '2025-11-23',
    },
    {
        name: 'chipsynth PortaFM',
        url: 'https://www.plogue.com/products/chipsynth-portafm.html',
        image: 'https://www.plogue.com/images/portaui.png',
        price: '$ 29.95',
        tags: ['synth', 'chiptune', 'fm'],
        created: '2025-11-23',
    },
    {
        name: 'chipsynth SFC',
        url: 'https://www.plogue.com/products/chipsynth-sfc.html',
        image: 'https://www.plogue.com/images/cssfc_main_shot.png',
        price: '$ 39.95',
        tags: ['synth', 'chiptune'],
        created: '2025-11-23',
    },
    {
        name: 'chipcrusher',
        url: 'https://www.plogue.com/products/chipcrusher.html',
        images: [
            'https://www.plogue.com/images/chipcrusher2_screenshot_1.png',
            'https://www.plogue.com/images/cc2-Screenshot_2.png',
            'https://www.plogue.com/images/cc2-Screenshot_3.png',
        ],
        price: '$ 39.00',
        tags: ['synth', 'chiptune'],
        created: '2026-01-01',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}


