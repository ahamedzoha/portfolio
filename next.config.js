// next.config.js
// const withReactSvg = require("next-react-svg");
// const path = require("path");

// module.exports = withReactSvg({
//     include: path.resolve(__dirname, "/assets/svg/"),
//     webpack(config, options) {
//         return config;
//     },
// });
// module.exports = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             issuer: {
//                 test: /\.(js|ts)x?$/,
//             },
//             use: ["@svgr/webpack"],
//         });

//         return config;
//     },
// };

const withImages = require("next-images");
module.exports = withImages();
