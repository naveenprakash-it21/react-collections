
let user = {
    name: "Naveen",
    age: 22,
    count: 0,
};

function Reducer(){ //State updater
    user={...user, count: user.count+1 };
}

Reducer();//1
console.log(user);
Reducer();//2
console.log(user);