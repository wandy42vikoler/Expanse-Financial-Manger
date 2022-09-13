import "../index.css";



 

function totalBalanceComponent() {

    return (

        <div className="card_component_totBalance">
        <img className="card_icon" src="https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/icons/hand.svg" alt="balance icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Balance</h5>
                <p className="card_data">
                Balance Amount
                </p>
            </div>
        </div>
    );
}

export default totalBalanceComponent;