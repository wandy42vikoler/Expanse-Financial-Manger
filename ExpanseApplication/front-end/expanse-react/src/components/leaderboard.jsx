import "../App.css";
import Table from 'react-bootstrap/Table';
 

function leaderboardComponent() {

    return (
        <div className="leaderboard_card">
            <h6 className="card_title_activity">Leaderboard</h6>
            <Table className="transactions_table">
                <thead className="card_title">
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tom Krüse</td>
                        <td>38 %</td>
                    </tr>
                    <tr>
                        <td>Angelika Schön</td>
                        <td>22 %</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default leaderboardComponent;