import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

export default class User extends Model {
  static init (sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              //Argumentos de falidação, mínimo de caracteres e máximo
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe'
          },
          validate: {
            isEmail: {
              //Argumentos de falidação, mínimo de caracteres e máximo
              msg: 'E-mail inválido'
            }
          }
        },
        permissions_id: {
          type: Sequelize.INTEGER,
          defaultValue: 2,
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: ''
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              //Argumentos de falidação, mínimo de caracteres e máximoa
              args: [6, 50],
              msg: 'A senha deve ter entre 6 e 50 caracteres'
            }
          }
        }
      },
      {
        sequelize
      }
    )
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })
    return this
  }


  //define a relação one to many com a tabela Atendimento
  static associate(models) {
    this.hasMany(models.Atendimento, {
      foreignKey: 'id_user',
      sourceKey: 'id', 
      as: 'atendimentos',
    })
  }
}
