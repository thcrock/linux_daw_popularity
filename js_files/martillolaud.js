const common = {
    developer: 'Martillolaud',
    price: '€ 20',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Pulso',
        description: 'Transient shaper.',
        url: 'https://martillolaud.com/pulso/',
        image: 'https://martillolaud.com/pulso/pulso-mini.jpg',
        tags: ['effect', 'transient'],
        created: '2026-10-22',
    },
    {
        name: 'Yunque',
        description: 'Seven-character compressor and true peak limiter.',
        url: 'https://martillolaud.com/yunque/',
        image: 'https://martillolaud.com/yunque/yunque-mini.jpg',
        tags: ['effect', 'limiter', 'compressor'],
        created: '2026-10-22',
    },
    {
        name: 'Temple',
        description: 'Harmonic EQ that follows the note.',
        url: 'https://martillolaud.com/temple/',
        image: 'https://martillolaud.com/temple/temple-mini.jpg',
        tags: ['effect', 'eq'],
        created: '2026-10-22',
    },
    {
        name: 'Cincel',
        description: 'Channel strip.',
        url: 'https://martillolaud.com/cincel/',
        image: 'https://martillolaud.com/cincel/cincel-mini.jpg',
        tags: ['effect', 'channel strip'],
        created: '2026-10-22',
    },
    {
        name: 'Forja',
        description: 'Parametric equalizer.',
        url: 'https://martillolaud.com/forja/',
        image: 'https://martillolaud.com/forja/forja-mini.jpg',
        tags: ['effect', 'eq'],
        created: '2026-10-22',
    },
    {
        name: 'Calibre',
        description: 'VU, PPM and LUFS metering.',
        url: 'https://martillolaud.com/calibre/',
        image: 'https://martillolaud.com/calibre/calibre-mini.jpg',
        tags: ['analyzer', 'mastering'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
