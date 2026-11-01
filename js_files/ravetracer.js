const common = {
    developer: 'Ravetracer',
    source: 'https://github.com/Ravetracer/Verdalis',
    price: 'No charge',
    tags: ['synth', 'noise'],
    formats: ['clap', 'vst3'],
    license: 'MIT',
    created: '2026-09-13',
}

const apps = [
    {
        name: 'NightLife',
        description: 'A night, rather than a recording of one.',
        url: 'https://verdalis.ravetracer.de/uncategorized/nightlife/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/nightlife-1240x593.png',
    },
    {
        name: 'InsectSwarm',
        description: 'Insects at any number, from one to a hive.',
        url: 'https://verdalis.ravetracer.de/uncategorized/insectswarm/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/insectswarm.png',
    },
    {
        name: 'WhooshPact',
        description: 'A transition and impact library that never repeats itself.',
        url: 'https://verdalis.ravetracer.de/uncategorized/whooshpact/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/whooshpact-1240x708.png',
    },
    {
        name: 'CrackleBlaze',
        description: 'Fire you can sit any distance from.',
        url: 'https://verdalis.ravetracer.de/uncategorized/crackleblaze/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/crackleblaze.png',
    },
    {
        name: 'RiverFlow',
        description: 'Running water generated from first principles, no samples.',
        url: 'https://verdalis.ravetracer.de/uncategorized/riverflow/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/riverflow-1.png',
    },
    {
        name: 'ChirpParade',
        description: 'Birdsong you can play.',
        url: 'https://verdalis.ravetracer.de/uncategorized/chirpparade/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/chirpparade-1240x665.png',
    },
    {
        name: 'SkyHowl',
        description: 'Wind synthesis, starting from the fact that wind itself is silent.',
        url: 'https://verdalis.ravetracer.de/uncategorized/skyhowl/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/skyhowl-1.png',
    },
    {
        name: 'ShoreBreak',
        description: 'An ocean-surf synthesiser built out of measurements.',
        url: 'https://verdalis.ravetracer.de/uncategorized/shorebreak/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/shorebreak-1.png',
    },
    {
        name: 'ThunderClap',
        description: 'A thunder synthesiser whose main control is distance.',
        url: 'https://verdalis.ravetracer.de/uncategorized/thunderclap/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/thunderclap-1.png',
    },
    {
        name: 'RainyDay',
        description: 'Rain you can place anywhere.',
        url: 'https://verdalis.ravetracer.de/uncategorized/rainyday/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/rainyday-2.png',
    },
    {
        name: 'SäureKiste',
        description: 'Monophonic acid bass synth modelled circuit by circuit, with a 64-pattern sequencer and ten drive models.',
        url: 'https://verdalis.ravetracer.de/non-verdalis/saeurekiste/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/saeurekiste-window-advanced-1-1240x871.png',
        source: 'https://github.com/Ravetracer/audio-plugins',
        tags: ['synth', '303', 'bass'],
        created: '2026-10-22',
    },
    {
        name: 'RumpelKiste',
        description: 'Drum machine in the spirit of the 1984 classic, rebuilt voice by voice with no samples.',
        url: 'https://verdalis.ravetracer.de/non-verdalis/rumpelkiste/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/09/RumpelKiste-0.2.0-main-1240x708.png',
        source: 'https://github.com/Ravetracer/audio-plugins',
        tags: ['synth', 'percussion', 'sequencer'],
        created: '2026-10-22',
    },
    {
        name: 'Aurum Reverb',
        description: 'Algorithmic reverb with a per-frequency decay contour, six-band tone EQ, ducking and freeze.',
        url: 'https://verdalis.ravetracer.de/non-verdalis/aurum-reverb/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/10/Aurum-0.3.0-main.png',
        source: 'https://github.com/Ravetracer/audio-plugins',
        tags: ['effect', 'reverb'],
        created: '2026-10-22',
    },
    {
        name: 'Substrike',
        description: 'Kick drum designer that synthesises every hit from scratch with eight layers and a modulation matrix.',
        url: 'https://verdalis.ravetracer.de/non-verdalis/substrike-kick-drum-designer/',
        image: 'https://verdalis.ravetracer.de/wp-content/uploads/2026/10/substrike-window-1240x797.png',
        source: 'https://github.com/Ravetracer/audio-plugins',
        tags: ['synth', 'percussion'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
