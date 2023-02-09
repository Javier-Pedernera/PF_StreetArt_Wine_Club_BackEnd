const { User  } = require("../db");

const createUser = async function (email, role, fullname, profile, avatar) {
  if (!email || !role || !fullname) {
    throw new Error('You must complete email, role and fullname')
  }

  const searchUser = await User.findOne({
    where: {
        email: email,
    },
  });   

    if (!searchUser) {
        const newUser = await User.create({
            email: email,
            role: role,
            fullname: profile,
            profile: profile,
            avatar: avatar,
        });
    
    return `New User ${email} was created successfully`
  } else {
 
    return `${email} email already exists`
  }
}
module.exports = { createUser };