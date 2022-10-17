import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function GoalProgressLine(props){
    return (
        <Box sx={{ alignItems: 'center', marginLeft: '10px', marginRight: '10px', paddingTop: '10px', borderBottom: '0.5px solid #A4B4CB', overflow: 'scroll', maxHeight: '280px'}}>
            <Box sx={{paddingLeft: '10px' }}>
                <h6>{props.name}</h6>
            </Box>
        <Box sx={{ width: '80%', mr: 1, display: 'inline-block', paddingBottom: '2.5px', paddingLeft: '10px' }}>
            <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35, display: 'inline-block', paddingLeft: '5px', marginBottom: '10px' }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
            )}%`}</Typography>
        </Box>
    </Box>
    )
}

export default GoalProgressLine;