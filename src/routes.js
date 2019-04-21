const AuthController = require('./controllers/AuthController')
const addEvent = require('./controllers/addEvent')
const upload = require('./controllers/posterUpload')
const Glimpsesupload = require('./config/multerglimpsesconfig')
const GlimpseController = require('./controllers/GLimpseController')

module.exports = (app) => {
    app.post('/register',AuthController.register)

    app.post('/login',AuthController.login)
}