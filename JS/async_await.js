console.log("This is just a test!!");

async function aa(){
    console.log("Inside aa  function");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log("Before response");

    const users = await response.json();
    console.log("users resolved")
    return users;

    //return "Inside aa";
}

function bb()
{
    
}

console.log("Before calling aa")
let v = aa();
console.log("After calling aa")
console.log(v);
v.then(data => {
    console.log(data)
    var result = document.getElementsByClassName('card-title')
    result.innerHTML = "Tanishqq"
    console.log("reached here")

})

console.log("Last line of async_await.js")