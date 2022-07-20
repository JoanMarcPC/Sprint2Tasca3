
db.createCollection( 'user', {validator: {$jsonSchema: {bsonType: 'object',title:'user',properties: {email: {bsonType: 'string'},password: {bsonType: 'string'},nickname: {bsonType: 'string'},birth_date: {bsonType: 'string'},sex: {enum: ["H","M"]},playlist: {bsonType: 'array',items: {
title:'playlist',required: [         'user',          'video'],properties: {user: {bsonType: 'objectId'},video: {bsonType: 'array',items: {bsonType: 'objectId'}},nom: {bsonType: 'string'},data: {bsonType: 'timestamp'},status: {enum: ["P","PR"]}}}},canal: {bsonType: 'array',items: {
title:'canal',required: [         'user',          'user_sus',          'video'],properties: {nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},data_creacio: {bsonType: 'timestamp'},user: {bsonType: 'objectId'},user_sus: {bsonType: 'array',items: {bsonType: 'objectId'}},video: {bsonType: 'array',items: {bsonType: 'objectId'}}}}}}         }      }});  