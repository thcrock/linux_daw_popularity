const common = {
    developer: 'MANNIX²',
    formats: ['vst3'],
    price: 'No charge',
    created: '2026-05-21',
}

const apps = [
    {
        name: 'AB Reference',
        description: 'Reference checks for a single track.',
        url: 'https://mannixsquared.com/plugins/ab-reference/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-ab-reference.png',
            crop: {
                left: 245,
                top: 14,
                right: 716,
                bottom: 526,
            },
        },
        tags: ['tool'],
    },
    {
        name: 'Tight Low End',
        description: 'Mono low end, harmonics, and compression.',
        url: 'https://mannixsquared.com/plugins/tight-low-end/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-tight-low-end.png',
            crop: {
                left: 119,
                top: 56,
                right: 839,
                bottom: 485,
            },
        },
        tags: ['effect', 'compressor', 'saturation', 'mono'],
    },
    {
        name: 'Mix Space',
        description: 'Dynamic EQ or spectral ducking from a sidechain.',
        url: 'https://mannixsquared.com/plugins/mix-space/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-mix-space.png',
            crop: {
                left: 115,
                top: 45,
                right: 845,
                bottom: 495,
            },
        },
        tags: ['effect', 'ducker', 'spectral', 'sidechain'],
    },
    {
        name: 'Super Saturator',
        description: 'Saturation above a cutoff.',
        url: 'https://mannixsquared.com/plugins/super-saturator/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-super-saturator.png',
            crop: {
                left: 281,
                top: 84,
                right: 679,
                bottom: 456,
            },
        },
        tags: ['effect', 'saturation'],
    },
    {
        name: 'Quick Chain',
        description: 'Side chain attenuator.',
        url: 'https://mannixsquared.com/plugins/quick-chain/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-quick-chain.png',
            crop: {
                left: 224,
                top: 14,
                right: 736,
                bottom: 526,
            },
        },
        tags: ['effect', 'compressor', 'multiband', 'sidechain'],
    },
    {
        name: 'Smear Campaign',
        description: 'All pass chain to smear transients.',
        url: 'https://mannixsquared.com/plugins/smear-campaign/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-smear-campaign.png',
            crop: {
                left: 180,
                top: 170,
                right: 779,
                bottom: 369,
            },
        },
        tags: ['effect', 'filter', 'transient'],
    },
    {
        name: 'Detail Preserving Clipper',
        description: 'Clipper with high pass on effect.',
        url: 'https://mannixsquared.com/plugins/detail-preserving-clipper/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-detail-clipper.png',
            crop: {
                left: 281,
                top: 84,
                right: 679,
                bottom: 456,
            },
        },
        tags: ['effect', 'clipper', 'filter', 'transient'],
    },
    {
        name: 'Mannix Phat',
        description: 'Distortion and LFO controlled filters.',
        url: 'https://mannixsquared.com/plugins/mannix-phat/',
        image: {
            url: 'https://mannixsquared.com/assets/plugin-mannix-phat.png',
            crop: {
                left: 14,
                top: 19,
                right: 946,
                bottom: 521,
            },
        },
        tags: ['effect', 'clipper', 'filter', 'transient'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}


