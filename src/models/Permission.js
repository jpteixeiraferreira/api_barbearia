import Sequelize, { Model } from 'sequelize'

export default class Permission extends Model {
  static init (sequelize) {
    super.init(
      {
        descricao: {
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
      }
    )
    return this
  }
}
