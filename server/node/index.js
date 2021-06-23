const express = require('express');

const { sequelize, User, Post } = require('./models');

const app = express();
app.use(express.json());

app.post('/users', async (request, response) => {
  const {
    name, username, password, email, role,
  } = request.body;

  try {
    const user = await User.create({
      name, username, password, email, role,
    });

    return response.json(user);
  } catch (e) {
    console.log(e);
    return response.status(500).json(e);
  }
});

app.post('/posts', async (request, response) => {
  const { userUuid, body } = request.body;

  try {
    const user = await User.findOne({
      where: { uuid: userUuid },
    });

    const post = await Post.create({
      body, userId: user.id,
    });

    return response.json(post);
  } catch (e) {
    console.log(e);
    return response.status(500).json(e);
  }
});

app.get('/users', async (request, response) => {
  try {
    const users = await User.findAll();

    return response.json(users);
  } catch (e) {
    console.log(e);
    return response.status(500).json({ e, m: 'something wrong' });
  }
});

app.get('/users/:uuid', async (request, response) => {
  const { uuid } = request.params;

  try {
    const user = await User.findOne({
      where: { uuid },
      include: ['posts'],
    });

    return response.json(user);
  } catch (e) {
    console.log(e);
    return response.status(500).json({ e, m: 'something wrong' });
  }
});

app.get('/posts', async (request, response) => {
  try {
    // const posts = await Post.findAll({include: ['user']});
    //
    const posts = await Post.findAll({
      include: [{
        model: User,
        as: 'user',
      }],
    });

    return response.json(posts);
  } catch (e) {
    console.log(e);
    return response.status(500).json(e);
  }
});

app.delete('/users/:uuid', async (request, response) => {
  const { uuid } = request.params;

  try {
    const user = await User.findOne({
      where: { uuid },
    });

    await user.destroy();

    return response.json({ message: 'User deleted' });
  } catch (e) {
    console.log(e);
    return response.status(500).json({ e, m: 'something wrong' });
  }
});

app.patch('/users/:uuid', async (request, response) => {
  const { uuid } = request.params;
  const {
    name, username, email, password, role,
  } = request.body;

  console.log(request.param);
  try {
    const user = await User.findOne({
      where: { uuid },
    });

    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;
    user.role = role;

    await user.save();

    return response.json(user);
  } catch (e) {
    console.log(e);
    return response.status(500).json({ e, m: 'something wrong' });
  }
});

app.listen({ port: 5000 }, async () => {
  console.log('Server up in http://localhost:5000');
  await sequelize.authenticate();
  console.log('DB Connected');
});
