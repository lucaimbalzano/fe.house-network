/** @type {import('next').NextConfig} */

module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)', // Match all routes
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' }, // Replace '*' with your desired origin(s) or set it to the specific domain(s) allowed
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
            { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
            { key: 'Access-Control-Max-Age', value: '86400' }, // Optional: Specify the maximum age for the preflight response in seconds
          ],
        },
      ];
    },
  };
  