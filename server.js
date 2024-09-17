const express = require('express')
const app = express()
const path = require('path')
const cookieSession  = require('cookie-session')
const  cookieParser  =require('cookie-parser')
// const  cpt= require('crypto')
const isAuthenticated = require('./middleware/securitycheck')
const connectDB = require('./config/db')
connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


/* ----- session ----- */
app.use(cookieSession({
  name: 'session',
  keys: ['bhjbdsfbsefsdfs'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cookieParser());

app.use(express.static('public'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/', require('./routes/home'))
app.use('/uploaded-files', require('./routes/listing'))
app.use('/cleanup', require('./routes/cleanup'))
app.use('/api/files', require('./routes/files'))
app.use('/api/login', require('./routes/login'))
app.use('/files', require('./routes/filePreview'))
app.use('/files/download', require('./routes/download'))

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`)
});