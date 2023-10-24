/* Générateur d'id unique pour chaque projet dans "projects.json"
(en attendant une BDD)
Taper "node generateUUID.js" dans le terminal */
const { v4: uuidv4 } = require('uuid');

const uniqueId = uuidv4();
console.log('UUID unique :', uniqueId);
