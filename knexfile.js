// const HOST = process.env.HOST;
// const PORT = process.env.PORT;
// const USER_DB = process.env.USER_DB;
// const PASSWORD_DB = process.env.PASSWORD_DB;
// const DATABASE = process.env.DATABASE;

// // const HOST = castor.db.elephantsql.com;
// const PORT = 5432;
// const USER_DB = "kszgykjs";
// const PASSWORD_DB = "GvddPV3UwHVzAbTjxZld6XJhvmAyA4B_";
// const DATABASE = "kszgykjs";

module.exports = {
  development: {
    client: "postgresql", // motor  de  base  de datos.
    connection: {
      // nombre base de datos y siusw datosy host
      //  DATOS  DE POSTGRESS  QUE COPIAMOS DE LA BASE DE DATOS DE LA NUBE.
      database: "kszgykjs",
      user: "kszgykjs",
      password: "GvddPV3UwHVzAbTjxZld6XJhvmAyA4B_",
      host: "castor.db.elephantsql.com",
      port: 5432,
    },
    pool: {
      // pool de conexiones de base de datos abiertas.  instancias!!
      min: 2,
      max: 10,
    },
  },
  // los datos mas parecidos a la produccion.  Se puede usar para pruebas.
  staging: {
    client: "postgresql",
    connection: {
      // nombre base de datos y siusw datosy host
      database: "my_db",
      user: "username",
      password: "password",
      host: "localhost",
    },
    pool: {
      // pool de conexiones de base de datos abiertas.  instancias!!
      min: 2,
      max: 10,
    },
    migrations: {
      // es crear las tablas de la base de datos. seeders. datos uniciales.
      // 1. migration, es creat las tablas, columnas,  como pstgress, con sus datos. al corrrer migartion, se crea la base de datos.
      // 2. seeder, es  insertar la data!!!
      tableName: "knex_migrations",
    },
  },
  // ===================================================
  // los datos mas parecidos a la produccion.  Se puede usar para pruebas. base de datos real DANGER !!!
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

//
