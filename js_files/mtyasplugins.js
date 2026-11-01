const common = {
    developer: 'mtyas.plugins',
    price: 'No charge',
    formats: ['clap', 'vst3', 'standalone'],
}

const apps = [
    {
        name: 'TopModel',
        description: 'Physical modelling synthesizer with hammers, bows and a sympathetic soundboard.',
        url: 'https://mtyas.com/plugins/#topmodel',
        image: 'https://raw.githubusercontent.com/mtyas/TopModel/HEAD/docs/images/topmodel_full.png',
        source: 'https://github.com/mtyas/TopModel',
        tags: ['synth', 'physical modeling'],
        license: 'GPL-3.0',
        created: '2026-10-22',
    },
    {
        name: 'CrossMod',
        description: 'Polyphonic cross-modulation synth with through-zero FM and a CRT vectorscope.',
        url: 'https://mtyas.com/plugins/#crossmod',
        image: 'https://raw.githubusercontent.com/mtyas/CrossMod/HEAD/docs/images/crossmod_full.png',
        source: 'https://github.com/mtyas/CrossMod',
        tags: ['synth', 'fm', 'modular'],
        license: 'Own licence',
        created: '2026-10-22',
    },
    {
        name: 'MidiFlux',
        description: 'Modular generative MIDI rack with chords, arpeggios, Euclidean rhythms and probability gates.',
        url: 'https://mtyas.com/plugins/#midiflux',
        image: 'https://raw.githubusercontent.com/mtyas/MidiFlux/HEAD/docs/images/midiflux_full.png',
        source: 'https://github.com/mtyas/MidiFlux',
        tags: ['tool', 'midi', 'sequencer'],
        license: 'Own licence',
        created: '2026-10-22',
    },
    {
        name: 'OmniSplit',
        description: 'Multi-domain splitter with six split modes, an eight-slot FX rack and visual cable patching.',
        url: 'https://mtyas.com/plugins/#omnisplit',
        image: 'https://raw.githubusercontent.com/mtyas/OmniSplit/HEAD/docs/images/omnisplit_full.png',
        source: 'https://github.com/mtyas/OmniSplit',
        tags: ['effect', 'splitter', 'editor', 'spectral'],
        license: 'Own licence',
        created: '2026-10-22',
    },
    {
        name: 'NeoOrgan',
        description: 'Multi-engine organ with Hammond, Vox, Farfisa, additive and barrel organ models.',
        url: 'https://mtyas.com/plugins/#neoorgan',
        image: 'https://raw.githubusercontent.com/mtyas/NeoOrgan/HEAD/docs/screenshots/neoorgan_hammond_contour.png',
        source: 'https://github.com/mtyas/NeoOrgan',
        tags: ['synth', 'organ'],
        license: 'GPL-3.0',
        created: '2026-10-22',
    },
    {
        name: 'FORGE64',
        description: '64-pad drum sampler with physical models and live Lua DSP scripting.',
        url: 'https://mtyas.com/plugins/#forge64',
        image: 'https://raw.githubusercontent.com/mtyas/FORGE64/HEAD/docs/images/forge64_grid.png',
        source: 'https://github.com/mtyas/FORGE64',
        tags: ['sampler', 'percussion', 'sequencer'],
        license: 'GPL-3.0',
        created: '2026-10-22',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
