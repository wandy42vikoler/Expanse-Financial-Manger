import "../App.css";
 

function totalExpenseComponent() {

    return (

        <div className="card_component_totExpenses">
            <div>
                <img className="card_icon" src="https://cdn-icons-png.flaticon.com/512/2315/2315648.png" alt="expense icon" width='40'/>
            </div>
            <div className="card_body">
                <h5 className="card_title">Total Expense</h5>
                <p className="card_data">
                Expense Amount
                </p>
            </div>
        </div>
    );
}

export default totalExpenseComponent;