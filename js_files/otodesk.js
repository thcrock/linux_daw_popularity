const common = {
    developer: 'OTODESK',
    formats: ['vst3'],
    price: 'No charge',
}

const apps = [
    {
        name: 'ANATOMY',
        url: 'https://github.com/OTODESK4193/ANATOMY',
        image: 'https://github.com/OTODESK4193/ANATOMY/raw/master/Source/Assets/Screenshot.jpg',
        source: 'https://github.com/OTODESK4193/ANATOMY',
        tags: ['effect', 'transient'],
        created: '2026-08-25',
    },
    {
        name: 'Ambience',
        url: 'https://github.com/OTODESK4193/Ambience1.0.1',
        image: 'https://github.com/OTODESK4193/Ambience1.0.1/raw/master/Source/Assets/Screenshot1.jpg',
        source: 'https://github.com/OTODESK4193/Ambience1.0.1',
        tags: ['effect', 'reverb'],
        created: '2026-08-25',
    },
    {
        name: 'BassSynth',
        url: 'https://github.com/OTODESK4193/BassSynth',
        image: 'https://github.com/OTODESK4193/BassSynth/raw/master/ScreenShots/Screenshot_1.png',
        source: 'https://github.com/OTODESK4193/BassSynth',
        tags: ['synth', 'bass'],
        created: '2026-08-25',
    },
    {
        name: 'HighPrecisionEQ',
        url: 'https://github.com/OTODESK4193/HighPrecisionEQ',
        image: 'https://github.com/OTODESK4193/HighPrecisionEQ/raw/master/Source/Assets/LowCutPolice.jpg',
        source: 'https://github.com/OTODESK4193/HighPrecisionEQ',
        tags: ['effect', 'eq'],
        created: '2026-08-25',
    },
    {
        name: 'Quad Morph Filter',
        url: 'https://github.com/OTODESK4193/QuadMorphFilter',
        image: 'https://github.com/OTODESK4193/QuadMorphFilter/raw/master/Source/Assets/Main_Filter.jpg',
        source: 'https://github.com/OTODESK4193/QuadMorphFilter',
        tags: ['effect', 'filter', 'morph'],
        created: '2026-08-25',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
