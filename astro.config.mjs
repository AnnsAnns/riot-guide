// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
    base: '/RIOT',
    trailingSlash: 'always',
    site: 'https://annsanns.github.io',
	integrations: [
		starlight({
			title: 'Riot Documentation',
			social: {
				github: 'https://github.com/riot-os/riot',
                mastodon: 'https://fosstodon.org/@RIOT_OS',
                matrix: 'https://matrix.to/#/#riot-os:matrix.org',
			},
			sidebar: [
                {
                    label: 'General',
                    items: [
                        { label: 'Introduction', slug: 'index'},
                        { label: "RIOT Vision", slug: "general/vision"},
                    ],
                },
                {
                    label: 'Getting Started',
                    items: [
                        // We need to specify the order of the items here
                        // to make it easier to follow the guide
                        { slug: 'getting-started/quick-start'},
                        { slug: "getting-started/install-wsl" },
                        { slug: "getting-started/installing"},
                        { slug: "getting-started/flashing"},
                        { slug: "getting-started/building_example"}
                    ]
                },
                {
                    label: "Platforms, Build Systems, and Tools",
                    autogenerate: { directory: 'platforms' },
                },
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },  
				},
			],
            customCss: [
                './src/styles/github_alerts.css',
            ],
            logo: {
                src: './src/assets/riot-logo.svg',
                replacesTitle: true,
            },
            plugins: [starlightImageZoom()],
            editLink: { baseUrl: 'https://github.com/AnnsAnns/RIOT/tree/starlight/doc/starlight-docs' },
		}),
	],
});
