const developer = {
    name: 'Arboreal Audio',
}

const common = {
    developer: developer.name,
}

const apps = [
    {
        name: 'OmniAmp',
        url: 'https://arborealaudio.com/plugins/omniamp/',
        image: 'https://arborealaudio.com/plugins/omniamp/UI_Full.png',
        price: '€ 30',
        description: 'All-in-one amplifier.',
        source: 'https://github.com/ArborealAudio/OmniAmp',
        license: 'GPL-3.0',
        tags: ['effect', 'amp'],
        formats: ['vst2', 'vst3'],
        created: '2023-11-03',
    },
    {
        name: 'STR-X',
        url: 'https://arborealaudio.com/plugins/str-x/',
        image: 'https://arborealaudio.com/plugins/str-x/str-x.jpg',
        price: 'No charge',
        description: "Not your grandpa's guitar amp.",
        source: 'https://github.com/ArborealAudio/STR-X',
        license: 'GPL-3.0',
        tags: ['effect', 'amp'],
        formats: ['vst2', 'vst3', 'clap'],
        created: '2023-11-03',
    },
    {
        name: 'PiMax',
        url: 'https://arborealaudio.com/plugins/pimax/',
        image: 'https://arborealaudio.com/plugins/pimax/PiMax_UI.jpg',
        price: '€ 30',
        description: "Make it loud.",
        source: 'https://github.com/ArborealAudio/PiMax',
        license: 'GPL-3.0',
        tags: ['effect', 'saturation', 'multiband'],
        formats: ['vst2', 'vst3', 'clap'],
        created: '2024-07-13',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
