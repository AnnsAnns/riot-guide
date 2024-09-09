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
			title: 'Riot Guides',
			social: {
				github: 'https://github.com/riot-os/riot',
			},
			sidebar: [
                {
                    label: 'General',
                    items: [
                        { label: 'Introduction', slug: 'index'},
                        { label: 'Structure', slug: 'general/structure'},
                        { label: 'Quick Start', slug: 'general/quick-start'},
                    ],
                },
                {
                    label: 'Getting Started',
                    items: [
                        // We need to specify the order of the items here
                        // to make it easier to follow the guide
                        { slug: "getting-started/install-wsl" },
                        { slug: "getting-started/installing"},
                        { slug: "getting-started/flashing"},
                    ]
                },
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },  
				},
			],
            customCss: [
                './src/styles/github_alerts.css',
            ],
            plugins: [starlightImageZoom()],
            editLink: { baseUrl: 'https://github.com/AnnsAnns/RIOT/tree/starlight/doc/starlight-docs' },
		}),
	],
});
