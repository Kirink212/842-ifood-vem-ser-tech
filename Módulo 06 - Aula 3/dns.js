const dns = require('dns');

console.clear();

dns.promises.resolveAny('letscode-academy.com')
  .then(console.log)
  .catch(console.error);