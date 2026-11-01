const common = {
    developer: 'IEM',
    price: 'No charge',
    source: 'https://git.iem.at/audioplugins/IEMPluginSuite',
    formats: ['standalone', 'vst2', 'vst3', 'lv2'],
    license: 'GPL-3.0',
    created: '2026-01-17',
}

const apps = [
    {
        name: 'DualDelay',
        url: 'https://plugins.iem.at/#tab-DualDelay',
        image: 'https://plugins.iem.at/images/featured/DualDelay.png',
        tags: ['effect', 'delay'],
        description: 'Ambisonics delay supporting rotation and warping',
    },
    {
        name: 'GranularEncoder',
        url: 'https://plugins.iem.at/#tab-GranularEncoder',
        image: 'https://plugins.iem.at/images/featured/GranularEncoder.png',
        tags: ['synth', 'granular'],
        description: 'Ambisonic granular synthesis plug-in.',
    },
    {
        name: 'MultiBandCompressor',
        url: 'https://plugins.iem.at/#tab-MultiBandCompressor',
        image: 'https://plugins.iem.at/images/featured/MultiBandCompressor.png',
        tags: ['effect', 'compressor', 'multiband'],
        description: 'Ambisonic Multiband Compressor preserving the spatial image ',
    },
    {
        name: 'StereoEncoder',
        url: 'https://plugins.iem.at/#tab-StereoEncoder',
        image: {
            url: 'https://plugins.iem.at/images/featured/StereoEncoder.png',
            trim: 200,
        },
        tags: ['effect', 'stereo'],
        description: 'Encode mono or stereo audio signals into the Ambisonic domain',
    },
    {
        name: 'RoomEncoder',
        url: 'https://plugins.iem.at/#tab-RoomEncoder',
        image: {
            url: 'https://plugins.iem.at/images/featured/RoomEncoder.png',
            trim: 200,
        },
        tags: ['effect', 'reverb'],
        description: 'Put a source and a listener into a virtual room and render over 200 wall reflections',
    },
    {
        name: 'AllRADecoder',
        url: 'https://plugins.iem.at/#tab-AllRADecoder',
        image: {
            url: 'https://plugins.iem.at/images/featured/AllRADecoder.png',
            trim: 200,
        },
        tags: ['effect'],
        description: 'Ambisonic decoder for any desired loudspeaker layout using the AllRAD approach.',
    },
    {
        name: 'EnergyVisualizer',
        url: 'https://plugins.iem.at/#tab-EnergyVisualizer',
        image: {
            url: 'https://plugins.iem.at/images/featured/EnergyVisualizer.png',
            trim: 200,
            // crop: {
            //     left: 35,
            //     top: 69,
            //     right: 601,
            //     bottom: 401,
            // },
        },
        tags: ['analyzer'],
        description: 'Visualizes the energy distribution on the sphere of the Ambisonic input signal',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
