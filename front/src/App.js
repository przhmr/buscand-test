import Logo from './assets/logo.png'
import Axios from "axios";
import React, {useState} from 'react';

function App() {

  const [searchField, setSearchField]= useState();
  const [error, setError]= useState();

  function handleChange(e){

    setSearchField(e.target.value)
    console.log(searchField)
    
   
  
    }

  const submit = async (e) => {
    e.preventDefault();
  
  

    try{

    
      const newSearch = {searchField};
      console.log(newSearch)
      await Axios.post("http://localhost:5002/search", newSearch);
      
    }

    catch(err){

err.response.data.msg && setError(err.response.data.msg)
console.log(err)

    }
  };

  return (
<div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-800">


<div>
<img className="w-full" src={Logo} alt="logo"></img>
</div>

 
 
 <div className="w-full justify-center  ">
  <form onSubmit={submit} >
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Busqueda..." autocomplete="off" onChange={handleChange}></input>
    </div>
  </form>

  </div>
</div>



    
  );
}

export default App;
