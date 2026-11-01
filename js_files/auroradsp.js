const developer = {
    name: 'Aurora DSP',
    about: `
        <p>
            Guitar, Bass and mixing plugins.
        </p>
    `
}

const common = {
    developer: developer.name,
    formats: ['clap', 'vst3', 'lv2', 'standalone'],
    comment: 'All plugins coming to linux so this file will fill up fast',
}

const apps = [
    {
        name: 'Banshee',
        description: 'End-to-end vocal chain. Re-orderable workflow. Nine expandable modules.',
        url: 'https://auroradsp.com/plugins/banshee-ultimate-vocal-suite',
        image: {
            url: 'https://auroradsp.com/images/banshee/01_main.webp',
            crop: {
                left: 66,
                top: 66,
                right: 1866,
                bottom: 1051,
            },
        },
        price: '$ 119',
        tags: ['effect', 'eq', 'gate', 'delay', 'saturation', 'distortion', 'chorus', 'reverb', 'pitch'],
        badges: ['tested-working'],
        created: '2026-07-15',
    },
    {
        name: 'Mammoth',
        description: 'Parallel bass processing plugin, with 4 amp models, bass maximizer and low-end saturator.',
        url: 'https://auroradsp.com/plugins/mammoth-the-monumental-bass-plugin',
        image: {
            url: 'https://auroradsp.com/images/gui/mammoth-gui.png',
            crop: {
                left: 34,
                top: 34,
                right: 1812,
                bottom: 803,
            },
        },
        price: '$ 79',
        tags: ['effect', 'bass', 'amp', 'saturation', 'distortion' ],
        badges: ['tested-working'],
        created: '2026-07-15',
    },
    {
        name: 'Rhino',
        description: 'Guitar processor with 7 advanced sections, including 6 preamp models, 4-file IR mixer, built-in EQ, poweramp sim, and various effects.',
        url: 'https://auroradsp.com/plugins/rhino-guitar-plugin',
        image: {
            url: 'https://auroradsp.com/images/gui/rhino-gui.png',
            crop: {
                left: 107,
                top: 107,
                right: 2277,
                bottom: 1009,
            },
        },
        price: '$ 89',
        tags: ['effect', 'guitar', 'amp', 'saturation', 'distortion', 'eq' , 'ir'],
        badges: ['tested-working'],
        created: '2026-07-15',
    },
    // Not currently working in plugin form. Added for when it is.
    //{
    //    name: 'This Heavy Earth - Fleshrot Suite',
    //    description: 'A full chain of boutique-grade death metal circuits turned into software. Based on Fleshrot 200 amp and This Heavy Earth guitar pedals.',
    //    url: 'https://auroradsp.com/plugins/this-heavy-earth-suite',
    //    image: {
    //        url: 'https://auroradsp.com/images//gui/flesroot_gui_glow.webp',
    //        crop: {
    //            left: 97,
    //            top: 97,
    //            right: 1921,
    //            bottom: 1129,
    //        },
    //    },
    //    price: '$ 139',
    //    tags: ['effect', 'guitar', 'amp', 'saturation', 'distortion', 'eq' , 'ir'],
    //    badges: [ 'tested-notworking' ]
    //    created: '2026-07-15',
    //},
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
