const common = {
    developer: 'VZtec',
    url: 'https://en.vztecfx.com/',
    price: 'Donation / No charge',
    badges: [ 'tested-working' ],
    formats: ['vst3', 'lv2'],
}

const apps = [
    {
        name: 'Malibu',
        url: 'https://en.vztecfx.com/malibu-plugin',
        image: 'https://static.wixstatic.com/media/d60430_22bca4f6104042f1b4fb1fd50928c480~mv2.png',
        tags: ['effect', 'reverb', 'tremolo', 'guitar'],
        formats: ['clap', 'vst3', 'vst2', 'lv2'],
        created: '2024-05-03',
    },
    {
        name: 'Overdrive',
        url: 'https://en.vztecfx.com/overdrive-plugin',
        image: 'https://static.wixstatic.com/media/d60430_93ab4b49019b4ebeade423acb1538fb1~mv2.png',
        tags: ['effect', 'distortion', 'fuzz', 'guitar'],
        created: '2026-08-05',
    },
    {
        name: 'Fuzz',
        url: 'https://en.vztecfx.com/fuzz-plugin',
        image: 'https://static.wixstatic.com/media/d60430_da06906226404cf2b3e7f65b73fb7589~mv2.png',
        tags: ['effect', 'distortion', 'fuzz', 'guitar'],
        created: '2026-08-05',
    },
    {
        name: 'NAM Studio',
        url: 'https://en.vztecfx.com/nam-studio',
        image: 'https://static.wixstatic.com/media/d60430_42b45cd4ddb341e6baa0913344f69e42~mv2.png',
        tags: ['effect', 'amp', 'cab', 'pedal', 'ir', 'nam', 'eq', 'gate', 'tuner', 'guitar'],
        created: '2026-08-05',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
