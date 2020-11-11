import Logo from './assets/logo.png'
import Axios from "axios";
import React, {useState, useEffect} from 'react';

function App() {

  const [searchField, setSearchField]= useState();
  const [error, setError]= useState();
  const [searchData, setSearchData]= useState();
 
  useEffect(() => {
       if (searchData){
         console.log(searchData)
       }
    
  })


  function handleChange(e){

    setSearchField(e.target.value)
    console.log(searchField)
    
   
  
    }

  const submit = async (e) => {
    e.preventDefault();
  
  

    try{

    
      const newSearch = {searchField};
      console.log(newSearch)
      const searchResult= await Axios.post("http://localhost:5002/search", newSearch);
      setSearchData(searchResult.data.data)

    
    }

    catch(err){

err.response.data.msg && setError(err.response.data.msg)
console.log(err)

    }
  };

  return (
<div className="w-full  h-screen p-2 bg-gray-800">


<div className="">
<img className="w-full h-48 mb-2 object-scale-down" src={Logo} alt="logo"></img>
</div>

 
 
  <form onSubmit={submit} className="justify-center items-center flex flex-col" >
    
      
      <input type="search" name="q" className=" py-2 px-6 rounded-full m-4" placeholder="Busqueda..." autocomplete="off" onChange={handleChange}></input>
      
        <button className=" py-2 px-6 text-white rounded-full  bg-red-300 " type="submit">
          Buscar
        </button>
        
  </form>

  

  

  
  {searchData && (
    
<ul className="mt-10  text-white">{searchData.map((item) => (
<>


        <li className="item p-2 mx-24  my-2 rounded-full opacity-85   bg-red-300"> Show: {item.show.name} Score: {item.score} from TVMAZE </li>
        
    </>
    
    
      ))} </ul>
    
    )} 



  
</div>



    
  );
}

export default App;
