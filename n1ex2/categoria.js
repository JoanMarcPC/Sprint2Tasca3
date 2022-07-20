
db.createCollection( 'categoria', {validator: {$jsonSchema: {bsonType: 'object',title:'categoria',properties: {nom: {bsonType: 'string'}}         }      }});  