import app from './App'

const port = process.env.PORT || 3333;


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})