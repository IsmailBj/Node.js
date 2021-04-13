const fs = require("fs")

const readFile = ()=>{
    const data = fs.readFileSync('text.txt')
    console.log(data.toString())
}
const appendFile= text=>fs.appendFileSync('text.txt',text)

const writeFile = text =>fs.writeFileSync('text.txt',text)


module.exports = {
    readFile,
    appendFile,
    writeFile
}