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
          label: "RIOT in a Nutshell",
          items: [
            { label: "Introduction", slug: "index" },
            { label: "RIOT Vision", slug: "general/vision" },
            "general/community_process",
            "general/structure",
          ],
        },
        {
          label: "Tutorials",
          items: [
            {
              label: "Getting Started",
              items: [
                // We need to specify the order of the items here
                // to make it easier to follow the guide
                "getting-started/install-wsl",
                "getting-started/installing",
                "getting-started/flashing",
                "getting-started/building_example",
                "getting-started/finding_modules",
              ],
            },
            {
              label: "C Basics",
              items: [
                "c_tutorials/create_project",
                "c_tutorials/timers",
                "c_tutorials/shell",
                "c_tutorials/threads",
                "c_tutorials/gpio",
                "c_tutorials/saul",
                "c_tutorials/lvgl",
              ],
            },
            {
              label: "Rust Basics",
              items: [
                "rust_tutorials/rust_in_riot",
                "rust_tutorials/create_project",
              ],
            },
          ],
        },
        {
          label: "Supported Architectures",
          autogenerate: { directory: "supported-arch" },
        },
        {
          label: "Build System",
          autogenerate: { directory: "build-system" },
        },
      ],
      customCss: [],
      logo: {
        src: "./src/assets/riot-logo.svg",
        replacesTitle: true,
      },
      plugins: [starlightImageZoom()],
      editLink: {
        baseUrl:
          "https://github.com/AnnsAnns/RIOT/tree/starlight/doc/starlight-docs",
      },
    }),
  ],
});
