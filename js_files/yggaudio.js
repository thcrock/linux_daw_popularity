const common = {
    developer: 'Ygg Audio',
    url: 'https://audio.yggdrasilrecords.net/',
    price: 'No charge',
    badges: [ 'tested-working' ],
    formats: ['vst3', 'clap'],
}

const apps = [
    {
        name: 'MF Reverb',
        image: 'https://audio.yggdrasilrecords.net/assets/img/screenshot-mf-reverb-plain.webp',
        tags: ['effect', 'reverb'],
        created: '2026-08-24',
    },
    {
        name: 'S1 Chorus / Flanger',
        image: 'https://audio.yggdrasilrecords.net/assets/img/screenshot-s1-chorus-flanger-plain.webp',
        tags: ['effect', 'chorus', 'flanger'],
        created: '2026-08-24',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

