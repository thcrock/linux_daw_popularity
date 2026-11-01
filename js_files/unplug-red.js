const common = {
    developer: 'UnplugRed',
    url: 'https://vst.unplug.red/',
    source: 'https://github.com/unplugred/vsts',
    price: 'Patreon / No charge',
    license: 'GPL-3.0',
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'Plastic Funeral',
        url: 'https://vst.unplug.red/plasticfuneral',
        image: 'https://vst.unplug.red/pf/ui.webp',
        tags: ['effect', 'distortion'],
        description: 'Distortion that sounds like a laser beam.',
        created: '2023-05-22'
    },
    {
        name: 'VU',
        url: 'https://vst.unplug.red/vu',
        image: 'https://vst.unplug.red/vu/ui.webp',
        tags: ['analyzer', 'level'],
        description: 'VU meter for your VU metering needs.',
        created: '2023-05-22'
    },
    {
        name: 'Click Box',
        url: 'https://vst.unplug.red/clickbox',
        image: 'https://vst.unplug.red/cb/ui.webp',
        tags: ['effect'],
        description: 'Randomized click generator.',
        created: '2023-05-22'
    },
    {
        name: 'Pisstortion',
        url: 'https://vst.unplug.red/pisstortion',
        image: 'https://vst.unplug.red/ps/ui.webp',
        tags: ['effect', 'distortion'],
        description: 'Advanced sinefold distortion plugin.',
        created: '2023-05-22'
    },
    {
        name: 'PNCH',
        url: 'https://vst.unplug.red/pnch',
        image: 'https://vst.unplug.red/pnch/ui.webp',
        tags: ['effect', 'compressor'],
        description: 'Weird knob that makes ur stuff tight.',
        created: '2023-05-22'
    },
    {
        name: 'Red Bass',
        url: 'https://vst.unplug.red/redbass',
        image: 'https://vst.unplug.red/rb/ui.webp',
        tags: ['effect', 'enhancer'],
        description: 'Low-end enchancer excellent for kicks and speech.',
        created: '2023-05-22'
    },
    {
        name: 'MPaint',
        url: 'https://vst.unplug.red/mpaint',
        image: 'https://vst.unplug.red/mp/ui.webp',
        tags: ['sample based'],
        description: 'A sampler from a popular video game.',
        created: '2023-05-22'
    },
    {
        name: 'CRMBL',
        url: 'https://vst.unplug.red/crmbl',
        image: 'https://vst.unplug.red/crmbl/ui.webp',
        tags: ['effect', 'delay'],
        description: 'Delay for insane people.',
        created: '2023-05-22'
    },
    {
        name: 'Prisma',
        url: 'https://vst.unplug.red/prisma',
        image: 'https://vst.unplug.red/prsm/ui.webp',
        tags: ['effect', 'distortion'],
        description: 'Modular multiband distortion plugin.',
        created: '2023-05-22'
    },
    {
        name: 'SunBurnt',
        url: 'https://vst.unplug.red/sunburnt',
        image: 'https://vst.unplug.red/sb/ui.webp',
        tags: ['effect', 'reverb'],
        description: 'Multi-curve reverb delay.',
        created: '2024-02-28'
    },
    {
        name: 'Magic Carpet',
        url: 'https://vst.unplug.red/magiccarpet',
        image: 'https://static.kvraudio.com/i/b/ui.1740335979.png',
        tags: ['effect', 'delay'],
        description: 'Three delay lines with shared feedback.',
        created: '2025-03-11'
    },
    {
        name: 'Diet Audio',
        url: 'https://vst.unplug.red/dietaudio',
        image: 'https://static.kvraudio.com/i/b/ui.1727372483.png',
        tags: ['effect', 'gate'],
        description: 'A spectral gate plugin. Very good at separating transients from the rest of the audio.',
        created: '2025-03-12'
    },
    {
        name: 'Scope',
        url: 'https://vst.unplug.red/scope',
        image: 'https://static.kvraudio.com/i/b/ui.1734988754.png',
        tags: ['analyzer', 'oscilloscope'],
        description: 'Oscilloscope design inspired by the electron beam scopes of the past',
        created: '2025-03-12'
    },
    {
        name: 'Modman',
        url: 'https://vst.unplug.red/modman',
        image: 'https://bedroomproducersblog.com/wp-content/uploads/2025/08/Unplugred-ModMan.jpg',
        tags: ['effect'],
        created: '2025-08-16'
    },
    {
        name: 'Sucrose',
        description: 'Harmonic and subharmonic generator.',
        url: 'https://vst.unplug.red/sucrose',
        image: 'https://vst.unplug.red/scrs/ui.webp',
        tags: ['effect', 'distortion'],
        badges: [ 'tested-working' ],
        created: '2026-08-23'
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

