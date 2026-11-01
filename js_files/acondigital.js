const common = {
    developer: 'Acon Digital',
}

const apps = [
    {
        name: 'Acoustica 8',
        description: 'Audio editing, restoration and mastering suite, now with a Linux public beta.',
        url: 'https://acondigital.com/products/acoustica',
        image: 'https://cms.acondigital.com/uploads/acoustica_8_default_layout_spectogram_bad3faa2bc.png',
        price: '$ 149 - $ 449',
        tags: ['daw', 'editor'],
        formats: ['standalone'],
        created: '2026-09-10',
        comment: 'Verified linux version from .deb file',
    },
    {
        name: 'Verberate 2',
        description: 'Algorithmic reverb that simulates real acoustic spaces.',
        url: 'https://acondigital.com/products/verberate',
        image: 'https://cms.acondigital.com/uploads/verberate_fe8f03527d.png',
        price: '$ 99',
        tags: ['effect', 'reverb'],
        formats: ['lv2', 'vst3'],
        created: '2026-10-22',
        comment: 'Verified linux version from .deb file',
    },
    {
        name: 'Equalize 2',
        description: 'Equalizer with unique features and an intuitive workflow.',
        url: 'https://acondigital.com/products/equalize',
        image: 'https://cms.acondigital.com/uploads/Equalize_b7e63d516c.png',
        price: '$ 99',
        tags: ['effect', 'eq'],
        formats: ['lv2', 'vst3'],
        created: '2026-10-22',
        comment: 'Verified linux version from .deb file',
    },
    {
        name: 'Verberate Immersive',
        description: 'Multichannel algorithmic reverb for Dolby Atmos and spatial audio up to 9.1.6.',
        url: 'https://acondigital.com/products/verberate-immersive',
        image: 'https://cms.acondigital.com/uploads/verberate_immersive_2_3_surround_reverb_plugin_UI_3_603ec430e7.jpg',
        price: '$ 199',
        tags: ['effect', 'reverb', 'ambisonics'],
        formats: ['lv2', 'vst3'],
        created: '2026-10-22',
        comment: 'Verified linux version from .deb file',
    },
    {
        name: 'DeFilter',
        description: 'Spectral filter that evens out tonal imbalances and resonances.',
        url: 'https://acondigital.com/products/defilter',
        image: 'https://cms.acondigital.com/uploads/De_Filter_Screenshot_945e3dd445.png',
        price: '$ 99',
        tags: ['effect', 'spectral', 'eq', 'mastering'],
        formats: ['lv2', 'vst3'],
        created: '2026-10-22',
        comment: 'Verified linux version from .deb file',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
