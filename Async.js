let newPromise = new Promise((Correct, Reject) => {
    let dataRecieved = true;
    if(dataRecieved){
        Correct("Data fetched successfully");
    }else{
        Reject("Data not found");
    }
})

let message = newPromise
console.log(message);
// Await 
// Async 