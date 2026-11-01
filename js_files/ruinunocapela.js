const common = {
    developer: 'Rui Nuno Capela',
    price: 'No charge',
    license: 'GPL-2.0',
    created: '2026-09-15',
}

const apps = [
    {
        name: 'synthv1',
        description: 'Old-school 4-oscillator subtractive polyphonic synthesizer with stereo fx.',
        url: 'https://synthv1.sourceforge.io',
        image: 'https://synthv1.sourceforge.io/image/synthv1-screenshot12.png',
        source: 'https://github.com/rncbc/synthv1',
        tags: ['synth', 'subtractive'],
        formats: ['lv2', 'standalone'],
    },
    {
        name: 'samplv1',
        description: 'Old-school polyphonic sampler synthesizer with stereo fx.',
        url: 'https://samplv1.sourceforge.io',
        image: 'https://samplv1.sourceforge.io/image/samplv1-screenshot13.png',
        source: 'https://github.com/rncbc/samplv1',
        tags: ['sampler'],
        formats: ['lv2', 'standalone'],
    },
    {
        name: 'drumkv1',
        description: 'Old-school drum-kit sampler with stereo fx.',
        url: 'https://drumkv1.sourceforge.io',
        image: 'https://drumkv1.sourceforge.io/image/drumkv1-screenshot13.png',
        source: 'https://github.com/rncbc/drumkv1',
        tags: ['sampler', 'percussion'],
        formats: ['lv2', 'standalone'],
    },
    {
        name: 'padthv1',
        description: 'Old-school polyphonic additive synthesizer with stereo fx, based on the PADsynth algorithm.',
        url: 'https://padthv1.sourceforge.io',
        image: 'https://padthv1.sourceforge.io/image/padthv1-screenshot12.png',
        source: 'https://github.com/rncbc/padthv1',
        tags: ['synth', 'additive'],
        formats: ['lv2', 'standalone'],
    },
    {
        name: 'Qtractor',
        url: 'https://qtractor.org',
        image: 'https://qtractor.org/image/qtractor-screenshot16.png',
        source: 'https://codeberg.org/rncbc/qtractor.git',
        tags: ['daw'],
        created: '2023-01-10',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
