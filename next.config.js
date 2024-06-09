/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Inter Transporte Leipzig",
        siteDescription:
            "Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease.",
        siteKeywords:
            "Umzugservice - Garten und Landschaftsbau - Haushaltmontage - Haushaltsauflösung ",
        siteUrl: "https://inter-transporte-leipzig.vercel.app/",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@your_handle"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
