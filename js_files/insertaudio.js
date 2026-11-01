const common = {
    developer: 'Insert Audio',
    url: 'https://store.insertapp.io/',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'MagnaValve',
        description: 'Valve and transformer saturation.',
        url: 'https://store.insertapp.io/plugins#magnavalve',
        image: 'https://store.insertapp.io/images/magnavalve.png',
        price: 'No charge',
        tags: ['effect', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'EQ Model 51',
        description: 'Analog style EQ.',
        url: 'https://store.insertapp.io/plugins#insert-eq-model-51',
        image: {
            url: 'https://store.insertapp.io/images/insert-eq-model-51.png',
            crop: {
                left: 205,
                top: 30,
                right: 425,
                bottom: 706,
            },
        },
        price: '$ 19',
        tags: ['effect', 'eq'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'EQ 33',
        description: 'Analog style EQ.',
        url: 'https://store.insertapp.io/plugins#insert-eq-33',
        image: 'https://store.insertapp.io/images/insert-eq-33.png',
        price: '$ 49',
        tags: ['effect', 'eq'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'Dynamics Lab',
        description: 'Compressor with saturation',
        url: 'https://store.insertapp.io/plugins#insert-dynamics-lab',
        image: 'https://store.insertapp.io/images/insert-dynamics-lab.png',
        price: '$ 29',
        tags: ['effect', 'compressor', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'Insert Tape',
        description: 'Tape inspired color box.',
        url: 'https://store.insertapp.io/plugins#insert-tape',
        image: 'https://store.insertapp.io/images/insert-tape.png',
        price: '$ 49',
        tags: ['effect', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'Lacquer',
        description: 'Vinyl inspired color box.',
        url: 'https://store.insertapp.io/plugins#insert-lacquer',
        image: 'https://store.insertapp.io/images/insert-lacquer.png',
        price: '$ 29',
        tags: ['effect', 'saturation'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: 'Insert Crusher',
        description: 'Compression, saturation with sc filtering.',
        url: 'https://store.insertapp.io/plugins#insert-crusher',
        image: 'https://store.insertapp.io/images/insert-crusher.png',
        price: '$ 19',
        tags: ['effect', 'saturation', 'compressor', 'filter'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

