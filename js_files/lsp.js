const developer = {
    name: 'Linux Studio Plugins',
    about: `
        <p>
            Linux Studio Plugins (LSP)) is a collection of open-source plugins currently compatible with CLAP, LADSPA, LV2 and LinuxVST formats.
        </p>
        <p>
            The basic idea is to fill the lack of good and useful plugins under the GNU/Linux platform.
        </p>
        <p>
            The project is developed and maintained by LSP Project Team with the main founder and developer at the head - Vladimir Sadovnikov.
        </p>
    `,
    crawl: {
        engine: 'fetch',
        url: 'https://github.com/sadko4u/lsp-plugins',
        tasks: [{
            target: 'version',
            el: '.Layout-sidebar',
            find: '.BorderGrid-row a.Link--primary div div span.css-truncate',
            match: '^Release\\s(.*)$',
        }],
    },
}

const common = {
    developer: developer.name,
    source: 'https://github.com/sadko4u/lsp-plugins',
    price: 'No charge',
    formats: ['clap', 'vst2', 'vst3', 'lv2'],
    license: 'LGPL-3.0',
    search: 'lsp',
    created: '2023-01-29',
}

const apps = [
    {
        name: 'Filter',
        url: 'https://lsp-plug.in/?page=manuals&section=filter_stereo',
        image: 'https://lsp-plug.in/img/plugins/filter_stereo.png',
        tags: ['effect', 'filter'],
        created: '2023-08-20',
    },
    {
        name: 'Graphic Equalizer x16',
        url: 'https://lsp-plug.in/?page=manuals&section=graph_equalizer_x16_stereo',
        image: 'https://lsp-plug.in/img/plugins/graph_equalizer_x16_stereo.png',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Graphic Equalizer x32',
        url: 'https://lsp-plug.in/?page=manuals&section=graph_equalizer_x32_stereo',
        image: 'https://lsp-plug.in/img/plugins/graph_equalizer_x32_stereo.png',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Parametric Equalizer x16',
        url: 'https://lsp-plug.in/?page=manuals&section=para_equalizer_x16_stereo',
        image: 'https://lsp-plug.in/img/plugins/para_equalizer_x16_stereo.png',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Parametric Equalizer x32',
        url: 'https://lsp-plug.in/?page=manuals&section=para_equalizer_x32_stereo',
        image: 'https://lsp-plug.in/img/plugins/para_equalizer_x32_stereo.png',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Compressor',
        url: 'https://lsp-plug.in/?page=manuals&section=compressor_stereo',
        image: 'https://lsp-plug.in/img/plugins/compressor_stereo.png',
        tags: ['effect', 'compressor'],
    },
    {
        name: 'Sidechain Compressor',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_compressor_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_compressor_stereo.png',
        tags: ['effect', 'compressor', 'sidechain'],
    },
    {
        name: 'Dynamic Processor',
        url: 'https://lsp-plug.in/?page=manuals&section=dyna_processor_stereo',
        image: 'https://lsp-plug.in/img/plugins/dyna_processor_stereo.png',
        tags: ['effect', 'dynamics'],
    },
    {
        name: 'Sidechain Dynamic Processor ',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_dyna_processor_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_dyna_processor_stereo.png',
        tags: ['effect', 'dynamics', 'sidechain'],
    },
    {
        name: 'Dynamic Expander',
        url: 'https://lsp-plug.in/?page=manuals&section=expander_stereo',
        image: 'https://lsp-plug.in/img/plugins/expander_stereo.png',
        tags: ['effect', 'expander'],
    },
    {
        name: 'Sidechain Expander Processor ',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_expander_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_expander_stereo.png',
        tags: ['effect', 'expander', 'sidechain'],
    },
    {
        name: 'Dynamic Gate',
        url: 'https://lsp-plug.in/?page=manuals&section=gate_stereo',
        image: 'https://lsp-plug.in/img/plugins/gate_stereo.png',
        tags: ['effect', 'gate'],
    },
    {
        name: 'Sidechain Gate Processor ',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_gate_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_gate_stereo.png',
        tags: ['effect', 'gate', 'sidechain'],
    },
    {
        name: 'Dynamic Limiter',
        url: 'https://lsp-plug.in/?page=manuals&section=limiter_stereo',
        image: 'https://lsp-plug.in/img/plugins/limiter_stereo.png',
        tags: ['effect', 'limiter'],
    },
    {
        name: 'Sidechain Limiter Processor ',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_limiter_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_limiter_stereo.png',
        tags: ['effect', 'limiter', 'sidechain'],
    },
    {
        name: 'GOTT Compressor',
        url: 'https://lsp-plug.in/?page=manuals&section=gott_compressor_stereo',
        image: 'https://lsp-plug.in/img/plugins/gott_compressor_stereo.png',
        tags: ['effect', 'compressor', 'multiband'],
        created: '2023-08-20',
    },
    {
        name: 'Sidechain GOTT Compressor',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_gott_compressor_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_gott_compressor_stereo.png',
        tags: ['effect', 'compressor', 'multiband', 'sidechain'],
        created: '2023-08-20',
    },
    {
        name: 'Multiband Compressor',
        url: 'https://lsp-plug.in/?page=manuals&section=mb_compressor_stereo',
        image: 'https://lsp-plug.in/img/plugins/mb_compressor_stereo.png',
        tags: ['effect', 'compressor', 'multiband'],
    },
    {
        name: 'Sidechain Multiband Compressor',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_mb_compressor_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_mb_compressor_stereo.png',
        tags: ['effect', 'compressor', 'multiband', 'sidechain'],
    },
    {
        name: 'Multiband Dynamic Processor',
        url: 'https://lsp-plug.in/?page=manuals&section=mb_dyna_processor_stereo',
        image: 'https://lsp-plug.in/img/plugins/mb_dyna_processor_stereo.png',
        tags: ['effect', 'dynamics', 'multiband'],
    },
    {
        name: 'Sidechain Multiband Dynamic Processor',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_mb_dyna_processor_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_mb_dyna_processor_stereo.png',
        tags: ['effect', 'dynamics', 'multiband', 'sidechain'],
    },
    {
        name: 'Multiband Expander',
        url: 'https://lsp-plug.in/?page=manuals&section=mb_expander_stereo',
        image: 'https://lsp-plug.in/img/plugins/mb_expander_stereo.png',
        tags: ['effect', 'expander', 'multiband'],
    },
    {
        name: 'Sidechain Multiband Expander',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_mb_expander_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_mb_expander_stereo.png',
        tags: ['effect', 'expander', 'multiband', 'sidechain'],
    },
    {
        name: 'Multiband Gate',
        url: 'https://lsp-plug.in/?page=manuals&section=mb_gate_stereo',
        image: 'https://lsp-plug.in/img/plugins/mb_gate_stereo.png',
        tags: ['effect', 'gate', 'multiband'],
    },
    {
        name: 'Sidechain Multiband Gate',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_mb_gate_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_mb_gate_stereo.png',
        tags: ['effect', 'gate', 'multiband', 'sidechain'],
    },
    {
        name: 'Multiband Limiter',
        url: 'https://lsp-plug.in/?page=manuals&section=mb_limiter_stereo',
        image: 'https://lsp-plug.in/img/plugins/mb_limiter_stereo.png',
        tags: ['effect', 'limiter', 'multiband'],
        created: '2023-08-20',
    },
    {
        name: 'Sidechain Multiband Limiter',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_mb_limiter_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_mb_limiter_stereo.png',
        tags: ['effect', 'limiter', 'multiband', 'sidechain'],
        created: '2023-08-20',
    },
    {
        name: 'Impulse Responses',
        url: 'https://lsp-plug.in/?page=manuals&section=impulse_responses_stereo',
        image: 'https://lsp-plug.in/img/plugins/impulse_responses_stereo.png',
        tags: ['effect', 'ir'],
    },
    {
        name: 'Impulse Reverb',
        url: 'https://lsp-plug.in/?page=manuals&section=impulse_reverb_stereo',
        image: 'https://lsp-plug.in/img/plugins/impulse_reverb_stereo.png',
        tags: ['effect', 'ir', 'reverb'],
    },
    {
        name: 'Room Builder',
        url: 'https://lsp-plug.in/?page=manuals&section=room_builder_stereo',
        image: 'https://lsp-plug.in/img/plugins/room_builder_stereo.png',
        tags: ['effect', 'ir', 'reverb'],
    },
    {
        name: 'Artistic Delay',
        url: 'https://lsp-plug.in/?page=manuals&section=art_delay_stereo',
        image: 'https://lsp-plug.in/img/plugins/art_delay_stereo.png',
        tags: ['effect', 'delay'],
    },
    {
        name: 'Delay Compensator',
        url: 'https://lsp-plug.in/?page=manuals&section=comp_delay_x2_stereo',
        image: 'https://lsp-plug.in/img/plugins/comp_delay_x2_stereo.png',
        tags: ['effect', 'delay'],
    },
    {
        name: 'Slapback Delay',
        url: 'https://lsp-plug.in/?page=manuals&section=slap_delay_stereo',
        image: 'https://lsp-plug.in/img/plugins/slap_delay_stereo.png',
        tags: ['effect', 'delay'],
    },
    {
        name: 'Oscilloscope x1',
        url: 'https://lsp-plug.in/?page=manuals&section=oscilloscope_x1',
        image: 'https://lsp-plug.in/img/plugins/oscilloscope_x1.png',
        tags: ['analyzer', 'oscilloscope'],
    },
    {
        name: 'Oscilloscope x2',
        url: 'https://lsp-plug.in/?page=manuals&section=oscilloscope_x2',
        image: 'https://lsp-plug.in/img/plugins/oscilloscope_x2.png',
        tags: ['analyzer', 'oscilloscope'],
    },
    {
        name: 'Oscilloscope x4',
        url: 'https://lsp-plug.in/?page=manuals&section=oscilloscope_x4',
        image: 'https://lsp-plug.in/img/plugins/oscilloscope_x4.png',
        tags: ['analyzer', 'oscilloscope'],
    },
    {
        name: 'Phase Detector',
        url: 'https://lsp-plug.in/?page=manuals&section=phase_detector',
        image: 'https://lsp-plug.in/img/plugins/phase_detector.png',
        tags: ['analyzer'],
    },
    {
        name: 'Spectrum Analyzer',
        url: 'https://lsp-plug.in/?page=manuals&section=spectrum_analyzer_x16',
        image: 'https://lsp-plug.in/img/plugins/spectrum_analyzer_x16.png',
        tags: ['analyzer'],
    },
    {
        name: 'Crossover x8',
        url: 'https://lsp-plug.in/?page=manuals&section=crossover_stereo',
        image: 'https://lsp-plug.in/img/plugins/crossover_stereo.png',
        tags: ['effect', 'splitter'],
    },
    {
        name: 'Multi-Sampler',
        url: 'https://lsp-plug.in/?page=manuals&section=multisampler_x48',
        image: 'https://lsp-plug.in/img/plugins/multisampler_x48.png',
        tags: ['sampler'],
    },
    {
        name: 'Sampler',
        url: 'https://lsp-plug.in/?page=manuals&section=sampler_stereo',
        image: 'https://lsp-plug.in/img/plugins/sampler_stereo.png',
        tags: ['sampler'],
    },
    {
        name: 'Noise Generator',
        url: 'https://lsp-plug.in/?page=manuals&section=noise_generator_x4',
        image: 'https://lsp-plug.in/img/plugins/noise_generator_x4.png',
        tags: ['synth', 'noise'],
    },
    {
        name: 'Oscillator',
        url: 'https://lsp-plug.in/?page=manuals&section=oscillator_mono',
        image: 'https://lsp-plug.in/img/plugins/oscillator_mono.png',
        tags: ['synth'],
    },
    {
        name: 'Latency Meter',
        url: 'https://lsp-plug.in/?page=manuals&section=latency_meter',
        image: 'https://lsp-plug.in/img/plugins/latency_meter.png',
        tags: ['analyzer'],
    },
    {
        name: 'Loudness Compensator',
        url: 'https://lsp-plug.in/?page=manuals&section=loud_comp_stereo',
        image: 'https://lsp-plug.in/img/plugins/loud_comp_stereo.png',
        tags: ['effect', 'amp'],
    },
    {
        name: 'Profiler',
        url: 'https://lsp-plug.in/?page=manuals&section=profiler_stereo',
        image: 'https://lsp-plug.in/img/plugins/profiler_stereo.png',
        tags: ['analyzer'],
    },
    {
        name: 'Surge Filter ',
        url: 'https://lsp-plug.in/?page=manuals&section=surge_filter_stereo',
        image: 'https://lsp-plug.in/img/plugins/surge_filter_stereo.png',
        tags: ['effect', 'filter'],
    },
    {
        name: 'Trigger MIDI',
        url: 'https://lsp-plug.in/?page=manuals&section=trigger_midi_stereo',
        image: 'https://lsp-plug.in/img/plugins/trigger_midi_stereo.png',
        tags: ['effect'],
    },
    {
        name: 'Trigger',
        url: 'https://lsp-plug.in/?page=manuals&section=trigger_stereo',
        image: 'https://lsp-plug.in/img/plugins/trigger_stereo.png',
        tags: ['effect'],
    },
    {
        name: 'Matcher',
        description: 'Spectrally match a reference.',
        url: 'https://lsp-plug.in/?page=manuals&section=matcher_stereo',
        image: 'https://lsp-plug.in/img/plugins/matcher_stereo.png',
        tags: ['effect', 'spectral', 'filter'],
        created: '2026-07-02',
    },
    {
        name: 'Autogain',
        description: 'Automatic gain control tools that support loudness matching',
        url: 'https://lsp-plug.in/?page=manuals&section=autogain_stereo',
        image: 'https://lsp-plug.in/img/plugins/autogain_stereo.png',
        tags: ['effect', 'dynamics'],
        created: '2026-07-02',
    },
    {
        name: 'Sidechain Autogain',
        description: 'Automatic gain control tools that support loudness matching with sidechain input',
        url: 'https://lsp-plug.in/?page=manuals&section=sc_autogain_stereo',
        image: 'https://lsp-plug.in/img/plugins/sc_autogain_stereo.png',
        tags: ['effect', 'dynamics', 'sidechain'],
        created: '2026-07-02',
    },
    {
        name: 'Ring Modulated Sidechain',
        description: 'Ring-modulated sidechaining of the audio signal',
        url: 'https://lsp-plug.in/?page=manuals&section=ringmod_sc_stereo',
        image: 'https://lsp-plug.in/img/plugins/ringmod_sc_stereo.png',
        tags: ['effect'],
        created: '2026-07-02',
    },
    {
        name: 'Clipper',
        url: 'https://lsp-plug.in/?page=manuals&section=clipper_stereo',
        image: 'https://lsp-plug.in/img/plugins/clipper_stereo.png',
        tags: ['effect', 'clipper'],
        created: '2026-07-02',
    },
    {
        name: 'Chorus',
        url: 'https://lsp-plug.in/?page=manuals&section=chorus_stereo',
        image: 'https://lsp-plug.in/img/plugins/chorus_stereo.png',
        tags: ['effect', 'chorus'],
        created: '2026-07-02',
    },
    {
        name: 'Phaser',
        url: 'https://lsp-plug.in/?page=manuals&section=phaser_stereo',
        image: 'https://lsp-plug.in/img/plugins/phaser_stereo.png',
        tags: ['effect', 'phaser'],
        created: '2026-07-02',
    },
    {
        name: 'Referencer',
        description: 'Compare reference files to a mix',
        url: 'https://lsp-plug.in/?page=manuals&section=referencer_stereo',
        image: 'https://lsp-plug.in/img/plugins/referencer_stereo.png',
        tags: ['analyzer', 'spectral', 'oscilloscope'],
        created: '2026-07-02',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
