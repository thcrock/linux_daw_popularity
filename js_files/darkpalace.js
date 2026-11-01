const developer = {
    name: 'Darkpalace Studio',
    about: `
        <p>
            Providing DRM-Free Audio Plugins with a modern and intuitive UI.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['clap', 'vst3','lv2'],
}

const apps = [
    {
        name: 'Sloth',
        description: 'Slew rate limiter emulating limitations of analog equipment.',
        url: 'https://darkpalace.studio/products/sloth/',
        images: [
            'https://darkpalace.studio/assets/images/sloth/sloth_theme_dark.png',
            'https://darkpalace.studio/assets/images/sloth/sloth_theme_light.png',
            'https://darkpalace.studio/assets/images/sloth/sloth_theme_cyberpunk.png',
        ],
        price: '€ 20',
        tags: ['effect', 'limiter', 'transient'],
        created: '2024-03-01',
    },
    {
        name: 'Chameleon',
        description: 'Stacking all-pass filters.',
        url: 'https://darkpalace.studio/products/chameleon/',
        images: [
            'https://darkpalace.studio/assets/images/chameleon/chameleon_theme_dark.png',
            'https://darkpalace.studio/assets/images/chameleon/chameleon_theme_light.png',
            'https://darkpalace.studio/assets/images/chameleon/chameleon_theme_candycave.png',
        ],
        price: '€ 20',
        tags: ['effect', 'filter', 'all-pass'],
        created: '2024-09-25',
    },
    {
        name: 'Butterfly',
        description: 'Stereo mixing utility with haas and eq based panning.',
        url: 'https://darkpalace.studio/products/butterfly/',
        images: [
            'https://darkpalace.studio/assets/images/butterfly/butterfly_theme_dark.png',
            'https://darkpalace.studio/assets/images/butterfly/butterfly_theme_light.png',
            'https://darkpalace.studio/assets/images/butterfly/butterfly_theme_candycave.png',
        ],
        price: '€ 20',
        tags: ['effect', 'stereo', 'eq', 'compressor'],
        created: '2025-03-07',
    },
    {
        name: 'Tiny-Caterpillar',
        description: 'Stereo enhancer with filter and EQ',
        url: 'https://darkpalace.studio/products/caterpillar/',
        images: [
            'https://darkpalace.studio/assets/images/plugins/caterpillar/themes/dx.webp',
            'https://darkpalace.studio/assets/images/plugins/caterpillar/themes/light.webp',
            'https://darkpalace.studio/assets/images/plugins/caterpillar/themes/candycave.webp',
        ],
        price: 'No charge',
        tags: ['effect', 'stereo', 'eq', 'filter'],
        created: '2025-05-22',
    },
    {
        name: 'Piranha',
        description: 'Multiband waveshaper and clipper.',
        url: 'https://darkpalace.studio/products/piranha',
        images: [
            'https://darkpalace.studio/assets/images/plugins/piranha/themes/dark.webp',
            'https://darkpalace.studio/assets/images/plugins/piranha/themes/light.webp',
        ],
        price: '€ 45',
        tags: ['effect', 'waveshaper', 'clipper', 'multiband','saturation', 'distortion'],
        created: '2026-06-13',
    },
    {
        name: 'Parrot',
        description: 'Delay with distortion, pitch shifting and filtering',
        url: 'https://darkpalace.studio/products/parrot',
        image: 'https://darkpalace.studio/assets/images/plugins/parrot/themes/dark.webp',
        price: 'No charge',
        tags: ['effect', 'delay', 'saturation', 'distortion', 'pitch', 'filter'],
        created: '2026-07-11',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
