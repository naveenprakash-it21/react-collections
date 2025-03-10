/*import React, { useEffect, useState } from "react";
import axios from "axios";

const PromiseAndAsync = () => {
  console.log("logging in");  
  
  const event = new Promise((resolve, reject)=>{
     let err = "kwenfkqer"
     var namee = "pedro";

     if(namee == 'pedro') {
      resolve(namee);
     }else{
      reject(err);
     }
  })
event
.then((namee)=>{
  console.log("passed successfully " + namee);
  return namee
})
.then((namee)=>{
  console.log("passed 2nd time " + namee )
})
.catch((err)=>{
  console.log("wrong cases and the msg is"+ err);
})
.finally(()=>{
  console.log('running finally');
})
}

const data = axios.get("https://cat-fact.herokuapp.com/facts");

data.then((res)=>{
    console.log(res)
    console.log('success')
})
.catch((err)=>{
    console.log(err)
    console.log("data not fetched")
})
.finally(()=>{
  console.log("data fetching was complete")
})

export default PromiseAndAsync*/

//AsyncAndAwait

const AsyncAndAwait = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const AsyncAndAwait = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      AsyncAndAwait();
    }, []); // Runs only once when component mounts
  
    return (
      <div>
        <h2>Fetched Data</h2>
        {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    );
  };
  
  //export default AsyncAndAwait;