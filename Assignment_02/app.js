const textSerive = require('./textService')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const dataAppendFile = ()=>{
    rl.question("What text you want to Append   ",answer=>{
       textSerive.appendFile(answer)
    })
    
}

const dataWriteFile = ()=>{
    rl.question("What text you want to Write   ",answer=>{
        textSerive.writeFile(answer)
    })
}

const asker = ()=>{
    rl.question("what you want to do [Read Append Write] in a file  ",answer=>{
        switch(answer.toLowerCase()){
            case 'read':
                textSerive.readFile()
                break
            case 'append':
                dataAppendFile()
                break
            case 'write':
                dataWriteFile()
                break
            default:
                console.log('no criterium exist.Check if you miss spelled')

        }
       
    })
   
}

asker()
//! im having a problem with rl.close() i will ask you when we have classes

