import Sequelize, { Model } from 'sequelize'

export default class Atendimento extends Model {
  static init (sequelize) {
    super.init(
      {
        id_barbeiro: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
                len: {
                    args: [11, 11],
                    msg: 'CPF deve ter 11 dígitos'
                }
            },
        },
      },
      {
        sequelize
      },
    )
    return this
  }


  static associate(models) {
    this.belongsTo(models.Barbeiro, {
      foreignKey: 'id_barbeiro',
      as: 'barbeiro',
    })

    this.belongsTo(models.User, {
      foreignKey: 'id_user',
      as: 'cliente',
    })
  }
}
