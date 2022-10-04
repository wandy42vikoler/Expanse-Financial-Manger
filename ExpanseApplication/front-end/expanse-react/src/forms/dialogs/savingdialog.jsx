import React, {useState} from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



function SavingDialog(){

    axios.defaults.baseURL = 'http://localhost:8080';

    const [amount, setAmount] = useState();
    const [type, setType] = useState();

    const handleSubmit = () => {
        if (type === 'Deduct'){
            axios.post(`/savings/deduct?amount=${amount}`);
            console.log('deduct', amount)
        }
        else{
            axios.post(`/savings/add?amount=${amount}`);
            console.log('add', amount)
        }
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={1} /><Grid item xs>
            <Grid item xs>
            <FormControl>
                <OutlinedInput
                    id="amount"
                    label="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    startAdornment={<InputAdornment position="start">€</InputAdornment>} />
            </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl>
                <InputLabel id="type">Add/Deduct</InputLabel>
                <Select id="type" label="Add/Deduct" placeholder="Add/Deduct" value={type} onChange={(e) => setType(e.target.value)} fullWidth>
                <MenuItem value="Deduct">Deduct</MenuItem>
                <MenuItem value="Add">Add</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <FormControl>
            
            <Button type="submit " variant="contained" color="success" style={{ marginLeft: '10px' }}>
                Submit
            </Button>
            </FormControl>
            </Grid>
            </Grid>
            </form>
            </> 





    )




}
export default SavingDialog;