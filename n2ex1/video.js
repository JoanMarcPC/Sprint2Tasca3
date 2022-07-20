
db.createCollection( 'video', {validator: {$jsonSchema: {bsonType: 'object',title:'video',required: [         'user'],properties: {user: {bsonType: 'objectId'},titol: {bsonType: 'string'},details: {bsonType: 'object',
title:'detallsvideo',properties: {size: {bsonType: 'int'},nom_arxiu: {bsonType: 'string'},durada: {bsonType: 'int'},ruta_thumbnail: {bsonType: 'string'},num_reproduccions: {bsonType: 'string'},num_likes: {bsonType: 'string'},num_dislikes: {bsonType: 'string'},descripcio: {bsonType: 'string'}}},etiquetes: {bsonType: 'array',items: {
title:'etiqueta',properties: {nom: {bsonType: 'string'}}}},status: {enum: ["P","O","PR"]},data_hora: {bsonType: 'timestamp'},like_dislike: {bsonType: 'array',items: {
title:'like_dislike',required: [         'user'],properties: {user: {bsonType: 'objectId'},data: {bsonType: 'timestamp'},type: {enum: ["L","D"]}}}},comentari: {bsonType: 'object',
title:'comentari',required: [         'user'],properties: {user: {bsonType: 'objectId'},text: {bsonType: 'string'},data: {bsonType: 'timestamp'},like_dislike: {bsonType: 'array',items: {
title:'like_dislike',required: [         'user'],properties: {user: {bsonType: 'objectId'},data: {bsonType: 'timestamp'},type: {enum: ["L","D"]}}}}}}}         }      }});  