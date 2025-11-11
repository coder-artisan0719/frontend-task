import { defineNitroConfig } from 'nitropack/config';

// https://nitro.build/config
export default defineNitroConfig({
   compatibilityDate: 'latest',
   srcDir: 'server',
   routeRules: {
      '/api/**': { cors: true, headers: { 'access-control-allow-methods': 'GET,POST,OPTIONS,PUT,DELETE', 'access-control-allow-origin': 'http://localhost:5173', 'access-control-allow-headers': 'Content-Type,Authorization' } },
   },
});
