import React, {useState} from 'react'

function Payment() {
    const [cardNumber, setCardNumber] = useState('')
    const [accountHolder, setAccountHolder] = useState('')
    const [amount, setAmount] = useState(1000)
    const [cardNumberError, setCardNumberError] = useState('')
    const [accountHolderError, setAccountHolderError] = useState('')
    const handleSubmit = () => {
        console.log('kk');
    }
    return (
        <div className="container">
            <div className="card my-3">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        Payment Gateway
                    </h2>
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="col-md-4">
                            <label className="form-label">Card Number</label>
                            <input
                                type="number"
                                className="form-control"
                                value={cardNumber}
                                required
                                onChange={(e) => {
                                    setCardNumber(e.target.value);
                                    setCardNumberError(false);
                                }}
                            />
                            {cardNumberError ? <div className="text-danger">Please enter your card number.</div> : ''}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Card Holder Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={accountHolder}
                                required
                                onChange={(e) => {
                                    setAccountHolder(e.target.value);
                                    setAccountHolderError(false);
                                }}
                            />
                            {accountHolderError ? <div className="text-danger">Please enter your card number.</div> : ''}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Amount</label>
                            <input
                                type="number"
                                className="form-control"
                                value={amount}
                                disabled
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary col-md-4 mx-auto">
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment
