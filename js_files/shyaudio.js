const common = {
    developer: 'Shy Audio',
    formats: ['vst3'],
    url: 'https://www.shy-audio.com/',
    created: '2026-08-14',
}

const apps = [
    {
        name: '90s Smack',
        description: 'De-esser, VCA style compressor and limiter',
        url: 'https://www.shy-audio.com/plugins/90ssmack',
        image: 'https://www.shy-audio.com/images/smack_mock.png',
        price: '€ 29',
        tags: ['effect', 'compressor', 'expander', 'deesser', 'limiter'],
        badges: [ 'tested-working' ],
    },
    {
        name: '90s Channel',
        description: 'EQ and saturation.',
        comment: 'Styled as a channel strip but just and EQ and saturation.',
        url: 'https://www.shy-audio.com/plugins/90schannel',
        image: 'https://www.shy-audio.com/images/90schn_mock.png',
        price: '€ 29',
        tags: ['effect', 'eq', 'saturation'],
        badges: [ 'tested-working' ],
    },
    {
        name: '90s Dynamix',
        description: 'Compressor or limiter and gate',
        url: 'https://www.shy-audio.com/plugins/90sdynamix',
        image: 'https://www.shy-audio.com/images/90sdyn_mock.png',
        price: '€ 29',
        tags: ['effect', 'compressor', 'gate', 'limiter'],
        badges: [ 'tested-working' ],
    },
    {
        name: 'EQT-1M',
        description: 'Stereo or mid/side EQ aimed at mastering.',
        url: 'https://www.shy-audio.com/plugins/eqt1m',
        image: 'https://www.shy-audio.com/images/eqt1m_mock.png',
        price: '€ 29',
        tags: ['effect', 'eq'],
        badges: [ 'tested-working' ],
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
}
