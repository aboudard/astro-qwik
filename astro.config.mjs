import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Qwik Essentials",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/aboudard/astro-qwik",
      },
      sidebar: [
        {
          label: "Getting started",
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Qwik basics",
          autogenerate: {
            directory: "qwik-basics",
          },
        },
      ],
    }),
  ],
  output: "server",
  adapter: netlify(),
});
