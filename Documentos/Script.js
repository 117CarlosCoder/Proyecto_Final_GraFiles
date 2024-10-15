const db = connect("mongodb://localhost:27018/grafiles");

// Inserciones en la colección 'user'
db.user.insertMany([
  {
    "_id": ObjectId("670bf9ba3bca3f21704f0f80"),
    "name": "Carlos",
  "username": "carlos117",
  "email": "carlos@example.com",
  "password": "$2a$10$VRVGEgI9e2mMSMen/mtyR.u27rVYq/BpXiwDVsEsBr6RtvpBiv6CC",
  "is_enabled": true,
  "account_No_Expired": true,
  "account_No_Locked": true,
  "credential_No_Expired": true,
  "update": false,
  "role": "ADMIN",
  "_class": "com.archivos.api_grafiles_spring.persistence.model.UserModel"
  },
  {
    "_id": ObjectId("670d5ad68c28352cbf5d0925"),
    "name": "Daniel López",
  "username": "daniel",
  "email": "daniel@example.com",
  "password": "$2a$10$uG9Pi0h9GCV3rjDepE4dLeJW0lp3WoSg3U/fqZ1hyUz4uSMcyk20.",
  "is_enabled": true,
  "account_No_Expired": true,
  "account_No_Locked": true,
  "credential_No_Expired": true,
  "update": false,
  "role": "EMPLOYEE",
  "_class": "com.archivos.api_grafiles_spring.persistence.model.UserModel"
  },
  {
    "_id": ObjectId("670d5a9c8c28352cbf5d0924"),
     "name": "Anyi Lux",
  "username": "anyi",
  "email": "anyi@example.com",
  "password": "$2a$10$0dy.QZBij5KwGyj9KNiJcu2j5Q/iMGeVlsPW7nGTT5lJ60epznbzC",
  "is_enabled": true,
  "account_No_Expired": true,
  "account_No_Locked": true,
  "credential_No_Expired": true,
  "update": false,
  "role": "EMPLOYEE",
  "_class": "com.archivos.api_grafiles_spring.persistence.model.UserModel"
  }
]);

// Inserciones en la colección 'directory'
db.directory.insertMany([
  {
  "_id": 
    ObjectId("67080f1597783f738504a6fd")
  ,
  "name": "Nuevo1",
  "user_id": 
    ObjectId("670bf9ba3bca3f21704f0f80")
  ,
  "directory": 1,
  "directory_parent_id": 
    ObjectId("000000000000000000000000")
  ,
  "isDeleted": false,
  "created": new Date('2024-10-10T17:29:57.353Z')
  ,
  "updated": new Date("2024-10-10T17:29:57.353Z")
  ,
  "_class": "com.archivos.api_grafiles_spring.persistence.model.Directory"
},
{
  "_id": 
    ObjectId("670d5aeb8c28352cbf5d0926")
  ,
  "name": "Nuevo1",
  "user_id": 
    ObjectId("670d5ad68c28352cbf5d0925")
  ,
  "directory": 1,
  "directory_parent_id": 
    ObjectId("000000000000000000000000")
  ,
  "isDeleted": false,
  "created": new Date('2024-10-14T17:54:51.878Z')
  ,
  "updated": new Date("2024-10-14T17:54:51.878Z")
  ,
  "_class": "com.archivos.api_grafiles_spring.persistence.model.Directory"
},
{
  "_id": 
    ObjectId("670d5b7253653322813c2665")
  ,
  "name": "Nuevo1",
  "user_id": 
    ObjectId("670d5a9c8c28352cbf5d0924")
  ,
  "directory": 1,
  "directory_parent_id": 
    ObjectId("000000000000000000000000")
  ,
  "isDeleted": false,
  "created": new Date('2024-10-14T17:57:06.020Z')
  ,
  "updated": new Date("2024-10-14T17:57:06.020Z")
  ,
  "_class": "com.archivos.api_grafiles_spring.persistence.model.Directory"
}
]);

// Inserciones en la colección 'directoryShared'
db.directoryShared.insertMany([
  {
  "_id": 
    ObjectId( "670d5afe8c28352cbf5d092d")
  ,
  "name": "Daniel.txt",
  "directory_id": 
    ObjectId( "000000000000000000000000")
  ,
  "user_id": 
    ObjectId( "670d5a9c8c28352cbf5d0924")
  ,
  "user_share": "anyi@example.com",
  "size": NumberLong ("4")
  ,
  "file_type": "application/octet-stream",
  "gridfs_file_id": 
    ObjectId( "670d5afe8c28352cbf5d092a")
  ,
  "isDeleted": false,
  "created": new Date('2024-10-14T17:55:10.694Z')
  ,
  "updated": new Date("2024-10-14T17:55:10.694Z")
  ,
  "_class": "com.archivos.api_grafiles_spring.persistence.model.DirectoryShared"
},

{
  "_id": 
    ObjectId( "670d5ba353653322813c266b")
  ,
  "name": "Anyi.txt",
  "directory_id": 
    ObjectId( "000000000000000000000000")
  ,
  "user_id": 
    ObjectId( "670d5ad68c28352cbf5d0925")
  ,
  "user_share": "daniel@example.com",
  "size": NumberLong ("6")
  ,
  "file_type": "application/octet-stream",
  "gridfs_file_id": 
    ObjectId( "670d5ba353653322813c2669")
  ,
  "isDeleted": false,
  "created": new Date('2024-10-14T17:57:55.208Z')
  ,
  "updated": new Date("2024-10-14T17:57:55.208Z")
  ,
  "_class": "com.archivos.api_grafiles_spring.persistence.model.DirectoryShared"
}
]);

