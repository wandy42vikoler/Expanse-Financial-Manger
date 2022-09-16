import "/Users/wandyvikoler/Desktop/Codecool/ExpanseProject/expanse/ExpanseApplication/front-end/expanse-react/src/index.css";
import React, {useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//import SelectCategories from "./selectCategory";
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
/*import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
*/
 

function TransactionsInputForm() {

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

    const [title, setTitle] = useState("Title");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState(0);

    const categoryTitle = [];



    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${title + category + type + amount}`);
        console.log('Cata', category);

        if (type === 'Income'){
            //localhost:8080/transaction/addincome?title=CapGemini&category=Salary&amount=4300
            axios.put(`http://localhost:8080/transaction/addincome?title=${title}&category=${category}&amount=${amount}`)
        }
        else {
            axios.put(`http://localhost:8080/transaction/addexpense?title=${title}&category=${category}&amount=${amount}`)
        }
      }


    


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <InputLabel id="title">Title</InputLabel>
            <TextField id="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Autocomplete 
                value={category}
                onChange={(e, newValue) => { setCategory(newValue); }}
                id="category"
                options={categoryTitle}
                sx={{ width: 300 }}
                inputValue={category} 
                onInputChange={(event, newInputValue) => {
                    setCategory(newInputValue);
                  }}
                renderInput={(params) => <TextField {...params}/>}
                label="Category"
                />
            <InputLabel id="type">Income/Expense</InputLabel>
            <Select name="type"value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem select value="Expense">Expense</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
            </Select>
            <InputLabel id="amount">Amount</InputLabel>
            <OutlinedInput
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
            <Button type="submit "variant="contained" color="success">
                Add
            </Button> 
            </form>
        </div>
    )
}

export default TransactionsInputForm;