import Sequelize, { Model } from 'sequelize'

export default class Barbeiro extends Model {
  static init (sequelize) {
    super.init(
      {
        cpf: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
                len: {
                    args: [11, 11],
                    msg: 'CPF deve ter 11 dígitos'
                }
            }
        },
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              //Argumentos de validação, mínimo de caracteres e máximo
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres'
            }
          }
        },
        sobrenome: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
              len: {
                
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
              msg: 'E-mail inválido'
            }
          }
        },
      },
      {
        sequelize
      }
    )
    return this
  }

  // Definição da relação one to many com a tabela Atendimento
  static associate(models) {
    this.hasMany(models.Atendimento, {
      foreignKey: 'id_barbeiro',
      sourceKey: 'cpf', 
      as: 'atendimentos',
    })
  }
}
