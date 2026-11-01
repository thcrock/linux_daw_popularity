const common = {
    developer: 'Uryan Audio',
    formats: ['vst3'],
    badges: [ 'tested-working' ],
    created: '2026-07-03',
}

const apps = [
    {
        name: 'Aether Drift',
        description: 'Cinematic pad synthesizer',
        url: 'https://www.uryanmodular.com/aether-drift',
        image: 'https://static.wixstatic.com/media/ca4c47_83cfbd15b6de46a7bb2a5f0b68da5bfd~mv2.png/v1/fill/w_1086,h_816,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aether%20Drift%20v_1_0_5%20main%20promo%20image.png',
        tags: ['synth'],
        price: 'No charge',
    },
    {
        name: 'Elysa Morph',
        description: 'Evolving synth',
        url: 'https://www.uryanmodular.com/elysa-morph',
        image: 'https://static.wixstatic.com/media/ca4c47_5d3c2ad0bbd6424996c2d661821ac086~mv2.png/v1/fill/w_1080,h_808,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Elysa%20Morph%20102%20update%20main%20promo%20image.png',
        tags: ['synth'],
        price: 'No charge',
    },
    {
        name: 'Nythera Corda',
        description: 'Ensemble strings synth.',
        url: 'https://www.uryanmodular.com/nythera-corda',
        image: 'https://static.wixstatic.com/media/ca4c47_2689be87a93e4c87bf86ae0b7488f660~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nythera%20Corda%20101%20update%20Main%20tab%20promo%20image.png',
        tags: ['synth'],
        price: 'No charge',
    },
    {
        name: 'Vaelyra Stryn',
        description: 'Resonant string and pluck synth.',
        url: 'https://www.uryanmodular.com/vaelyra-stryn',
        image: 'https://static.wixstatic.com/media/ca4c47_ae0114cfbf304be180ed4b8c02aa0a7b~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vaelyra%20Stryn%20101%20update%20main%20promo%20image.png',
        tags: ['synth'],
        price: 'No charge',
    },
    {
        name: 'Waelar',
        description: 'Analog inspired synth.',
        url: 'https://www.uryanmodular.com/waelar-v2',
        image: 'https://static.wixstatic.com/media/ca4c47_604e529e4f7443fc95b856c37157c37e~mv2.png/v1/fill/w_1200,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Waelar%20v2_3_1%20promo%20img.png',
        tags: ['synth'],
        price: 'No charge',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

