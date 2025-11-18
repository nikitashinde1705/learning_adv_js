let message = "Hello welcome to Module concept";


function user(name){
    console.log(`Welcome ${name}`);
}

class test{
    constructor(){
        console.log("This is constructor calling");
    }
}

export {message, user, test};