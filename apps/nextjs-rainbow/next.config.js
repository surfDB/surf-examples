//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { SurfClient } = require('@surfdb/client-sdk');

const surfClient = new SurfClient({
  client: 'http://localhost:3000',
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  serverRuntimeConfig: {
    surfClient,
  },
};

module.exports = withNx(nextConfig);
