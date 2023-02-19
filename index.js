class ValidationErrors extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationErrors"
    }
}


let users = '{"age":20, "name": "mursidin"}';

try{
    let user = JSON.parse(users);

    if(!user.name){
        throw new ValidationErrors('name is not required');
    }

    if(!user.age){
        throw new ValidationErrors('age is not required');
    }
    console.log(`${user.name}`);
    console.log(`${user.age}`);
}catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Syntax Error: ${error.message}`);
    }else if(error instanceof ValidationErrors){
        console.log(`Invalid data: ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message)
    }else {
        console.log(error.stack)
    }
}