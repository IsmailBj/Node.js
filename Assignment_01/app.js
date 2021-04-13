const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const getUsers= ()=>{
    const data = fs.readFileSync('./read.json')
    const parsedData = JSON.parse(data)
    return parsedData.users
}

const getName =(name)=>{
    let users = getUsers()
    const user = users.find(s=>s.name=name)
    if(!user) throw new Error(`Student with ID: ${name} can't be found in the DB.`)
    return user
}

const getPasword = password=>{
    let users = getUsers()
    const user = users.find(s=>s.password===password)
    if(!users) throw new Error(`Student with ID: ${password} can't be found in the DB.`)
    return user
}

const login = ()=>{
    rl.question("Enter the username: ",name=>{
        rl.question("Enter the password: ",pass=>{
            if(!Number(name)){ 
                if(!getName(name.toLowerCase())||!getPasword(pass.toLowerCase())) console.log("Username or Password is wrong!!!")
                else console.log("you are logged in ")
            }else{
                console.error("Username cant be a number")
            }
            rl.close()
        })
    })
}

const register = newUser=>{
    let users = getUsers()
    const exists = users.find(s=>s.name===newUser.name)
    if(exists) throw new Error("UserName is taken Please une different username")
    users = [...users,newUser]
    saveStudent(users)
}
const saveStudent = users => {
    let data = {users}
    let stringifiedData = JSON.stringify(data)
    fs.writeFileSync('./read.json',stringifiedData)
}

const status = ()=> {
    rl.question("Do you want to login or register   ",asnwer=>{
        if(asnwer.toLowerCase()==='login'){
            login()
        }else if(asnwer.toLowerCase()==='register'){
            rl.question("Enter the user as JSON format: ",newUser=>{
                register(newUser)
                rl.close()
            })
        }
    })
}

(()=>{
    status()
})()