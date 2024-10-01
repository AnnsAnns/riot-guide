// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://riot.annsann.eu",
  integrations: [
    starlight({
      title: "Riot Documentation",
      social: {
        github: "https://github.com/riot-os/riot",
        mastodon: "https://fosstodon.org/@RIOT_OS",
        matrix: "https://matrix.to/#/#riot-os:matrix.org",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "RIOT in a Nutshell",
              items: [
                { label: "Introduction", slug: "index" },
                { label: "RIOT Vision", slug: "general/vision" },
                { slug: "general/community_process" },
              ],
            },
            {
              label: "Getting Started",
              items: [
                // We need to specify the order of the items here
                // to make it easier to follow the guide
                { slug: "getting-started/quick-start" },
                { slug: "getting-started/install-wsl" },
                { slug: "getting-started/installing" },
                { slug: "getting-started/flashing" },
                { slug: "getting-started/building_example" },
              ],
            },
            {
              label: "Tutorials",
              autogenerate: { directory: "tutorials" },
            },
            {
              label: "Guides",
              autogenerate: { directory: "guides" },
            },
            {
              label: "Platforms, Build Systems, and Tools",
              autogenerate: { directory: "platforms" },
            },
          ],
        // },
        // {
        //   label: "API Reference",
        //   items: [
        //     {
        //       label: "RIOT Core",
        //       items: [
        //         {
        //           label: "Kernel",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__core.html",
        //         },
        //         {
        //           label: "System",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__sys.html",
        //         },
        //         {
        //           label: "Networking",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__net.html",
        //         },
        //       ],
        //     },
        //     {
        //       label: "Utilities",
        //       items: [
        //         {
        //           label: "Packages",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__pkg.html",
        //         },
        //         {
        //           label: "Helpers and Utilities",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__utils.html",
        //         },
        //       ],
        //     },
        //     {
        //       label: "Languages",
        //       items: [
        //         {
        //           label: "C++",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__cpp.html",
        //         },
        //         {
        //           label: "Rust",
        //           link: "https://doc.riot-os.org/rustdoc/latest/riot_wrappers/index.html",
        //         },
        //       ],
        //     },
        //     {
        //       label: "System Specifics",
        //       items: [
        //         {
        //           label: "Boards",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__boards.html",
        //         },
        //         {
        //           label: "Bootloaders",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__bootloaders.html",
        //         },
        //         {
        //           label: "CPU",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__cpu.html",
        //         },
        //         {
        //           label: "Drivers",
        //           link: "https://doxygenwithpagefind.annsann.eu/group__drivers.html",
        //         },
        //       ],
        //     },
        //   ],
        },
      ],
      customCss: [],
      logo: {
        src: "./src/assets/riot-logo.svg",
        replacesTitle: true,
      },
      plugins: [
        starlightImageZoom()
      ],
      editLink: {
        baseUrl:
          "https://github.com/AnnsAnns/RIOT/tree/starlight/doc/starlight-docs",
      },
    }),
  ],
});
