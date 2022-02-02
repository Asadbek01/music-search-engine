import React, { FormEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Track } from '../type/Interface';


const Search = () => {
    const [query, setQuery] = useState("")

    const [music, setMusic] = useState<Track[]>([])
    const url ="https://striveschool-api.herokuapp.com/api/deezer/search?q="
  
  
    const handleSubmit =  async (e: FormEvent )=> {
         e.preventDefault()
    

        const response = await fetch(url + query)
        if(response.ok) {
         const result = await response.json()
         console.log(result)
         setMusic(result)
        }    
    }


  return <>
     <Form onSubmit={handleSubmit}>
     <Form.Control type="text" 
     placeholder="Insert a music"
     value={query}
     onChange={e => setQuery(e.target.value)}
     />
     </Form>
     <ul>
     {
     music.map((data) => {
         <li>{data.title}</li>
         console.log(data.id)
     })
     
     
     }
     </ul>

  </>;
};

export default Search;
