const { User } = require("../db");

const updateUser = async function (id, email, role, fullname, profile, avatar, status) {

  if (!email, !role, !fullname, !profile, !status) {
    throw new Error('You must complete fields')
  }
  const searchUser = await User.findOne({
    where: {
      id: id,
    },
  });

  if (searchUser) {
    const updateUser = await User.update({
      email: email,
      role: role,
      fullname: fullname,
      profile: profile,
      avatar: avatar,
      status: status,
    }, {
      where: {
        id: id,
      }
    });

    return `New User ${email} was created and added successfully`
  } else {

    return `${email} email already exists`
  }
}
module.exports = { updateUser };