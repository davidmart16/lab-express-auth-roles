const mongoose = require("mongoose")

module.exports= {

    isLoggedIn: (req,res, next) => {

        req.session.currentUser ? next() : res.render('auth/login', {errorMsg: 'Inicia sesion para continuar'})
        
    },

    checkRoles: (...roles) => (req, res, next) => {
        roles.includes(req.session.currentUser.role) ? next() : res.render('auth/login', { errorMsg: 'No tienes permisos' })
    },

}