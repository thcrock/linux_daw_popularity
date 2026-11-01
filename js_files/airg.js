const common = {
    developer: 'Air-G Audio',
    price: 'Donation / No charge',
    formats: ['vst3'],
}

const apps = [
    {
        name: 'Air-G Plugin Bundle',
        description: 'A collection of GUIs for Airwindows plugins.',
        url: 'https://ko-fi.com/s/d723770417',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/20bc6185-982e-44af-bb98-15cee5f26edc_todos.png',
        tags: ['effect'],
        badges: [ 'tested-working' ],
        created: '2026-07-05',
    },
    {
        name: 'Air-G Chorus Pedal',
        description: 'Stereo chorus based on StereoChorus by Airwindows.',
        url: 'https://ko-fi.com/s/317a2295a6',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/2af995c7-61aa-4749-b071-fcf4cbf18b26_ui_rounded.png',
        tags: ['effect', 'chorus', 'guitar'],
        created: '2026-07-29',
    },
    {
        name: 'Air-G Dist Pedal',
        description: 'Distortion based on Density3 by Airwindows.',
        url: 'https://ko-fi.com/s/3ab5d45be5',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/f4893944-5cd5-4c02-8ddd-960dd670a131_ui_rounded.png',
        tags: ['effect', 'distortion', 'guitar'],
        created: '2026-07-29',
    },
    {
        name: 'Air-G Comp Pedal',
        description: 'A compressor based on Dynamics3 by Airwindows.',
        url: 'https://ko-fi.com/s/38b2eab874',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/5d000163-54f8-4585-986e-28830c3039cd_ui_rounded.png',
        tags: ['effect', 'compressor', 'guitar'],
        created: '2026-08-04',
    },
    {
        name: 'Air-G Autopan Pedal',
        description: 'An auto-panner based on AutoPan by Airwindows',
        url: 'https://ko-fi.com/s/cac6786005',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/379bea5f-af34-4dc1-b0a1-db21d77900d7_ui_rounded.png',
        tags: ['effect', 'pan', 'guitar'],
        created: '2026-08-04',
    },
    {
        name: 'Air-G EQ Pedal',
        description: 'An EQ based on PearEQ by Airwindows',
        url: 'https://ko-fi.com/s/d76662e61e',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/b495e138-2c93-4cf5-879a-4a950c3176b9_ui_rounded.png',
        tags: ['effect', 'eq', 'guitar'],
        created: '2026-08-12',
    },
    {
        name: 'Air-G Delay Pedal',
        description: 'An delay based on TapeDelay2 by Airwindows',
        url: 'https://ko-fi.com/s/6a189706b0',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/3c4bd3c5-069d-4de2-8596-9faea7216c07_ui_rounded.png',
        tags: ['effect', 'delay', 'guitar'],
        created: '2026-08-21',
    },
    {
        name: 'Air-G Trem Pedal',
        description: 'A tremelo based on Tremelo by Airwindows',
        url: 'https://ko-fi.com/s/0c83b2ae14',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/767a4c2f-c334-442b-ad6d-14be69fbb391_ui_rounded.png',
        tags: ['effect', 'tremolo', 'guitar'],
        created: '2026-08-23',
    },
    {
        name: 'Air-G Vibra Pedal',
        url: 'https://ko-fi.com/s/340b7f4d22',
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/4cc0b35b-34bb-4806-b8f1-ac7b62b340bc_ui_rounded.png',
        tags: ['effect', 'guitar', 'vibrato'],
        created: '2026-09-08',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
