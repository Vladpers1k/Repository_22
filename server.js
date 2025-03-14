const express = require('express')
const path = require('path')

const app = express()

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 }
]

const articles = [
  { id: 1, title: 'Introduction to Node.js', content: 'Node.js is a runtime...' },
  { id: 2, title: 'Understanding Express', content: 'Express is a minimal framework...' }
]

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/users', (req, res) => {
  res.render('pug/users', { users })
})

app.get('/users/:userId', (req, res) => {
  const user = users.find((u) => u.id == req.params.userId)
  if (!user) return res.status(404).send('User not found')
  res.render('pug/user', { user })
})

app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.get('/articles', (req, res) => {
  res.render('ejs/articles', { articles })
})

app.get('/articles/:articleId', (req, res) => {
  const article = articles.find((a) => a.id == req.params.articleId)
  if (!article) return res.status(404).send('Article not found')
  res.render('ejs/article', { article })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
