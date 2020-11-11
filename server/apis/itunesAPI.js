const fetch = require('node-fetch');


const getData = async (query) => {
    
    let searchField= query

    let url = `https://itunes.apple.com/search?term=${searchField}`;
    
    let settings = { method: "Get" };
    
    const response = await fetch(url,settings)
    
    const data = await response.json()
                
     
    return data

    }

    module.exports= getData



    