
db.createCollection( 'botiga', {validator: {$jsonSchema: {bsonType: 'object',title:'botiga',properties: {adress: {bsonType: 'object',
title:'adress',required: [         'adress',          'codi_postal',          'localitat',          'provincia'],properties: {adress: {bsonType: 'string'},codi_postal: {bsonType: 'string'},localitat: {bsonType: 'string'},provincia: {bsonType: 'string'}}},empleats: {bsonType: 'array',items: {
title:'empleat',properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},NIF: {bsonType: 'string'},telefon: {bsonType: 'string'}}}}}         }      }});  