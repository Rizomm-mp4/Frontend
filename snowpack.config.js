/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
  // directory name: 'build directory'
   public: '/',
   src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
