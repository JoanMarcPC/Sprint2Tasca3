
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'nom',          'cognoms'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},telefon: {bsonType: 'string'},adress: {bsonType: 'object',
title:'adress',required: [         'adress',          'codi_postal',          'localitat',          'provincia'],properties: {adress: {bsonType: 'string'},codi_postal: {bsonType: 'string'},localitat: {bsonType: 'string'},provincia: {bsonType: 'string'}}},comanda: {bsonType: 'array',items: {
title:'comanda',required: [         'data'],properties: {productes: {bsonType: 'array',items: {
title:'producte',required: [         'nom',          'tipus',          'preu'],properties: {nom: {bsonType: 'string'},tipus: {enum: ["P","B","H"], P = pizza
B= beguda
H=hamburguesa},descripcio: {bsonType: 'string'},preu: {bsonType: 'double'},ruta_imatge: {bsonType: 'string'},categoria: {bsonType: 'objectId'}}}},preuTotal: {bsonType: 'double'},data: {bsonType: 'timestamp'},tipus: {enum: ["D","R"]},empleat: {bsonType: 'object',
title:'empleat',properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},NIF: {bsonType: 'string'},telefon: {bsonType: 'string'}}}}}}}         }      }});  