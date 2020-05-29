module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/car-dealer.db"
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      }
    }
  }