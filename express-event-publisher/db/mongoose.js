const mongoose = require('mongoose')

//url + database name
mongoose.Promise = global.Promise
mongoose.connect('mongodb://172.17.0.2:27017/score-srv-poc', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () => {
    console.log('successfully connected to the database')
}).catch( e => {
    console.log('error connecting to the database')
    console.log(e)
    process.exit()
})