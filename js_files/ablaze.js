const common = {
    developer: 'Ablaze',
    price: 'No charge',
    formats: ['clap', 'lv2', 'standalone', 'vst3'],
}

const apps = [
    {
        name: 'Screamer',
        url: 'https://www.ablazeaudio.com/',
        image: 'https://static.kvraudio.com/i/b/ablaze-screamer.webp',
        price: '$ 80',
        tags: ['effect', 'vocal'],
        formats: ['clap', 'lv2', 'vst3'],
        created: '2026-01-13',
    },
    {
        name: 'Stacker',
        description: 'A doubler to add thickness to your vocals.',
        url: 'https://www.ablazeaudio.com/freebies',
        image: 'https://www.ablazeaudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstacker.986f312a.png&w=1080&q=75',
        tags: ['effect', 'stereo', 'pitch'],
        created: '2026-09-06',
    },
    {
        name: 'Lifter',
        description: 'A high-shelf filter to add air to your vocals.',
        url: 'https://www.ablazeaudio.com/freebies',
        image: 'https://www.ablazeaudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flifter.0b0fba44.png&w=1080&q=75',
        tags: ['effect', 'filter'],
        created: '2026-09-06',
    },
    {
        name: 'Booster',
        description: 'A brickwall limiter with pre-clipping.',
        url: 'https://www.ablazeaudio.com/freebies',
        image: 'https://www.ablazeaudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbooster.89dc4ca9.png&w=1080&q=75',
        tags: ['effect', 'limiter', 'clipper'],
        created: '2026-09-06',
    },
    {
        name: 'Pitcher',
        description: 'A pitch shifter for extreme vocals.',
        url: 'https://www.ablazeaudio.com/freebies',
        image: 'https://www.ablazeaudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpitcher.ae33ea39.png&w=1080&q=75',
        tags: ['effect', 'pitch', 'vocal'],
        created: '2026-09-06',
    },
    {
        name: 'Bass Drop',
        description: 'A bass drop generator.',
        url: 'https://www.ablazeaudio.com/freebies',
        image: 'https://www.ablazeaudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbass_drop.4b983653.png&w=1080&q=75',
        tags: ['synth', 'bass'],
        created: '2026-09-06',
    },
    {
        name: 'Snare Bomb',
        description: 'A snare bomb generator.',
        url: 'https://www.ablazeaudio.com/freebies',
        image: 'https://www.ablazeaudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsnare_bomb.2183555e.png&w=1080&q=75',
        tags: ['synth', 'percussion'],
        created: '2026-09-06',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
