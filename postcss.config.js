import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from "autoprefixer";
import postcssReporter from "postcss-reporter";

export default {
    plugins: [
        postcssImport(),
        postcssPresetEnv({
            stage: 2,
            features: {
                "nesting-rules": true,
                "custom-media-queries": true,
            }
        }),
        autoprefixer(),
        postcssReporter()
    ]
}