'use strict';
const models = require("../models");
const User = models.User;

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return User.bulkCreate(generateUsers(10), {});
    },

    down: async (queryInterface, Sequelize) => {
        return User.destroy({
            where: {},
            truncate: true
        });
    }
};

function generateUsers(n) {
    const users = [];

    users.push({
        name: 'admin',
        username: 'root',
        password: 'root',
        email: 'admin@admin.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: null
    })

    for (let i = 0; i < n; i++) {
        const user = {
            name: 'name' + i,
            username: 'username ' + i,
            password: 'name' + i,
            email: `${makeId(3)}@mail.com`,
            role: 'guest',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        users.push(user);
    }

    return users;
}

function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
