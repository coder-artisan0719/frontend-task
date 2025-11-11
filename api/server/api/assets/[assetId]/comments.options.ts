export default defineEventHandler((event) => {
   event.node.res.statusCode = 204;
   setHeader(event, 'Access-Control-Allow-Origin', '*');
   setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
   setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization');
   event.node.res.end();
});
