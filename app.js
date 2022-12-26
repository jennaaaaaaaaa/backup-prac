//git

const express = require("express")
const app = express()
const port = 4000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const users = [
    {"name":"김기민", "level":"student", "phone":"01011112222", "point":50},
    {"name":"A", "level":"A", "phone":"A", "point":10}
]

app.post('/signup', (req,res) => {
    users.push(req.body)
    console.log(users) //이걸 작성하지 않으면 터미널에 추가된 배열이 보여지지 않음
    res.send('회원가입 페이지')
})


app.post('/signin', (req,res) => {
    res.send('로그인 페이지')
})

app.get('/', (req,res) => {
    res.send('글 리스트')
})

app.get('/detail', (req,res) => {
    res.send('글 상세')
})

app.post("/write", (req,res) => {
    res.send('글 작성 페이지')
})

app.post("/modify", (req,res) => {
    res.send('글 수정 페이지')
})

app.post("/delete", (req,res) => {
    res.send('글 삭제 페이지')
})








app.listen(port, () => {
    console.log(port, '포트 열림')
})