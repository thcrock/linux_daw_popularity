const common = {
    developer: 'Bram',
    formats: ['clap'],
    price: 'Pay what you want / No charge',
    comment: 'Linux only, clap only, bad UIs and released at a rate that indicates lots of AI use',
}

const apps = [
    {
        name: 'Linux Tape Stop Plugin',
        url: 'https://btertoolen.gumroad.com/l/tape_stop',
        image: {
            url: 'https://static.kvraudio.com/i/b/tape_stop.png',
            resize: {
                width: 800,
            },
        },
        tags: ['effect', 'tape'],
        created: '2026-05-19',
    },
    {
        name: 'Spring reverb',
        url: 'https://btertoolen.gumroad.com/l/spring_reverb',
        image: 'https://static.kvraudio.com/i/b/spring_test.png',
        tags: ['effect', 'reverb'],
        created: '2026-06-04',
    },
    {
        name: 'Wow and Flutter',
        url: 'https://btertoolen.gumroad.com/l/wow_and_flutter_linux',
        image: 'https://public-files.gumroad.com/f31bqhhtdzppv9h5vzuaok39kgdy',
        tags: ['effect', 'tape'],
        created: '2026-06-04',
    },
    {
        name: 'Iron transformer',
        url: 'https://btertoolen.gumroad.com/l/iron_transformer',
        image: {
            url: 'https://static.kvraudio.com/i/b/iron_square.png',
            crop: {
                left: 0,
                top: 198,
                right: 800,
                bottom: 601,
            },
        },
        tags: ['effect', 'saturation'],
        created: '2026-06-11',
    },
    {
        name: 'Vocal Separator Linux',
        description: 'AI vocal non-realtime separater',
        url: 'https://btertoolen.gumroad.com/l/vocal_separator_linux',
        image: {
            url: 'https://public-files.gumroad.com/0ke56kls4t15o72exedk8jbo9tx4',
            crop: {
                left: 232,
                top: 104,
                right: 1030,
                bottom: 601,
            },
        },
        tags: ['effect', 'vocal'],
        created: '2026-06-28',
        comment: 'Appears to be OS AI wrapped in a GUI.',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

