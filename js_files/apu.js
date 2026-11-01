const common = {
    developer: 'APU Software',
    formats: ['vst3', 'standalone'],
    badges: [ 'tested-working' ],
    created: '2026-06-18',
}

const apps = [
    {
        name: 'APU Loudness Meter',
        description: 'Loudness analysis plug-in supporting LUFS, RMS, Peak, and True Peak',
        url: 'https://apu.software/meter/',
        image: 'https://apu.software/media/loudnessTypes/meter-loudnessType-9.png',
        tags: ['analyzer'],
        price: 'No charge',
    },
    {
        name: 'APU Loudness Leveler',
        description: 'volume rider which keeps audio within a target loudness range',
        url: 'https://apu.software/leveler/',
        image: 'https://apu.software/media/timingModes/leveler-timingMode-present.png',
        tags: ['effect', 'compressor', 'expander', 'broadcast'],
        price: '$ 40',
    },
    {
        name: 'APU Loudness Compressor',
        description: 'Compress or expand with LUFS, giving natural and musical response',
        url: 'https://apu.software/compressor/',
        image: 'https://apu.software/media/compressor/detector-eq.png',
        tags: ['effect', 'compressor', 'expander'],
        price: '$ 40',
    },
    {
        name: 'APU Dynamics Optimizer',
        description: 'Up-front analysis of an audio file, building a loudness distribution which can then be reshaped to a target distribution',
        url: 'https://apu.software/optimizer/',
        image: 'https://apu.software/media/optimizer/optimize.png',
        tags: ['effect', 'compressor', 'expander'],
        formats: ['standalone'],
        price: '$ 40',
        comment: 'Ara 2 version in development.',
    },
    {
        name: 'APU Loudness Limiter',
        description: 'True-peak-safe limiting with LUFS control.',
        url: 'https://apu.software/limiter/',
        image: 'https://apu.software/media/loudnessTypes/limiter-loudnessType-5.png',
        tags: ['effect', 'limiter'],
        price: '$ 40',
    },
    {
        name: 'APU Spectrum Analyzer',
        description: 'Spectrum analyzer with variable size FFT and response.',
        url: 'https://apu.software/spectrum/',
        image: 'https://apu.software/media/demo-spectrum.png',
        tags: ['analyzer', 'spectral'],
        price: 'No charge',
    },
    {
        name: 'APU Loudness Contour',
        description: 'Equal-loudness filter to control perceptual loudness.',
        url: 'https://apu.software/contour/',
        image: 'https://apu.software/media/contourTypes/contour-contourType-4.png',
        tags: ['effect', 'filter', 'broadcast'],
        price: '$ 40',
    },
    {
        name: 'APU TrueGain',
        description: 'Frequency-compensated gain control.',
        url: 'https://apu.software/truegain/',
        images: [
            'https://apu.software/media/contourTypes/truegain-contourType-2.png',
            'https://apu.software/media/truegain/mini-mode-compensated-gain-control.png',
        ],
        tags: ['effect'],
        price: '$ 40',
        comment: 'Useful for monitoring',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

