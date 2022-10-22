import { Card, CardContent } from "@mui/material";
import DoughnutChart from "../charts/PieChartCategory";
import '../App.css'
 

function activityComponent() {

    return (

        <div>
                <span style={{ fontWeight: '800', fontSize: '22px', fontFamily: 'Manrope', marginLeft: '25px', marginTop: '15px'}}>Activity</span>
                <DoughnutChart/>
        </div>
    );
}

export default activityComponent;