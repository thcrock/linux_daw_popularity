const developer = {
    name: 'Korneff Audio',
    about: `
        <p>
            Killer plug-ins. Killer features. Killer tweak-ability. The other side of sound.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['lv2', 'vst3'],
    badges: ['tested-working'],
}

const apps = [
    {
        name: 'Chocolate Milk',
        description: 'A multiband tape-style saturatar.',
        url: 'https://korneffaudio.com/product/chocolate-milk/',
        image: 'https://korneffaudio.com/wp-content/uploads/2025/10/chocolate-swap-front.jpg',
        price: '$ 49.99',
        tags: ['effect', 'saturation', 'multiband'],
        created: '2025-10-28',
    },
    {
        name: 'SITRAL Klangfilter W295',
        description: 'Three analog modelled EQs.',
        url: 'https://korneffaudio.com/product/sitral-klangfilter-w295/',
        image: 'https://korneffaudio.com/wp-content/uploads/2024/11/front-panel-2-768x668.jpg',
        price: '$ 129.99',
        tags: ['effect', 'eq', 'vintage'],
        created: '2026-01-10',
    },
    {
        name: 'Power Grid Disruptor',
        description: 'Glitch and distortion engine.',
        url: 'https://korneffaudio.com/product/power-grid-disruptor/',
        image: 'https://korneffaudio.com/wp-content/uploads/2026/03/pgd-front-2-768x576.jpg',
        price: '$ 347.99',
        tags: ['effect', 'distortion', 'glitch'],
        created: '2026-04-01',
    },
    {
        name: 'KA1776 Limiting Amplifier',
        description: 'Analog modelled vintage FET style limiting amplifier',
        url: 'https://korneffaudio.com/product/ka1776-limiting-amplifier/',
        image: 'https://korneffaudio.com/wp-content/uploads/2026/06/kla-front-full.jpg',
        price: '$ 39.99',
        tags: ['effect', 'limiter', 'vintage', 'compressor', 'expander', 'saturation'],
        created: '2026-07-04',
    },
    {
        name: 'Sound Techniques Alpha Range Channel',
        url: 'https://korneffaudio.com/product/sound-techniques-alpha-range-channel/',
        image: 'https://korneffaudio.com/wp-content/uploads/2026/06/sca-full-plugin-1.jpg',
        price: '$ 64.99',
        tags: ['effect', 'channel strip', 'preamp', 'eq', 'compressor'],
        created: '2026-09-08',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
