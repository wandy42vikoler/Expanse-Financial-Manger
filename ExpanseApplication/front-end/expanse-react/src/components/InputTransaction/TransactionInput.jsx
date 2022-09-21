import "/Users/wandyvikoler/Desktop/Codecool/ExpanseProject/expanse/ExpanseApplication/front-end/expanse-react/src/index.css";
import React, {useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
 

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

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState(null);

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
            <form onSubmit={handleSubmit} style={{marginTop: '10px'}}>
            <Grid container
            spacing={1}>
            <Grid item xs>
            <FormControl>
            <TextField 
            label="Title"
            id="title" required value={title} 
            onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl>
            <Autocomplete
                value={category}
                onChange={(e, newValue) => { setCategory(newValue); }}
                id="category"
                options={categoryTitle}
                inputValue={category} 
                onInputChange={(event, newInputValue) => {
                    setCategory(newInputValue);
                  }}
                renderInput={(params) => <TextField label="Category" {...params}/>}
                />
            </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" label="Type" placeholder="Expense" value={type} onChange={(e) => setType(e.target.value)} fullWidth>
            <MenuItem value="Expense">Expense</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl>
            <InputLabel id="amount">Amount</InputLabel>
            <OutlinedInput
                id="amount"
                label="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
            </FormControl>
            </Grid>
            <Button type="submit "variant="contained" color="success" style={{marginLeft: '10px'}}>
                Add
            </Button> 
            </Grid>
            </form>
        </div>
    )
}

export default TransactionsInputForm;