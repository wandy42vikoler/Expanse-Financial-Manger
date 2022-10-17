import React, {useContext, useState} from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { appStateContext } from '../../store';



function SavingDialog(){

    axios.defaults.baseURL = 'http://localhost:8080';

    const [amount, setAmount] = useState();
    const [type, setType] = useState();
    const appState = useContext(appStateContext);

    const handleSubmit = () => {
        if (type === 'Deduct'){
            axios.post(`/savings/deduct?amount=${amount}`)
            .then(response => {
                axios.get('/finances/balance')
                .then(response => {
                    appState.setState(prevState =>{
                        prevState.totalBalance = response.data;
                        return {...prevState}
                    })
                })
            })
        }
        else{
            axios.post(`/savings/add?amount=${amount}`)
            .then(response => {
                axios.get('/finances/balance')
                .then(response => {
                    appState.setState(prevState =>{
                        prevState.totalBalance = response.data;
                        return {...prevState}
                    })
                })
            })
        }
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{marginTop: '5px'}}>
            <Grid item xs={12} sm={6} md={6}>
            <FormControl>
                <OutlinedInput
                    id="amount"
                    label="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    startAdornment={<InputAdornment position="start">€</InputAdornment>} />
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <FormControl>
                <InputLabel id="type">Add/Deduct</InputLabel>
                <Select id="type" label="Add/Deduct" placeholder="Add/Deduct" value={type} onChange={(e) => setType(e.target.value)} fullWidth>
                <MenuItem value="Deduct">Deduct</MenuItem>
                <MenuItem value="Add">Add</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={12}>
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