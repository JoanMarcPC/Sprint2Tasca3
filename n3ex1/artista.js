
db.createCollection( 'artista', {validator: {$jsonSchema: {bsonType: 'object',title:'artista',required: [         'artista_relacionat'],properties: {albums: {bsonType: 'array',items: {
title:'album',required: [         'canco'],properties: {canco: {bsonType: 'array',items: {bsonType: 'objectId'}},titol: {bsonType: 'string'},data_publicacio: {bsonType: 'date'}}}},nom: {bsonType: 'string'},ruta_imatge: {bsonType: 'string'},artista_relacionat: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      }});  