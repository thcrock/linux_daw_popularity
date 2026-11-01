const developer = {
    name: 'Toneboosters',
    about: `
        <p>
            DAW plug-ins to boost your tones.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['vst2', 'vst3'],
    created: '2025-08-11',
}

const apps = [
    {
        name: 'Barricade 4',
        description: "True-peak mastering limiter",
        url: 'https://toneboosters.com/tb_barricade_v4.html',
        image: 'https://toneboosters.com/images/tb_barricade_v4_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'limiter'],
    },
    {
        name: 'BitJuggler',
        description: "The ultimate digititus creator",
        url: 'https://toneboosters.com/tb_bitjuggler_v1.html',
        image: 'https://toneboosters.com/images/tb_bitjuggler_v1_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'bitcrusher'],
    },
    {
        name: 'Compressor 4',
        description: "Mastering-grade dynamics processor",
        url: 'https://toneboosters.com/tb_compressor_v4.html',
        image: 'https://toneboosters.com/images/tb_compressor_v4_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'compressor'],
    },
    {
        name: 'Dual VCF',
        description: "Creme de la creme non-linear filters",
        url: 'https://toneboosters.com/tb_dualvcf_v1.html',
        image: 'https://toneboosters.com/images/tb_dualvcf_v1_screenshot1_1200x900.jpg',
        price: '€ 19',
        tags: ['effect', 'filter'],
    },
    {
        name: 'Enhancer',
        description: "Seasoning for your tracks",
        url: 'https://toneboosters.com/tb_enhancer_v1.html',
        image: 'https://toneboosters.com/images/tb_enhancer_v1_screenshot1_1200x900.jpg',
        price: '€ 19',
        tags: ['effect', 'enhancer'],
    },
    {
        name: 'Equalizer 4',
        description: "Analog-modelled dynamic equalizer",
        url: 'https://toneboosters.com/tb_equalizer_v4.html',
        image: 'https://toneboosters.com/images/tb_equalizer_v4_screenshot1_1200x900.jpg',
        price: '€ 35',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Equalizer Pro',
        description: "Shaping tomorrow's sound",
        url: 'https://toneboosters.com/tb_equalizer_pro.html',
        image: 'https://toneboosters.com/images/tb_equalizer_pro_screenshot1_1200x900.jpg',
        price: '€ 39',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Flowtones',
        description: "Virtual analog synthesizer",
        url: 'https://toneboosters.com/tb_flowtones_v1.html',
        image: 'https://toneboosters.com/images/tb_flowtones_v1_screenshot1_1474x900.jpg',
        price: '€ 29',
        tags: ['synth'],
    },
    {
        name: 'Lowtone',
        description: "Innovative bass synthesizer",
        url: 'https://toneboosters.com/tb_lowtone_v1.html',
        image: 'https://toneboosters.com/images/tb_lowtone_v1_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['synth'],
    },
    {
        name: 'GonioMeter',
        description: "Stereo image analysis and visualization",
        url: 'https://toneboosters.com/tb_goniometer_v1.html',
        image: 'https://toneboosters.com/images/tb_goniometer_v1_screenshot1_1200x900.jpg',
        price: 'No charge',
        tags: ['analyzer', 'vectorscope'],
    },
    {
        name: 'MBC',
        description: "Multi-Band Compression and saturation",
        url: 'https://toneboosters.com/tb_mbc_v1.html',
        image: 'https://toneboosters.com/images/tb_mbc_v1_screenshot1_1200x900.jpg',
        price: '€ 39',
        tags: ['effect', 'compressor', 'saturation'],
    },
    {
        name: 'Morphit',
        description: "Headphones correction and personalization",
        url: 'https://toneboosters.com/tb_morphit_v1.html',
        image: 'https://toneboosters.com/images/tb_morphit_v1_screenshot1_1200x900.jpg',
        price: '€ 39',
        tags: ['tool'],
    },
    {
        name: 'ReelBus 4',
        description: "Magnetic tape recording, echo and flanger simulator",
        url: 'https://toneboosters.com/tb_reelbus_v4.html',
        image: 'https://toneboosters.com/images/tb_reelbus_v4_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'tape', 'flanger'],
    },
    {
        name: 'Reverb 4',
        description: "Lush reverberation and shimmer",
        url: 'https://toneboosters.com/tb_reverb_v4.html',
        image: 'https://toneboosters.com/images/tb_reverb_v4_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'reverb'],
    },
    {
        name: 'Sibalance 4',
        description: "Spectral de-esser and harshness remover",
        url: 'https://toneboosters.com/tb_sibalance_v4.html',
        image: 'https://toneboosters.com/images/tb_sibalance_v4_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'spectral', 'deesser'],
    },
    {
        name: 'Spectrogram',
        description: "Insightful time and frequency visualization",
        url: 'https://toneboosters.com/tb_spectrogram_v1.html',
        image: 'https://toneboosters.com/images/tb_spectrogram_v1_screenshot1_1200x900.jpg',
        price: 'No charge',
        tags: ['analyzer', 'spectral'],
    },
    {
        name: 'VoicePitcher 4',
        description: "Vocal doubling, pitch shifting and freezing effect",
        url: 'https://toneboosters.com/tb_voicepitcher_v4.html',
        image: 'https://toneboosters.com/images/tb_voicepitcher_v4_screenshot1_1200x900.jpg',
        price: '€ 29',
        tags: ['effect', 'pitch'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
