import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


function SelectCategories(){

    const categoryTitle = [];

    async function getCategories(){
        try{
            return await axios.get('http://localhost:8080/categories')
            .then(response => {
                response.data.map(title => {
                    categoryTitle.push(title.name)
                    return null;
                }
            )})
        }
        catch(err){
            console.log(err)
        }
    }

    getCategories()


    console.log('categoriesTitle', categoryTitle);


    return (
        <Autocomplete
      disablePortal
      id="categories"
      options={categoryTitle}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />

    )
}

export default SelectCategories;