const developer = {
    name: 'NoirSonance',
    about: `
        <p>
            NoirSonance is founded on the principles of making audio plugins that are both simple to use and incredibly powerful.
        </p>
    `
}

const common = {
    developer: developer.name,
    created: '2025-08-23',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'D-Comp Pro',
        url: 'https://noirsonance.com/product/d-comp-pro/',
        image: {
            url: 'https://noirsonance.com/wp-content/uploads/2024/12/d-comp-pro-1536x1075.jpg',
            crop: {
                left: 494,
                top: 136,
                right: 1042,
                bottom: 938,
            },
        },
        price: '€ 29.99',
        tags: ['effect', 'compressor', 'dynamics'],
    },
    {
        name: 'D-Comp Classic',
        url: 'https://noirsonance.com/product/d-comp-classic/',
        image: {
            url: 'https://noirsonance.com/wp-content/uploads/2024/12/d-comp-classic-2048x1434.jpg',
            crop: {
                left: 648,
                top: 163,
                right: 1400,
                bottom: 1271,
            },
        },
        price: '€ 19.99',
        tags: ['effect', 'compressor', 'dynamics'],
    },
    {
        name: 'D-Comp Lite',
        url: 'https://noirsonance.com/product/d-comp-lite/',
        image: {
            url: 'https://noirsonance.com/wp-content/uploads/2024/12/d-comp-lite-1536x1075.jpg',
            crop: {
                left: 469,
                top: 246,
                right: 1068,
                bottom: 829,
            },
        },
        price: 'No charge',
        tags: ['effect', 'compressor', 'dynamics'],
    },
    {
        name: 'S-Comp Pro',
        url: 'https://noirsonance.com/product/s-comp-pro/',
        image: {
            url: 'https://noirsonance.com/wp-content/uploads/2024/12/s-comp-pro-1536x1075.jpg',
            crop: {
                left: 323,
                top: 197,
                right: 1213,
                bottom: 879,
            },
        },
        price: '€ 29.99',
        tags: ['effect', 'compressor', 'dynamics'],
    },
    {
        name: 'S-Comp Classic',
        url: 'https://noirsonance.com/product/s-comp-classic/',
        image: {
            url: 'https://noirsonance.com/wp-content/uploads/2024/12/s-comp-classic-2048x1434.jpg',
            crop: {
                left: 431,
                top: 261,
                right: 1617,
                bottom: 1173,
            },
        },
        price: '€ 19.99',
        tags: ['effect', 'compressor', 'dynamics'],
    },
    {
        name: 'S-Comp Lite',
        url: 'https://noirsonance.com/product/s-comp-lite/',
        image: {
            url: 'https://noirsonance.com/wp-content/uploads/2024/12/s-comp-lite-1536x1075.jpg',
            crop: {
                left: 435,
                top: 179,
                right: 1101,
                bottom: 897,
            },
        },
        price: 'No charge',
        tags: ['effect', 'compressor', 'dynamics'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
