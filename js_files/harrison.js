const developer = {
    name: 'Harrison Audio',
    trimImages: 20,
    crawl: {
        engine: 'fetch',
        tasks: [{
            target: 'price',
            currency: '$',
            el: '.current-price span[itemprop=price]',
            match: '\\$(\\d{1,4}\\.?\\d{1,2})',
        }],
    },
}

const common = {
    developer: developer.name,
    formats: ['vst3', 'vst2'],
    created: '2022-12-30',
}

const apps = [
    // AVA - https://store.harrisonaudio.com/ava
    {
        name: 'Vocal Intensity Processor',
        url: 'https://store.harrisonaudio.com/all-products/vocal-intensity-processor',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image6_1_3.a5b34281c5479696b3564162e589b8fb.png',
        price: '$89.99',
        tags: ['effect', 'vocal'],
    },
    {
        name: 'Micro Glide',
        url: 'https://store.harrisonaudio.com/all-products/micro-glide',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/Micro-Glide-GUI-with-Shadow.b69dff7d0e5d3822a3a56de6a9a24a2d.jpg',
        price: '$89.99',
        tags: ['effect', 'vocal'],
    },
    {
        name: 'DeEsser',
        url: 'https://store.harrisonaudio.com/all-products/deesser',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image1.40c06e31af4a8efa6e13ee500bcf5270.png',
        price: '$89.99',
        tags: ['effect', 'vocal'],
    },
    {
        name: 'Multiband Compressor',
        url: 'https://store.harrisonaudio.com/all-products/multiband-compressor',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/Harrison-Multi-Band-Compressor-GUI-with-Shadow.1bf644b89b234b9bc41703fb0b69dd1e.jpg',
        price: '$89.99',
        tags: ['effect', 'compressor'],
    },
    // Studio - https://store.harrisonaudio.com/studio
    {
        name: 'FasTrack',
        url: 'https://store.harrisonaudio.com/all-products/fastrack',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/FasTrack-GUI-with-Shadow.854dba40ccb364c237393256c3d78673.jpg',
        price: '$ 199',
        tags: ['effect', 'channel strip', 'vocal'],
    },
    {
        name: 'Bass Flow',
        url: 'https://store.harrisonaudio.com/all-products/bass-flow',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/Bass-Flow-GUI-with-Shadow.7eeaed404f1a4c38f5dee388d6635e55.jpg',
        price: '€ 199.99',
        tags: ['effect', 'channel strip', 'bass'],
    },
    {
        name: 'Mastering EQ',
        url: 'https://store.harrisonaudio.com/all-products/mastering-eq',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image4_2_1.f980af088c1ab38ffcac2343efde29c6.png',
        price: '$ 89.99',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Legacy EQ',
        url: 'https://store.harrisonaudio.com/all-products/legacy-eq',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image6_1_1.d1669509293225028c7f8f10df7b4704.png',
        price: '$ 89.99',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Drum Flow',
        url: 'https://store.harrisonaudio.com/studio/drum-flow-',
        image: 'https://www.solidstatelogic.com/assets/uploads/images/Plugins/Drum%20Flow/Drum-Flow-GUI-Webpage.jpg',
        price: '$ 199.99',
        tags: ['effect', 'channel strip', 'percussion'],
    },
    {
        name: 'Vocal Flow',
        url: 'https://store.harrisonaudio.com/all-products/vocal-flow',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image6_1_2.f9dce9ca81c11dad582dee526d61cc58.png',
        price: '$ 199.99',
        tags: ['effect', 'channel strip', 'vocal'],
    },
    {
        name: 'Harrison 32 Bus',
        url: 'https://store.harrisonaudio.com/all-products/harrison-32-bus',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/32-Bus-GUI-with-Shadow.2c91a57720bd81fcee2aaf8ed48f32cf.jpg',
        price: '$ 149.99',
        tags: ['effect', 'channel strip'],
    },
    // Post - https://store.harrisonaudio.com/post
    {
        name: 'MPC Channel Strip',
        url: 'https://store.harrisonaudio.com/all-products/mpc-channel-strip',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image2_3.90ad1ae43f33e4f0dbe3cda8b129c797.png',
        price: '$ 999.99',
        tags: ['effect', 'channel strip'],
    },
    {
        name: 'MPC Compressor',
        url: 'https://store.harrisonaudio.com/all-products/mpc-compressor',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/image1_7.763cfcab39de8d8f45031d6e809cac60.png',
        price: '$ 299.99',
        tags: ['effect', 'compressor'],
    },
    {
        name: 'MPC Spectral Compressor',
        url: 'https://store.harrisonaudio.com/all-products/mpc-spectral-compressor',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/MPC-Spectral-Compressor-GUI-with-Shadow.28076f50eca5c387ad069cf147fcc36b.jpg',
        price: '$ 89.99',
        tags: ['effect', 'compressor'],
    },
    // DAW
    {
        name: 'Mixbus32C',
        url: 'https://store.harrisonaudio.com/all-products/mixbus32c',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/Mixbus32C_v9_GUI.bf322023d658233ae7f89b608b02dc2f.png',
        price: '$ 349.99',
        formats: [],
        tags: ['daw'],
    },
    {
        name: 'Mixbus',
        url: 'https://store.harrisonaudio.com/all-products/mixbus',
        image: 'https://www.solidstatelogic.com/assets/components/phpthumbof/cache/Mixbus_v9_GUI.c84122fb41768fe2cfb32601ce277479.png',
        price: '$ 129.99',
        formats: [],
        tags: ['daw'],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
