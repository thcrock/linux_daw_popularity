const common = {
    developer: 'Main St Audio Labs',
}

const apps = [
    {
        name: 'Vintage Tuner Stompbox',
        url: 'https://mainstaudiolabs.github.io/tuner-pedal.html',
        image: 'https://mainstaudiolabs.github.io/TunerPedal.png',
        source: 'https://github.com/mainstaudiolabs/pitch-detector-tuner',
        price: 'No charge',
        tags: ['tool', 'tuner'],
        formats: ['vst3', 'standalone'],
        license: 'MIT',
        created: '2026-08-26',
    },
    {
        name: 'Midnight Rambler',
        url: 'https://mainstaudiolabs.github.io/midnight-rambler.html',
        image: 'https://mainstaudiolabs.github.io/midnightramblerinterface.png',
        price: 'No charge',
        tags: ['effect', 'amp', 'guitar'],
        formats: ['vst3', 'standalone'],
        created: '2026-08-26',
    },
    {
        name: 'Main St 5F1',
        description: '1956 tweed Champ circuit rebuilt tube by tube.',
        url: 'https://mainstaudiolabs.github.io/main-st-5f1.html',
        image: 'https://mainstaudiolabs.github.io/MainSt5F1.png',
        price: 'No charge',
        tags: ['effect', 'amp'],
        formats: ['vst3', 'standalone'],
        created: '2026-10-22',
    },
    {
        name: "Main St '63 Spring",
        description: '1963 Fender spring reverb unit rebuilt part by part.',
        url: 'https://mainstaudiolabs.github.io/main-st-63-spring.html',
        image: 'https://mainstaudiolabs.github.io/MainSt63Spring.png',
        price: 'No charge',
        tags: ['effect', 'reverb'],
        formats: ['vst3'],
        created: '2026-10-22',
    },
    {
        name: 'Main St 5E3',
        description: '1959 tweed Deluxe circuit rebuilt tube by tube.',
        url: 'https://mainstaudiolabs.github.io/main-st-5e3.html',
        image: 'https://mainstaudiolabs.github.io/MainSt5E3.png',
        price: '$ 9',
        tags: ['effect', 'amp'],
        formats: ['vst3', 'standalone'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
