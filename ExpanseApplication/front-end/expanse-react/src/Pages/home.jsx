import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TotalBalanceComponent from '../components/totalBalance';
import TotalExpenseComponent from '../components/TotalExpense';
import TotalIncomeComponent from '../components/TotalIncome';
import TotalSavingComponent from '../components/TotalSavings';
import TransactionsTable from '../components/Transactions';
import ActivityComponent from '../components/categoryExpensePie';
import LeaderboardComponent from '../components/leaderboard';
import ChartsComponent from '../components/charts';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function HomeDashboard() {

    axios.defaults.baseURL = 'http://localhost:8080';
  
    const [user, setUser] = useState();
    
    useEffect(() =>{
        axios.get('/user')
            .then(response => {
                setUser(response.data)
            })
            .catch(error =>{
                console.log(error)
            })
    },[])
  
    document.body.classList.add('body')

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    function setUsername(){
      if(user === ""){
        return <Button onClick={handleClickOpen}> Set your username </Button>
      } else {
        return <p>{user}!</p>
      }
  }

    const handleSubmit = (event) => {
      event.preventDefault()
      axios.post(`/user/${user}`)
    }
  
    return (
      <>
      <div className='greeting'>
        <h4>Welcome back,<br></br>
        {setUsername()}
        </h4>
      <Dialog open={open} onClose={handleClose} sx={{width: '1500px'}}>
        <form onSubmit={handleSubmit}>
        <DialogContent fullWidth maxWidth="xl">
        <TextField label="New Username" variant="outlined" onChange={(e)=> setUser(e.target.value)}/>
        <Button onClick={handleClose} type='submit'>Submit</Button>
        </DialogContent>
        </form>
      </Dialog>
      </div>
        <TotalBalanceComponent />
        <TotalBalanceComponent />
        <TotalExpenseComponent />
        <TotalIncomeComponent />
        <TotalSavingComponent />
        <TransactionsTable />
        <ActivityComponent />
        <LeaderboardComponent/>
        <ChartsComponent/>
      </>
    );
  }
  
  export default HomeDashboard;