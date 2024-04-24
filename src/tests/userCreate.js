const User = require("../models/User")

const userCreate = async()=> {

    const user = {
        firstName: 'eduardo',
        lastName: 'ospino',
        email: 'edaurdo@gmail.com',
        password:'0123454',
        phone:'1231321321'
    }

    await User.create(user)
}

module.exports = userCreate