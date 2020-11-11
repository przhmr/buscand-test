const fetch = require('node-fetch');


const getData = async (query) => {
    
    let searchField= query

    let url = `http://api.tvmaze.com/search/shows?q=${searchField}`;
    
    let settings = { method: "Get" };
    
    const response = await fetch(url,settings)
    
    const data = await response.json()
                
     
    return data

    }

    module.exports= getData



    