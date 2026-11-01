const common = {
    developer: 'Bitsonic',
    url: 'https://vstplug-ins.com/',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Keyzone Classic 4',
        description: 'Small footprint sample based instrument with piano, electric piano and organ.',
        url: 'https://vstplug-ins.com/keyzone-classic-4.php',
        image: 'https://vstplug-ins.com/Images/Products/keyzone-800.webp',
        price: '$ 69',
        tags: ['synth', 'sample based', 'piano', 'organ'],
        created: '2026-07-31'
    },
    {
        name: 'Easy Peasy',
        description: 'Mastering plugin with spectral balancing, automatic EQ, saturation, bass control and limiting.',
        url: 'https://vstplug-ins.com/easy-peasy.php',
        image: {
            url: 'https://vstplug-ins.com/Images/Products/easy-peasy-800.webp',
            crop: {
                left: 45,
                top: 94,
                right: 755,
                bottom: 355,
            },
        },
        price: '$ 69',
        tags: ['effect', 'saturation', 'eq', 'limiter', 'stereo', 'loudness'],
        created: '2026-07-31'
    },
    {
        name: 'Melody Harmonizer',
        description: 'Automatic harmonizations for melodies.',
        url: 'https://vstplug-ins.com/melody-harmonizer.php',
        image: 'https://vstplug-ins.com/Images/Products/melody-harmonizer-800.webp',
        price: 'No charge',
        tags: ['effect', 'midi', 'chord'],
        created: '2026-07-31'
    },
    {
        name: 'AI Bass Ultimate',
        url: 'https://vstplug-ins.com/ai-bass-ultimate.php',
        image: 'https://vstplug-ins.com/Images/Products/ai%20bass%20ultimate-800.webp',
        price: 'Free with another purchase',
        tags: ['synth', 'bass'],
        created: '2026-07-31'
    },
    {
        name: 'Pop Violin',
        url: 'https://vstplug-ins.com/pop-violin.php',
        image: 'https://vstplug-ins.com/Images/Products/pop%20violin-800.webp',
        price: 'Free with another purchase',
        tags: ['synth'],
        created: '2026-07-31'
    },
    {
        name: 'Ballistic Pulse',
        description: 'Sampled guns from traditional to sci-fi.',
        url: 'https://vstplug-ins.com/ballistic-pulse.php',
        image: 'https://vstplug-ins.com/Images/Products/ballistic%20pulse-800.webp',
        price: 'Free with another purchase',
        tags: ['synth', 'sample based'],
        created: '2026-07-31'
    },
    {
        name: 'Profondo',
        description: 'One knob subharmonic enhancer.',
        url: 'https://vstplug-ins.com/profondo.php',
        image: {
            url: 'https://vstplug-ins.com/Images/Products/profondo-800.webp',
            crop: {
                left: 29,
                top: 29,
                right: 773,
                bottom: 701,
            },
        },
        price: '$ 29',
        tags: ['effect', 'bass'],
        created: '2026-07-31'
    },
    {
        name: 'Custom Reverb',
        description: 'Algorithmic reverb with modulatable tail and gate sequencer.',
        url: 'https://vstplug-ins.com/custom-reverb.php',
        image: 'https://vstplug-ins.com/Images/Products/custom%20reverb-800.webp',
        price: '$ 49',
        tags: ['effect', 'reverb'],
        created: '2026-07-31'
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

