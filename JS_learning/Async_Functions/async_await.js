//await expressions are only allowed within async functions and at the top levels os modules

const myUser = {
    userList:[]
}

const us = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    const userData = await response.json()
    //console.log("async_await",userData)
    return userData
}
//us()

//async complex examples
const anotherFunction = async() => {
    const data = await us()
    myUser.userList = data
    console.log(myUser);
    return data
}
anotherFunction()
console.log(myUser);

//example2
const myUs = {
    userLis:[]
}

const u = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    const userData = await response.json()
    //console.log("async_await",userData)
    anotherFunc(userData)
    return userData
}
const anotherFunc = (data) => {
    myUs.userLis = data
    console.log(myUser);
    return data
}
u()
console.log(myUs);
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",
        {
            method: "GET",
            headers: {
                Accept: "application/json"
                //Accept: "text/plain"
            }
        })
    const jsonJokeData = await response.json()
    //const jsonJokeData = await response.text()
    console.log(jsonJokeData);
    document.getElementById('demo').textContent = jsonJokeData.joke;
}
getDadJoke();

//Post Method
const jokeObj = {
    id: '3gNRuHY89Ed', 
    joke: 'What do you call two guys hanging out by your window? Kurt & Rod.', 
    }
const postDadJoke = async (jokeob) => {
    const response = await fetch("https://httpbin.org/post",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"   
                 },
            body: JSON.stringify(jokeob)
        })
    const jsonJokeData = await response.json()
    console.log(jsonJokeData);
}
postDadJoke(jokeObj);