// Inserciones en la colección 'file'
db.file.insertMany([
  {
    "_id": 
      ObjectId( "670d5af48c28352cbf5d0929")
    ,
    "name": "Daniel.txt",
    "directory_id": 
      ObjectId( "000000000000000000000000")
    ,
    "user_id": 
      ObjectId( "670d5ad68c28352cbf5d0925")
    ,
    "size": NumberLong("4")
    ,
    "file_type": "application/octet-stream",
    "gridfs_file_id": 
      ObjectId( "670d5af48c28352cbf5d0927")
    ,
    "isDeleted": false,
    "created": new Date('2024-10-14T17:55:00.925Z')
    ,
    "updated": new Date("2024-10-14T17:55:00.925Z")
    ,
    "_class": "com.archivos.api_grafiles_spring.persistence.model.File"
  },

  {
    "_id": 
      ObjectId( "670d5b9753653322813c2668")
    ,
    "name": "Anyi.txt",
    "directory_id": 
      ObjectId( "000000000000000000000000")
    ,
    "user_id": 
      ObjectId( "670d5a9c8c28352cbf5d0924")
    ,
    "size": NumberLong("6")
    ,
    "file_type": "application/octet-stream",
    "gridfs_file_id": 
      ObjectId( "670d5b9753653322813c2666")
    ,
    "isDeleted": false,
    "created": new Date('2024-10-14T17:57:43.911Z')
    ,
    "updated": new Date("2024-10-14T17:57:43.911Z")
    ,
    "_class": "com.archivos.api_grafiles_spring.persistence.model.File"
  }
]);

// Inserciones en la colección 'fs.chunks'
db.fs.chunks.insertMany([
  {
    "_id": 
      ObjectId( "670d5af48c28352cbf5d0928")
    ,
    "files_id": 
      ObjectId( "670d5af48c28352cbf5d0927")
    ,
    "n": 0,
    "data": 
      Binary.createFromBase64("MTIzNA==",0)
  },
  {
    "_id": 
      ObjectId( "670d5afe8c28352cbf5d092b")
    ,
    "files_id": 
      ObjectId( "670d5afe8c28352cbf5d092a")
    ,
    "n": 0,
    "data": 
      Binary.createFromBase64("MTIzNA==",0)
  }
  ,
  {
    "_id": 
      ObjectId( "670d5b9753653322813c2667")
    ,
    "files_id": 
      ObjectId( "670d5b9753653322813c2666")
    ,
    "n": 0,
    "data": 
      Binary.createFromBase64("MTIzMTIz",0)
  }
  ,
  {
    "_id": 
      ObjectId( "670d5ba353653322813c266a")
    ,
    "files_id": 
      ObjectId( "670d5ba353653322813c2669")
    ,
    "n": 0,
    "data": 
      Binary.createFromBase64("MTIzMTIz",0)
  }
]);

// Inserciones en la colección 'fs.files'
db.fs.files.insertMany([
    {
  "_id": 
    ObjectId( "670d5af48c28352cbf5d0927")
  ,
  "filename": "Daniel.txt",
  "length": NumberLong("4")
  ,
  "chunkSize": 261120,
  "uploadDate":new Date("2024-10-14T17:55:00.922Z")
  ,
  "metadata": {
    "_contentType": "application/octet-stream"
  }
},
{
  "_id": 
    ObjectId( "670d5afe8c28352cbf5d092a")
  ,
  "filename": "Daniel.txt",
  "length": NumberLong("4")
  ,
  "chunkSize": 261120,
  "uploadDate":new Date("2024-10-14T17:55:10.684Z")
  ,
  "metadata": {
    "_contentType": "application/octet-stream"
  }
},
{
  "_id": 
    ObjectId( "670d5b9753653322813c2666")
  ,
  "filename": "Anyi.txt",
  "length": NumberLong("6")
  ,
  "chunkSize": 261120,
  "uploadDate":new Date("2024-10-14T17:57:43.908Z")
  ,
  "metadata": {
    "_contentType": "application/octet-stream"
  }
},
{
  "_id": 
    ObjectId( "670d5ba353653322813c2669")
  ,
  "filename": "Anyi.txt",
  "length": NumberLong("6")
  ,
  "chunkSize": 261120,
  "uploadDate":new Date("2024-10-14T17:57:55.205Z")
  ,
  "metadata": {
    "_contentType": "application/octet-stream"
  }
}
]);