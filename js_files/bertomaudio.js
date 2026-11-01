const developer = {
    name: 'Bertom Audio',
    trimImages: 10,
}

const common = {
    developer: developer.name,
    formats: ['vst3'],
    created: '2023-01-22',
}

const apps = [
    {
        name: 'Denoiser Pro',
        url: 'https://bertomaudio.com/denoiser-pro.html',
        image: 'https://img.youtube.com/vi/Nm1h61akOH0/maxresdefault.jpg',
        price: '$ 25',
        tags: ['effect', 'noise'],
    },
    {
        name: 'Denoiser Classic',
        url: 'https://bertomaudio.com/denoiser-classic.html',
        image: 'https://img.youtube.com/vi/6EQ9hPg4bcU/maxresdefault.jpg',
        price: 'Pay what you want',
        tags: ['effect', 'noise'],
    },
    {
        name: 'Phantom Center',
        url: 'https://bertomaudio.com/phantom-center.html',
        image: 'https://img.youtube.com/vi/hY0lTtzWF6E/maxresdefault.jpg',
        price: 'Pay what you want',
        tags: ['effect', 'stereo'],
    },
    {
        name: 'EQ Curve Analyzer',
        url: 'https://bertomaudio.com/eq-curve-analyzer.html',
        image: 'https://img.youtube.com/vi/3Nl_Gi1IYfE/maxresdefault.jpg',
        price: 'Pay what you want',
        tags: ['analyzer', 'spectral'],
    },
    {
        name: 'Air Shelf',
        url: 'https://bertomaudio.com/air-shelf.html',
        image: 'https://img.youtube.com/vi/FJGoZzBd6LU/maxresdefault.jpg',
        price: 'Pay what you want',
        tags: ['effect', 'eq'],
    },
    {
        name: 'Vocal Compressor',
        url: 'https://bertomaudio.com/vocal-compressor.html',
        image: 'https://img.youtube.com/vi/RXmrtuAojHE/maxresdefault.jpg',
        price: 'Pay what you want',
        tags: ['effect', 'compressor'],
        created: '2023-12-02',
    },
]

export default {
    apps: apps.map(app => {
        return { ...common, ...app }
    }),
    developer,
}
