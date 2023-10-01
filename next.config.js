/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

webpack: config => {
    /* On `node-fetch` v2, that `supabase-js` uses,
    `encoding` package was optionally required for `.textConverted`
    which means it wasn't in `node-fetch` deps.
    See: https://github.com/node-fetch/node-fetch/issues/412.
    Since `encoding` is not part of the deps by default, when using with webpack,
    it will raise a warning message.
    This can be ignored as it doesn't prevent anything to work well. */
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];
  
    return config;
  }