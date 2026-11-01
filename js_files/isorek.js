const common = {
    developer: 'Isorek',
    formats: ['vst3', 'lv2'],
    price: 'Donation / No charge',
}

const apps = [
    {
        name: 'Bridge',
        description: 'Legato MIDI utility that keeps notes alive across scene, loop and clip changes.',
        url: 'https://isorek.com/bridge/',
        image: {
            url: 'https://isorek.com/images/borderless/bridge/Borderless_bridge.png',
            crop: {
                left: 23,
                top: 23,
                right: 897,
                bottom: 637,
            },
        },
        tags: ['midi'],
        created: '2026-08-31',
    },
    {
        name: 'Gates',
        url: 'https://isorek.com/gates/',
        image: 'https://isorek.com/images/borderless/gates/Borderless_gates.png',
        tags: ['midi'],
        created: '2026-08-31',
    },
    {
        name: 'Polix-P',
        url: 'https://isorek.com/polix-p/',
        image: 'https://isorek.com/images/guides/polix-p/introduction.jpg',
        tags: ['midi'],
        created: '2026-08-31',
    },
    {
        name: 'Prologue',
        url: 'https://isorek.com/prologue/',
        image: 'https://isorek.com/images/borderless/prologue/Borderless_prologue.png',
        tags: ['midi', 'chord'],
        created: '2026-08-31',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
