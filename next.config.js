

/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        outputPath: 'static/media/',
                        name: '[name].[hash].[ext]',
                        esModule: false,
                    },
                },
            ],
        });

        return config
    }

}
