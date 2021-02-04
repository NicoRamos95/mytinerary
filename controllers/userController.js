const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userController = {
    register: async (req, res) => {
        var errores = []
        const {firstName, lastName, userName, email, urlPic, password, country} = req.body
        if (firstName === '', lastName === '', userName === '', email === '', urlPic === '', password === '') {
            errores.push('Todos los campos tienen que estar completos')
        }
        if (email.split('@').length !== 2) {
            errores.push('Ingrese un mail')
        }
        if (email.split('@')[1].split('.').length < 2 || email.split('@')[1].split('.').length > 3) {
            errores.push('Ingrese el mail correctamente')
        }
        if (password.length < 6) {
            errores.push('El password debe tener 6 caracteres minimo')
        }
        const  userExist = await User.findOne({userName: userName})
        if (userExist) {
            errores.push('El nombre de usuario ya existe, elige otro')
        }
        if (errores.length === 0) {
            const passHashed = bcryptjs.hashSync(password, 10)

            var newUser = new User({
                firstName, lastName, userName, email, urlPic, password: passHashed, country
            })
            
            var userSave = await newUser.save()
            
            console.log(userSave)
        }

        return res.json({success: errores.length === 0 ? true : false, 
                        errores: errores, 
                        response: userSave}) 
    },

    logIn: async (req, res) => {
        const {userName, password} = req.body
        const userExists = await User.findOne({userName: userName})
        if (!userExists) {
            return res.json({success: false, mensaje: 'Usuario o contraseña es invalida.aaa'})
        }
        const passMatchs = bcryptjs.compareSync(password, userExists.password)
        if (!passMatchs) {
            return res.json({success: false, mensaje: 'Usuario o contraseña es invalidassss.'})
        }
        return res.json({success: true, response: userExists}) 
    }

}

module.exports = userController