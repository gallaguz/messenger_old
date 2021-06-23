'use strict';
const {Model} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({Post}) {

      this.hasMany(Post, { foreignKey: 'userId', as: 'posts'})
    }

    toJSON = () => {
      return {...this.get(), id: undefined, password: undefined}
    }
  }

  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a name'},
        notEmpty: { msg: 'Name must not be empty'}
      }
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: "",
      unique: {
        msg: 'This username is already taken.'
      },
      validate: {
        len: {
          args: [5, 50],
          msg: 'Your username may be 5 to 50 characters only.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 72],
          msg: 'Your password may be 5 to 72 characters only.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This email is already taken.'
      },
      validate: {
        isEmail: {
          msg: 'Email address must be valid.'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    hooks: {
      beforeValidate: function (user, options) {
        if (typeof user.email === 'string') {
          user.email = user.email.toLowerCase();
        }

        if (typeof user.username === 'string') {
          user.username = user.username.toLowerCase();
        }
      },
      beforeSave: (user, options) => {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      },
      beforeBulkCreate: (users, options) => {
        for (const user of users) {
          const salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeBulkUpdate: (users, options) => {
        for (const user of users) {
          const salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(2);
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });

  return User;
};

