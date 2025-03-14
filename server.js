const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()
const PORT = 3000

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('pug', require('pug').__express)
app.engine('ejs', ejs.renderFile)

app.set('view engine', 'pug')

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]

const articles = [
  { id: 1, title: 'First Article', content: 'This is the first article.' },
  { id: 2, title: 'Second Article', content: 'This is the second article.' }
]

app.get('/users', (req, res) => {
  res.render('users', { users })
})

app.get('/users/:userId', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.userId))
  if (!user) return res.status(404).send('User not found')
  res.render('user', { user })
})

app.get('/articles', (req, res) => {
  res.render('articles.ejs', { articles })
})

app.get('/articles/:articleId', (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.articleId))
  if (!article) return res.status(404).send('Article not found')
  res.render('article.ejs', { article })
})

app.get('/', (req, res) => {
  res.render('index.ejs', { title: 'Головна сторінка' })
})

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`)
})
