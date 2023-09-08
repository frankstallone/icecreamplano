import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import purgecss from 'astro-purgecss';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://icecreamplano.com/',
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    purgecss(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
