import "../App.css";
 

function totalIncomeComponent() {

    return (
        <div className="card_component_totIncome">
        <img className="card_icon" src="https://www.clipartmax.com/png/middle/99-999995_low-cost-icon-money-with-an-arrow.png" alt="income icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Income</h5>
                <p className="card_data">
                Income Amount
                </p>
            </div>
        </div>
    );
}

export default totalIncomeComponent;