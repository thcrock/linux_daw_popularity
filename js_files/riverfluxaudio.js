const common = {
    developer: 'RiverFlux Audio',
    price: 'Donation / No charge',
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'PHIXER',
        description: 'Coherence-guided stereo phase correction that recovers low-end weight.',
        url: 'https://riverfluxaudio.gumroad.com/l/phixer',
        image: 'https://public-files.gumroad.com/c4ehqffcx5z0sn7l81kcfp2vnbdj',
        tags: ['effect', 'stereo', 'phase'],
        created: '2026-10-22',
    },
    {
        name: 'ECHO LAYER',
        description: 'Four independent delay layers with frequency targeting and tonal/transient modes.',
        url: 'https://riverfluxaudio.gumroad.com/l/echolayer',
        image: 'https://public-files.gumroad.com/xmwhlpze8x0vl4ogtl47vfdj06c8',
        tags: ['effect', 'delay'],
        created: '2026-10-22',
    },
    {
        name: 'BIT LAYER',
        description: 'Eight independent crush layers with frequency targeting and tonal/transient modes.',
        url: 'https://riverfluxaudio.gumroad.com/l/BITLAYER',
        image: 'https://public-files.gumroad.com/g9hiz2qpcnlfsxalv9ibyb8mm8od',
        tags: ['effect', 'bitcrusher', 'distortion'],
        created: '2026-10-22',
    },
    {
        name: 'Relic',
        description: 'Suite of twelve classic studio units: five compressors, five equalizers and two tape machines.',
        url: 'https://riverfluxaudio.gumroad.com/l/Relic',
        image: 'https://public-files.gumroad.com/6ryifxb0ngmvibdhscrs0kpayp7o',
        tags: ['effect', 'compressor', 'eq', 'tape', 'saturation'],
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
