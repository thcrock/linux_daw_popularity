const developer = {
    name: 'The Him DSP',
    about: `
        <p>
            Years of music production experience and success, transformed into tools you'll love to create with.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['clap', 'vst3'],
    badges: ['tested-working'],
    comment: '3 plugins in 2 years so far. Expecting expansion so started a file.',
}

const apps = [
    {
        name: 'Kick Ninja',
        description: 'Kick synthesizer with oscillator, three sampler layers and effects. Samples can be dragged in for resynthesis.',
        url: 'https://dsp.thehim.com/kick-ninja',
        image: 'https://dsp.thehim.com/site/videos/kn-pitch.jpg',
        price: '$ 59.00',
        tags: ['synth', 'percussion'],
        created: '2026-07-09',
    },
    {
        name: 'Sub Ninja',
        description: 'Oscilloscope with filtering to focus on sub frequencies.',
        url: 'https://dsp.thehim.com/sub-ninja',
        image: 'https://dsp.thehim.com/site/videos/sn-zoom.jpg',
        price: '$ 29.00',
        tags: ['analyzer', 'oscilloscope'],
        created: '2026-07-09',
    },
    {
        name: 'Ninja AB',
        description: 'Referencing tool with complete waterfall of each reference showing peak, RMS and PSR, allowing section by section comparison.',
        url: 'https://dsp.thehim.com/ninja-ab',
        image: 'https://dsp.thehim.com/site/videos/nab-sections.jpg',
        price: '$ 79.00',
        tags: ['analyzer', 'mastering'],
        created: '2026-07-09',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
