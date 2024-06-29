"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unocss_1 = require("unocss");
exports.default = (0, unocss_1.defineConfig)({
    shortcuts: [
    // ...
    ],
    theme: {
        breakpoints: {
        // ... media queries
        },
        colors: {
        // ...
        }
    },
    rules: [
    // ...
    ],
    presets: [
        (0, unocss_1.presetAttributify)({ /* preset options */}),
        (0, unocss_1.presetUno)({ /* preset options */}),
        (0, unocss_1.presetIcons)(),
        (0, unocss_1.presetTypography)(),
        (0, unocss_1.presetWebFonts)({
            fonts: {
            // ...
            },
        }),
    ],
});
//# sourceMappingURL=uno.config.js.map