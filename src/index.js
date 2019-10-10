const express = require('express');

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres', 'user', 'password123', {
    host: 'postgres',
    dialect: 'postgres'
});

const app = express();

class User extends Model {}
User.init(
    {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE
    },
    { sequelize, modelName: 'user' }
);

sequelize
    .sync()
    .then(() =>
        User.create({
            username: 'janedoe',
            birthday: new Date(1980, 6, 20)
        })
    )
    .then(jane => {
        console.log(jane.toJSON());
    });

app.listen(8081, () => console.log('Server Runnin on PORT 8081'));
