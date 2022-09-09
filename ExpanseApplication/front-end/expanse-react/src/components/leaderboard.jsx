import "../App.css";
import Table from 'react-bootstrap/Table';
 

function leaderboardComponent() {

    return (
        <div className="leaderboard_card">
            <Table className="transactions_table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Joe Mooma</td>
                        <td>38 %</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default leaderboardComponent;