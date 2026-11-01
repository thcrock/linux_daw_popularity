const developer = {
    name: 'Big Man Labs',
    about: `
        <p>
            Boutique audio creations directly inspired by the source energy.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['clap', 'vst3'],
    badges: ['tested-working'],
}

const apps = [
    {
        name: 'Big Max Zero',
        description: '0.5-2ms latency/lookahead brickwall limiter with several modes.',
        url: 'https://www.bigman-labs.com/products/big-max-zero/',
        image: 'https://www.bigman-labs.com/assets/images/BMZ.png',
        price: 'No charge',
        tags: ['effect', 'limiter'],
        created: '2026-04-15'
    },
    {
        name: 'Big Listen',
        description: 'AB referencing with loudness matching, spectrum and metering',
        url: 'https://www.bigman-labs.com/products/big-listen/',
        image: 'https://www.bigman-labs.com/assets/images/big-listen-poser.png',
        price: '$ 32.00',
        tags: ['analyzer', 'mastering'],
        created: '2026-07-17',
    },
    {
        name: 'Big Pump',
        description: 'Simple saturation and compression.',
        url: 'https://www.bigman-labs.com/products/big-pump/',
        image: 'https://www.bigman-labs.com/assets/bigpumpplayer/Drum%20Bus/bigpump-drumbus.png',
        price: '$ 24.00',
        tags: ['effect', 'saturation', 'distortion', 'compressor'],
        created: '2026-07-17',
    },
    {
        name: 'Big Notes',
        description: 'Note and photo tool for recording session state of analog equipment using a local web server to transfer from a phone.',
        url: 'https://www.bigman-labs.com/products/big-notes/',
        image: 'https://www.bigman-labs.com/assets/images/bignotes.png',
        price: '$ 18.00',
        tags: ['tool'],
        created: '2026-07-17',
    },
    {
        name: 'Big Mon',
        description: 'Loudness monitoring.',
        url: 'https://www.bigman-labs.com/products/big-mon/',
        image: 'https://www.bigman-labs.com/assets/images/BIGMON.png',
        price: 'No charge',
        tags: ['tool'],
        created: '2026-07-17',
    },
    {
        name: 'BIGULATOR',
        url: 'https://www.bigman-labs.com/products/bigulator/',
        image: 'https://www.bigman-labs.com/assets/images/bigulator-single.webp',
        price: '$ 42',
        tags: ['effect', 'clipper', 'mastering'],
        badges: [],
        created: '2026-09-03',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
