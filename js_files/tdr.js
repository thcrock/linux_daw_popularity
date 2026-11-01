const common = {
    developer: 'Tokyo Dawn Records',
    comment: 'All their newer plugins are now on linux. Their older plugin not (yet). Great plugins.',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'TDR Prism',
        url: 'https://www.tokyodawn.net/tdr-prism/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2025/05/TDR-Prism-4.png',
        price: 'No charge',
        tags: ['analyzer', 'spectral'],
        badges: [ 'tested-working' ],
        created: '2026-06-14'
    },
    {
        name: 'TDR Arbiter',
        url: 'https://www.tokyodawn.net/tdr-arbiter/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2025/09/TDR-Arbiter-4-1.png',
        price: '€ 50.00',
        tags: ['effect', 'spectral', 'deesser'],
        badges: [ 'tested-working' ],
        created: '2026-06-14'
    },
    {
        name: 'TDR Infrasonic',
        url: 'https://www.tokyodawn.net/tdr-infrasonic/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2025/09/TDR-Infrasonic-1-1.png',
        price: '€ 40.00',
        tags: ['effect', 'filter', 'eq'],
        badges: [ 'tested-working' ],
        created: '2026-06-14'
    },
    {
        name: 'TDR Elliptical',
        url: 'https://www.tokyodawn.net/tdr-elliptical/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2025/09/TDR-Elliptical-4-1.png',
        price: '€ 40.00',
        tags: ['effect', 'filter', 'eq', 'stereo'],
        badges: [ 'tested-working' ],
        created: '2026-06-14'
    },
    {
        name: 'TDR Limiter 6 GE',
        url: 'https://www.tokyodawn.net/tdr-limiter6-ge/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2018/11/Seite-1.png',
        description: 'Compressor, limiter and clipper with both peak and high frequency limiting.',
        price: '€ 60.00',
        tags: ['effect', 'limiter', 'compressor', 'clipper'],
        badges: [ 'tested-working' ],
        created: '2026-06-14'
    },
    {
        name: 'TDR Ultrasonic',
        url: 'https://www.tokyodawn.net/tdr-ultrasonic/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2025/09/TDR-Ultrasonic-3.png',
        price: '€ 30.00',
        tags: ['effect', 'filter', 'eq', 'gate'],
        badges: [ 'tested-working' ],
        created: '2026-06-14'
    },
    {
        name: 'TDR Nova',
        url: 'https://www.tokyodawn.net/tdr-nova/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2018/11/Seite-1-Kopie-1-1.png',
        price: 'No charge',
        tags: ['effect', 'eq', 'dynamics'],
        created: '2026-10-22',
    },
    {
        name: 'TDR Nova GE',
        url: 'https://www.tokyodawn.net/tdr-nova-ge/',
        image: 'https://www.tokyodawn.net/wp-content/uploads/2018/11/Seite-1-2.png',
        price: '€ 60.00',
        tags: ['effect', 'eq', 'dynamics'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
