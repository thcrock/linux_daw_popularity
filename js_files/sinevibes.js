const developer = {
    name: 'Sinevibes',
    about: `
        <p>
            Founded in 2006, Sinevibes specializes in designing and building innovative music software.
        </p>
        <p>
            The company strives to create original products that deliver unique new sound technologies while at the same time being extremely intuitive and easy to use.
        </p>
    `
}

const common = {
    developer: developer.name,
    created: '2024-04-16',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Albedo',
        url: 'https://www.sinevibes.com/albedo/',
        image: 'https://www.sinevibes.com/media/albedo/SinevibesAlbedo.png',
        price: '$ 39',
        description: 'Granular cloud reverb',
        tags: ['effect', 'reverb', 'granular'],
    },
    {
        name: 'Blend',
        url: 'https://www.sinevibes.com/blend/',
        image: 'https://www.sinevibes.com/media/blend/SinevibesBlend-v2.png',
        price: '$ 29',
        description: 'Multi-voice chorus comprised of up to 16 separate layers',
        tags: ['effect', 'chorus'],
    },
    {
        name: 'Droplet',
        url: 'https://www.sinevibes.com/droplet/',
        image: 'https://www.sinevibes.com/media/droplet/SinevibesDroplet-v2.png',
        price: '$ 29',
        description: 'Delay modeling engine for creating "raindrop delay" effects',
        tags: ['effect', 'delay'],
    },
    {
        name: 'Hollow',
        url: 'https://www.sinevibes.com/hollow/',
        image: 'https://www.sinevibes.com/media/hollow/screen/Hollow.png',
        price: '$ 39',
        description: 'Vast space reverb',
        tags: ['effect', 'reverb'],
    },
    {
        name: 'Integer',
        url: 'https://www.sinevibes.com/integer/',
        image: 'https://www.sinevibes.com/media/integer/SinevibesInteger.png',
        price: '$ 29',
        description: 'Digital-analog buffer modeling effect',
        tags: ['effect', 'delay'],
    },
    {
        name: 'Luminance',
        url: 'https://www.sinevibes.com/luminance/',
        image: 'https://www.sinevibes.com/media/luminance/SinevibesLuminance-v2.png',
        price: '$ 39',
        description: 'Shimmer reverb',
        tags: ['effect', 'reverb'],
    },
    {
        name: 'Vague',
        url: 'https://www.sinevibes.com/vague/',
        image: 'https://www.sinevibes.com/media/vague/SinevibesVague.png',
        price: '$ 29',
        description: 'Binaural time diffusion processor',
        tags: ['effect'],
    },
    {
        name: 'Whirl',
        url: 'https://www.sinevibes.com/whirl/',
        image: 'https://www.sinevibes.com/media/whirl/SinevibesWhirl-v2.png',
        price: '$ 29',
        description: 'Barber-pole phaser',
        tags: ['effect', 'phaser'],
    },
    {
        name: 'Corrosion',
        url: 'https://www.sinevibes.com/corrosion/',
        image: 'https://www.sinevibes.com/media/corrosion/SinevibesCorrosion-v2.png',
        price: '$ 39',
        description: 'Multi-algorithm distortion',
        tags: ['effect', 'distortion'],
        created: '2024-07-31',
    },
    {
        name: 'Dipole',
        url: 'https://www.sinevibes.com/dipole/',
        image: 'https://www.sinevibes.com/media/dipole/SinevibesDipole-v2.png',
        price: '$ 29',
        description: 'Through-zero flanger',
        tags: ['effect', 'flanger'],
        created: '2024-07-31',
    },
    {
        name: 'Dispersion',
        url: 'https://www.sinevibes.com/dispersion/',
        image: 'https://www.sinevibes.com/media/dispersion/SinevibesDispersion-v2.png',
        price: '$ 29',
        description: 'Bouncing ball delay',
        tags: ['effect', 'delay'],
        created: '2024-07-31',
    },
    {
        name: 'Eternal',
        url: 'https://www.sinevibes.com/eternal/',
        image: 'https://www.sinevibes.com/media/eternal/SinevibesEternal2.png',
        price: '$ 29',
        description: 'Barber-pole flanger',
        tags: ['effect', 'flanger'],
        created: '2024-07-31',
    },
    {
        name: 'Rerun',
        url: 'https://www.sinevibes.com/rerun/',
        image: 'https://www.sinevibes.com/media/rerun/SinevibesRerun-v2.png',
        price: '$ 29',
        description: 'Self-randomizing audio repeater',
        tags: ['effect', 'loop', 'glitch'],
        created: '2024-07-31',
    },
    {
        name: 'Skew',
        url: 'https://www.sinevibes.com/skew/',
        image: 'https://www.sinevibes.com/media/skew/SinevibesSkew-v2.png',
        price: 'No charge',
        description: 'Non-linear reverse delay',
        tags: ['effect'],
        created: '2024-07-31',
    },
    {
        name: 'Switch',
        url: 'https://www.sinevibes.com/switch/',
        image: 'https://www.sinevibes.com/media/switch/SinevibesSwitch-v3.png',
        price: '$ 29',
        description: 'Gate sequencer',
        tags: ['effect', 'gate', 'sequencer'],
        created: '2024-07-31',
    },
    {
        name: 'Stator',
        url: 'https://www.sinevibes.com/stator/',
        image: 'https://www.sinevibes.com/media/stator/SinevibesStator.png',
        price: '$ 29',
        description: 'Tape wobble simulator',
        tags: ['effect', 'tape'],
        created: '2024-07-31',
    },
    {
        name: 'Array',
        url: 'https://www.sinevibes.com/array/',
        image: 'https://www.sinevibes.com/media/array/SinevibesArray-v4.png',
        price: '$ 29',
        description: 'Spectral sequencer',
        tags: ['effect', 'sequencer', 'spectral'],
        created: '2025-02-21',
    },
    {
        name: 'Inertia',
        url: 'https://www.sinevibes.com/inertia/',
        image: 'https://www.sinevibes.com/media/inertia/SinevibesInertia-v3.png',
        price: '$ 29',
        description: 'Envelope sequencer',
        tags: ['effect', 'envelope'],
        created: '2025-08-12',
    },
    {
        name: 'Cache',
        url: 'https://www.sinevibes.com/cache/',
        image: 'https://www.sinevibes.com/media/cache/SinevibesCache.png',
        price: '$ 49',
        description: 'MIDI-controlled effect plugin for real-time audio manipulation.',
        tags: ['effect', 'glitch'],
        created: '2025-11-25',
    },
    //{
    //    name: 'Duality',
    //    url: 'https://www.sinevibes.com/duality/',
    //    image: 'https://www.sinevibes.com/media/duality/SinevibesDuality.png',
    //    price: '$ 29',
    //    description: 'Hybrid vibrato.',
    //    tags: ['effect', 'chorus'],
    //    created: '2026-04-12',
    //},
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
