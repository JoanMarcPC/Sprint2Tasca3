
db.createCollection( 'ulleres', {validator: {$jsonSchema: {bsonType: 'object',title:'ulleres',properties: {vidre_esquerra: {bsonType: 'object',
title:'Vidre',properties: {color: {bsonType: 'string'},graduacio: {bsonType: 'decimal'}}},vidre_dret: {bsonType: 'object',
title:'Vidre',properties: {color: {bsonType: 'string'},graduacio: {bsonType: 'decimal'}}},muntura: {bsonType: 'object',
title:'Muntura',properties: {color: {bsonType: 'string'},('F','P','M'): {enum: }}},preu: {bsonType: 'double'}}         }      }});  