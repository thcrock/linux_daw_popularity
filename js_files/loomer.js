const developer = {
    name: 'Loomer',
}

const common = {
    developer: developer.name,
    formats: ['vst2', 'vst3', 'standalone'],
}

const apps = [
    {
        name: 'Architect',
        url: 'https://loomer.co.uk/architect.html',
        images: [
            'https://loomer.co.uk/assets/images/architect1--lg-5bc77901cf22a12cf7c033172e82eee4.png',
            'https://loomer.co.uk/assets/images/architect2--lg-1267b5c5734dd42be15ce8c6e1cba967.png',
            'https://loomer.co.uk/assets/images/architect3--lg-4369cfd663a1218fb5f36fe0f068442b.png',
            'https://loomer.co.uk/assets/images/architect4--lg-ea868bb2d3c464bc62024a0418db485e.png',
        ],
        price: '£ 140',
        description: 'Architect is a modular MIDI toolkit and music production environment for macOS, Windows, and Linux.',
        tags: ['midi'],
        created: '2025-08-31',
    },
    {
        name: 'Aspect 2',
        url: 'https://loomer.co.uk/aspect.html',
        images: [
            'https://loomer.co.uk/assets/images/aspect1--lg-2a2c37107f460a08c9d9ddfa7c57134f.png',
            'https://loomer.co.uk/assets/images/aspect2--lg-bbeba39253d8a1dfdaeb746be38d9997.png',
            'https://loomer.co.uk/assets/images/aspect3--lg-be4ea7f21e3d04dc289e0474a10cf969.png',
            'https://loomer.co.uk/assets/images/aspect4--lg-1be1494f77b5b4461419cd3712998ac8.png',
            'https://loomer.co.uk/assets/images/aspect5--lg-2a72be3fdaa2ff97dc287a968f677800.png',
        ],
        price: '£ 85',
        description: 'Aspect is a 32 note polyphonic software instrument that combines a great-sounding, powerful synthesis engine with a flexible semi-modular architecture and unparalleled ease of use.',
        tags: ['synth'],
        created: '2025-08-31',
    },
    {
        name: 'Manifold',
        url: 'https://loomer.co.uk/manifold.html',
        image: 'https://loomer.co.uk/assets/images/manifold1--lg-7ced6873e11171813369fc3e70e39576.jpg',
        price: '£ 35',
        description: 'Manifold is a software audio effect processor that enhances an audio signal, producing a fuller, livelier, bigger sound.',
        tags: ['effect'],
        created: '2025-08-31',
    },
    {
        name: 'Resound',
        url: 'https://loomer.co.uk/resound.html',
        image: 'https://loomer.co.uk/assets/images/resound1--lg-12956fadfd9988af0ed4d06fbc9eee44.jpg',
        price: '£ 35',
        description: 'Resound is a software audio delay effect processor that emulates the sound and operation of vintage magnetic-tape echo units.',
        tags: ['effect', 'delay'],
        created: '2025-08-31',
    },
    {
        name: 'Sequent 2',
        url: 'https://loomer.co.uk/sequent.html',
        images: [
            'https://loomer.co.uk/assets/images/sequent1--lg-ec16244ce690f818e7d26a8083cfd208.png',
            'https://loomer.co.uk/assets/images/sequent2--lg-f1fbd385cb340fd917081727d9a979a6.png',
            'https://loomer.co.uk/assets/images/sequent3--lg-ad3094224076b8b1e1832230bfa23b1c.png',
            'https://loomer.co.uk/assets/images/sequent4--lg-3a397ba7276ba903eec3b4d31ab5374a.png',
        ],
        price: '£ 50',
        description: 'Sequent is a modular multi-effects unit, the ideal tool for mangling audio on stage or in the studio.',
        tags: ['effect'],
        created: '2025-08-31',
    },
    {
        name: 'Shift',
        url: 'https://loomer.co.uk/shift.html',
        images: [
            'https://loomer.co.uk/assets/images/shift1--lg-620709c5cdeaf8e13c4b646cdb31b456.png',
            'https://loomer.co.uk/assets/images/shift2--lg-bc3062daa733d463b4e5e37fee431810.png',
        ],
        price: '£ 45',
        description: 'Shift is a diatonic granular pitch shifting delay that combines an intuitive and beautiful user interface with a great sounding granular synthesis engine.',
        tags: ['effect', 'pitch'],
        created: '2025-08-31',
    },
    {
        name: 'String',
        url: 'https://loomer.co.uk/string.html',
        images: [
            'https://loomer.co.uk/assets/images/string1--lg-0f0737d95e73dcb8fa6151680718c710.png',
            'https://loomer.co.uk/assets/images/string2--lg-439c106d9a667649b6e4be9aebf9093e.png',
            'https://loomer.co.uk/assets/images/string5--lg-3e645ff9b9587837936ec45826dbb8cf.png',
        ],
        price: '£ 50',
        description: 'String is a virtual instrument that emulates the beautiful sound of the polyphonic string synthesizer.',
        tags: ['synth'],
        created: '2025-08-31',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
