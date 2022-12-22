const express = require("express")
const app = express()
const port = 4000

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