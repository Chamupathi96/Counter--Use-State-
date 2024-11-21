import { useState } from "react"


const Counter = () => {

  const[counter, setCounter] = useState(0);

  const Increase = () =>{
       setCounter (counter +1)
  };

  const Decrease = () =>{
    setCounter (counter -1)
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-300">

         <h1 className="text-4xl font-bold text-blue-600"> Count : {counter} </h1> 

         <div className="flex space-x-4">
      <button onClick={Increase} 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" 
      >Increase</button>
      <button onClick={Decrease}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" 
      >Decrease</button>

      </div>
    </div>
  ) 
}

export default Counter
