const common = {
    developer: 'Nathaniel Wing Production',
    url: 'https://nathanielwing.com/',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'N-Stereo',
        description: 'Short delay for stereo imaging and effects.',
        url: 'https://nathanielwing.com/n-stereo',
        image: 'https://optim.tildacdn.com/tild6365-6562-4239-b665-393465356261/-/format/webp/__2026-07-25_50854PM.png.webp',
        price: '$ 29',
        tags: ['effect', 'stereo', 'delay'],
        badges: [ 'tested-working' ],
        created: '2026-08-08',
    },
    {
        name: '4D Delay',
        description: 'Delay with saturation and filtering.',
        url: 'https://nathanielwing.com/4d-delay',
        image: 'https://optim.tildacdn.com/tild3666-3863-4036-b362-336166626361/-/format/webp/__2026-07-25_50750PM.png.webp',
        price: '$ 119',
        tags: ['effect', 'delay', 'saturation'],
        created: '2026-08-08',
    },
    {
        name: 'De-Esser',
        description: 'De-esser and harshness controller.',
        url: 'https://nathanielwing.com/de-esser',
        image: 'https://optim.tildacdn.com/tild3738-3535-4365-a435-366361626437/-/format/webp/noroot.png.webp',
        price: '$ 99',
        tags: ['effect', 'deesser'],
        created: '2026-08-08',
    },
    {
        name: 'Tone Equalizer',
        description: '20 band EQ with dynamic controls.',
        url: 'https://nathanielwing.com/de-esser',
        image: 'https://optim.tildacdn.com/tild3439-6433-4432-a639-366331343866/-/format/webp/__2026-07-06_75013PM.png.webp',
        price: '$ 149',
        tags: ['effect', 'eq'],
        created: '2026-08-08',
    },
    {
        name: 'Stereo Stabilizer',
        description: 'Stereo image processor.',
        url: 'https://nathanielwing.com/stereo-stabilizer',
        image: 'https://optim.tildacdn.com/tild6434-3930-4137-a636-636565376434/-/format/webp/__2026-07-08_122558P.png.webp',
        price: '$ 119',
        tags: ['effect', 'stereo'],
        created: '2026-08-08',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}

