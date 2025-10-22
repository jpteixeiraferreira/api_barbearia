import dotenv from 'dotenv';
dotenv.config();

export default {

  //dialect é o tipo de banco de dados. Estou usando mariadb (mesma coisa do mysql)
  //pra alterar pra mysql basta mudar pra mysql.
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt' : 'created_at',
    'updatedAt' : 'updated_at',
    'deletedAt' : 'deleted_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
}
