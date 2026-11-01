const common = {
    developer: 'ASAP',
    created: '2026-01-13',
    formats: ['vst3', 'ara'],
}

const apps = [
    {
        name: 'Psycho Filter',
        url: 'https://forum.ircam.fr/shop/en/asap/psycho-filter',
        images: [
            'https://forum.ircam.fr/strapi/uploads/large_Psycho_Filter_White_0dc3557a12.png',
            'https://forum.ircam.fr/strapi/uploads/large_Psycho_Filter_Black_d1b4bdd237.png',
        ],
        price: '€ 32.50',
        description: 'This plug-in allows you to draw shape filters on the sound spectrogram and to control their gain and the fades.',
        tags: ['effect', 'spectral', 'filter'],
    },
    {
        name: 'Pitches Brew',
        url: 'https://forum.ircam.fr/shop/en/asap/pitches-brew',
        images: [
            'https://forum.ircam.fr/strapi/uploads/large_Pitches_Brew_White_b3e147ec85.png',
            'https://forum.ircam.fr/strapi/uploads/large_Pitches_Brew_Black_77ba523fa1.png',
        ],
        price: '€ 32.50',
        description: 'The plugin Pitches Brew allows you to transpose the pitch and the formant of sounds by drawing and modifying their frequency curves.',
        tags: ['effect', 'spectral', 'pitch'],
    },
    {
        name: 'Stretch Life',
        url: 'https://forum.ircam.fr/shop/en/asap/stretch-life',
        images: [
            'https://forum.ircam.fr/strapi/uploads/large_Stretch_Life_White_7e47387122.png',
            'https://forum.ircam.fr/strapi/uploads/large_Stretch_Life_Black_0395a61362.png',
        ],
        price: '€ 32.50',
        description: 'This plugin allows you to stretch and compress sound in creative and original ways.',
        tags: ['effect', 'spectral', 'stretch'],
    },
    {
        name: 'Spectral Crossing',
        url: 'https://forum.ircam.fr/shop/en/asap/spectral-crossing',
        images: [
            {
                url: 'https://forum.ircam.fr/strapi/uploads/Spectral_Crossing_White_99f7a78764.png',
                trim: 35,
            },
            {
                url: 'https://forum.ircam.fr/strapi/uploads/large_spectral_crossing_b_d8e3130cf1.png',
                trim: 50,
            },
        ],
        price: '€ 20.00',
        description: 'The Spectral Crossing plug-in allows you to cross the amplitudes and the frequencies of a source sound and a side-chain sound to generate a hybrid sound.',
        tags: ['effect', 'spectral', 'morph'],
    },
    {
        name: 'Spectral Morphing',
        url: 'https://forum.ircam.fr/shop/en/asap/spectral-morphing',
        images: [
            {
                url: 'https://forum.ircam.fr/strapi/uploads/spectral_morphing_ad558ceb5f.png',
                trim: 35,
            },
            {
                url: 'https://forum.ircam.fr/strapi/uploads/Spectral_Morphing_Black_aeeb21e9fd.png',
                trim: 50,
            },
        ],
        price: '€ 20.00',
        description: 'The plugin Spectral Morphing allows you to apply the spectral characteristics of a side-chain sound to a source sound in order to transform its timbre.',
        tags: ['effect', 'spectral', 'morph'],
    },
    {
        name: 'Formant Shaping',
        url: 'https://forum.ircam.fr/shop/en/asap/formant-shaping',
        images: [
            {
                url: 'https://forum.ircam.fr/strapi/uploads/large_Formant_Shaping_White_cad3c33795.png',
                trim: 35,
            },
            {
                url: 'https://forum.ircam.fr/strapi/uploads/large_Formant_Shaping_Black_fa14a0a3ae.png',
                trim: 50,
            },
        ],
        price: 'No charge',
        description: 'This plug-in allows you to modify the vowels and play with the formant resonances of the sound.',
        tags: ['effect', 'spectral'],
    },
    {
        name: 'Spectral Clipping',
        url: 'https://forum.ircam.fr/shop/en/asap/spectral-clipping',
        images: [
            {
                url: 'https://forum.ircam.fr/strapi/uploads/Spectral_Clipping_White_2d4d1645a1.png',
                trim: 35,
            },
            {
                url: 'https://forum.ircam.fr/strapi/uploads/Spectral_Clipping_Black_272237cfad.png',
                trim: 50,
            },
        ],
        price: 'No charge',
        description: 'The plugin Spectral Clipping allows you to expand and compress the energy of spectral components within a range of thresholds.',
        tags: ['effect', 'spectral', 'clipper'],
    },
    {
        name: 'Spectral Remix',
        url: 'https://forum.ircam.fr/shop/en/asap/spectral-remix',
        images: [
            {
                url: 'https://forum.ircam.fr/strapi/uploads/large_Spectral_Remix_White_000421abcf.png',
                trim: 35,
            },
            {
                url: 'https://forum.ircam.fr/strapi/uploads/large_Spectral_Remix_Black_9716720b34.png',
                trim: 50,
            },
        ],
        price: 'No charge',
        description: 'The plug-in Spectral Remix allows you to control the balance of the harmonic, noise, and attack components of the sound.',
        tags: ['effect', 'spectral'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
