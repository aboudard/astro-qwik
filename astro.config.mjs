import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Astro Qwik",
    logo: {
      src: "./src/assets/logo.svg"
    },
    social: {
      github: "https://github.com/aboudard/astro-qwik"
    },
    sidebar: [{
      label: "Guides",
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "Example Guide",
        link: "/guides/example/"
      }]
    }, {
      label: "Reference",
      autogenerate: {
        directory: "reference"
      }
    }]
  })],
  output: "server",
  adapter: netlify()
});