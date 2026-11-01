const common = {
    developer: 'apulSoft',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Opalize',
        url: 'https://apulsoft.ch/opalize/',
        image: 'https://static.kvraudio.com/i/b/oplz2x.1766481894.png',
        price: '$ 49.90',
        description: 'Harmonics Beyond Dynamics.',
        tags: ['effect', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-04-12',
    },
    {
        name: 'apQualizr2',
        url: 'https://apulsoft.ch/apqualizr2/',
        image: 'https://apulsoft.ch/apqualizr2/apq2@2x.png',
        price: '$ 79.90',
        description: 'Modular equalizer plugin',
        tags: ['effect', 'eq'],
        badges: [ 'tested-working' ],
        created: '2026-05-08',
    },
    {
        name: 'apShaper',
        url: 'https://apulsoft.ch/apshaper/',
        image: 'https://apulsoft.ch/apshaper/shpr@2x.png',
        price: '$ 59.90',
        description: 'Harmonic distortion',
        tags: ['effect', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-05-08',
    },
    {
        name: 'apVerb',
        url: 'https://apulsoft.ch/apverb/',
        image: 'https://apulsoft.ch/apverb/avrb@2x.png',
        price: '$ 79.90',
        description: 'Flexible algorithmic reverb with shimmer, chorus and delay',
        tags: ['effect', 'reverb', 'delay', 'chorus'],
        badges: [ 'tested-working' ],
        created: '2026-07-23',
    },
    {
        name: 'splitS',
        url: 'https://apulsoft.ch/splits/',
        image: 'https://apulsoft.ch/splits/expert@2x.png',
        price: '$ 69.90',
        description: 'Sibilance management tool.',
        tags: ['effect', 'deesser', 'splitter'],
        created: '2026-10-22',
    },
    {
        name: 'apUnmask',
        url: 'https://apulsoft.ch/apunmask/',
        image: 'https://apulsoft.ch/apunmask/umsk@2x.png',
        price: '$ 39.90',
        description: 'Spectral unmasking processor.',
        tags: ['effect', 'spectral'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}


