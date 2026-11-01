const common = {
    developer: 'JoaCHIP',
    price: 'No charge',
    formats: ['vst3'],
    created: '2026-03-05',
}

const apps = [
    {
        name: 'Battle Compressor',
        url: 'https://www.robotplanet.dk/audio_plugins/battlecomp_vintage/',
        image: 'https://www.robotplanet.dk/audio_plugins/battlecomp_vintage/battle_compressor.png',
        tags: ['effect', 'compressor'],
    },
    {
        name: 'Dense Fog Machine',
        url: 'https://www.robotplanet.dk/audio_plugins/dense_fog_machine/',
        image: 'https://www.robotplanet.dk/audio_plugins/dense_fog_machine/dense_fog_machine.jpg',
        tags: ['effect'],
    },
    {
        name: 'Hyperion EQ',
        url: 'https://www.robotplanet.dk/audio_plugins/hyperion_eq/',
        image: 'https://www.robotplanet.dk/audio_plugins/hyperion_eq/hyperion_eq.webp',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Mars Distortion',
        url: 'https://www.robotplanet.dk/audio_plugins/mars_distortion/',
        image: 'https://www.robotplanet.dk/audio_plugins/mars_distortion/mars_distortion.gif',
        tags: ['effect', 'distortion'],
    },
    {
        name: 'Mercury Filter',
        url: 'https://www.robotplanet.dk/audio_plugins/mercury_filter/',
        image: 'https://www.robotplanet.dk/audio_plugins/mercury_filter/mercury_filter.gif',
        tags: ['effect', 'filter'],
    },
    {
        name: 'Quick Meter',
        url: 'https://www.robotplanet.dk/audio_plugins/quick_meter/',
        image: 'https://www.robotplanet.dk/audio_plugins/quick_meter/quick_meter.png',
        tags: ['analyzer', 'spectral'],
    },
    {
        name: 'TB4006',
        url: 'https://www.robotplanet.dk/audio_plugins/tb4006/',
        image: 'https://www.robotplanet.dk/audio_plugins/tb4006/tb4006.png',
        tags: ['synth', '303'],
    },
    {
        name: 'Uranus Delay',
        url: 'https://www.robotplanet.dk/audio_plugins/uranus_delay/',
        image: 'https://www.robotplanet.dk/audio_plugins/uranus_delay/uranus_delay.png',
        tags: ['effect', 'delay'],
    },
    {
        name: 'PodCast Helper',
        url: 'https://www.robotplanet.dk/audio_plugins/podcast_helper/',
        image: 'https://www.robotplanet.dk/audio_plugins/podcast_helper/podcasthelper.gif',
        tags: ['effect', 'compressor', 'channel strip', 'broadcast'],
        created: '2026-09-01',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
