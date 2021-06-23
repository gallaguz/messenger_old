'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId', as: 'user'})
    }

    toJSON = () => {
      return {
        ...this.get(),
        id: undefined,
        userId: undefined
      }
    }
  }
  Post.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'posts',
    modelName: 'Post',
  });
  return Post;
};
