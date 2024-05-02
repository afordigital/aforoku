import { defineConfig, presetIcons, presetWebFonts, presetUno } from "unocss";

export default defineConfig({
  theme: {},
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        dmsans: {
          name: "DM Sans",
          weights: ["300", "400", "500", "700", "800"],
        },
      },
    }),
    presetIcons({
      cdn: "https://esm.sh/",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
