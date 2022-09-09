import "../App.css";
import DoughnutChart from "../charts/PieChartCategory";
 

function activityComponent() {

    return (

        <div className="card_component_activity">
                <h5 className="card_title_activity">Activity</h5>
                <div style={{marginLeft: '70px', marginBottom:'30px'}}>
                <DoughnutChart />
                </div>
        </div>
    );
}

export default activityComponent;