let state = {
    count:0,
};
let previousState = state; 

function increment(){
    //Mutating state -- same memory location
//    state.count=state.count+1; 

    // Non Mutating state
    state={
        count:state.count+1   // new object never affect state
    } 
}
increment()
console.log(previousState);
console.log(state);


