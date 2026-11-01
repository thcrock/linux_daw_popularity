const developer = {
    name: 'Warmth',
    about: `
        <p>
            Warmth is a small, independent audio plugin studio. We develop audio effects and instruments.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['clap', 'vst3'],
}

const apps = [
    {
        name: 'Pale Horse',
        description: 'Model of the famous Klon Centaur overdrive',
        url: 'https://warmth.dev/products/pale-horse',
        image: {
            url: 'https://warmth.dev/images/products/pale-horse-promo.jpeg',
            crop: {
                left: 1753,
                top: 131,
                right: 2434,
                bottom: 1219,
            },
        },
        price: '$ 19.00',
        tags: ['effect', 'distortion', 'overdrive'],
        created: '2026-07-04',
    },
    {
        name: 'Warmth Keys',
        description: 'Physically simulated electric piano with Rhodes and Wurlitzer voicings and effects.',
        url: 'https://warmth.dev/products/keys',
        image: 'https://warmth.dev/images/products/keys.png',
        price: '$ 19.00',
        tags: ['synth', 'piano', 'physical modeling'],
        created: '2026-07-04',
    },
    {
        name: 'Tape Wobble',
        description: 'Tape-style pitch wobble with adjustable rate and depth',
        url: 'https://warmth.dev/products/tape-wobble',
        image: 'https://warmth.dev/images/products/tape-wobble.png',
        price: '$ 9.00',
        tags: ['effect', 'tape'],
        created: '2026-07-04',
    },
    {
        name: 'Reel Deal',
        description: 'Simulation of reel-to-reel tape.',
        url: 'https://warmth.dev/products/tape-wobble',
        image: 'https://warmth.dev/images/products/tape-wobble.png',
        price: '$ 19.00',
        tags: ['effect', 'tape', 'saturation'],
        created: '2026-07-04',
    },
    {
        name: 'Prism',
        description: 'Clean chorus or warm analog with drift and tape saturation',
        url: 'https://warmth.dev/products/prism',
        image: 'https://warmth.dev/images/products/prism.png',
        price: '$ 29.00',
        tags: ['effect', 'tape', 'saturation'],
        created: '2026-07-04',
    },
    {
        name: 'Rewind',
        description: 'Stereo tape delay with reverse.',
        url: 'https://warmth.dev/products/rewind',
        image: 'https://warmth.dev/images/products/rewind.png',
        price: '$ 29.00',
        tags: ['effect', 'delay', 'tape', 'saturation'],
        created: '2026-07-04',
    },
    {
        name: 'Stripes',
        description: 'Inspired by MXR Phase 90, it uses cascaded all-pass filters to create moving notches that give your sound motion and dimension.',
        url: 'https://warmth.dev/products/stripes',
        image: 'https://warmth.dev/images/products/stripes.png',
        price: 'No charge',
        tags: ['effect', 'phaser', 'vintage'],
        created: '2026-07-04',
    },
    {
        name: 'Bit Crusher',
        description: 'Reduces bit depth and sample rate to create that crunchy, lo-fi digital sound.',
        url: 'https://warmth.dev/products/bit-crusher',
        image: 'https://warmth.dev/images/products/bit-crusher.png',
        price: 'No charge',
        tags: ['effect', 'bitcrusher'],
        created: '2026-07-04',
    },
    {
        name: 'Evergreen',
        description: 'Tube style overdrive.',
        url: 'https://warmth.dev/products/evergreen',
        image: 'https://warmth.dev/images/products/evergreen.png',
        price: 'No charge',
        tags: ['effect', 'overdrive', 'tube'],
        created: '2026-07-04',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
