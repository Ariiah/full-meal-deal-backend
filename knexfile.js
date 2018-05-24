module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/fullmealdealdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
