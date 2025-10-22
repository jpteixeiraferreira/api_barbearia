import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User.js';
import Barbeiro from '../models/Barbeiro.js';
import Atendimento from '../models/Atendimento.js';

const models = [User, Barbeiro, Atendimento];
const connection = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  databaseConfig
);
models.forEach(model => model.init(connection));

export {connection, Aluno, User};
