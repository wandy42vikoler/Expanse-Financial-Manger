import "../App.css";
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent } from "@mui/material";


function SavingGoals(){




    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft: 5, marginTop:8}}>
            <CircularProgress variant="determinate" {...props} size={100} thickness={5}/>
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(props.value)}%`}
              </Typography>
            </Box>
          </Box>
        );
      }






    return(
        <Card>
        <span style={{marginLeft: 10, marginTop: 10}}> Saving Goals </span>
        <CardContent>
          <CircularProgressWithLabel value={80} />
          <CircularProgressWithLabel value={80} />
          <CircularProgressWithLabel value={80} />
        </CardContent>
        </Card>
    )
}
export default SavingGoals;