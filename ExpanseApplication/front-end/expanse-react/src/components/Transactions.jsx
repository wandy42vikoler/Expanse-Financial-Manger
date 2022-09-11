import "../App.css";
import Table from 'react-bootstrap/Table';
 

function transactionsComponent() {

    return (
        <div className="transaction_card">
            <Table className="transactions_table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Codecool</td>
                        <td>Education</td>
                        <td>12-12-2012</td>
                        <td>2,000 $</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default transactionsComponent;