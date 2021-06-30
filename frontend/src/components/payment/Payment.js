import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {getUser} from '../../actions/auth'
import { makePayment, fetchPayment } from '../../actions/payment';
import { ROLES } from '../../constants/constants';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router';

function Payment() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts();

    useEffect(()=>{
        dispatch(getUser());
        dispatch(fetchPayment());
    }, [])

    const user = useSelector((state) => state.auth.user);

    const payment = useSelector((state)=> state.payment.payments);

    useEffect(()=>{
        const data = payment?.filter((item)=> item.user._id == user?._id)
        if(data?.length){
            history.push('/');
        }
    },[payment])

    const [cardNumber, setCardNumber] = useState('')
    const [accountHolder, setAccountHolder] = useState('')
    const [amount, setAmount] = useState(1000)
    const [cardNumberError, setCardNumberError] = useState('')
    const [accountHolderError, setAccountHolderError] = useState('')
    const [title, setTitle] = useState('')

    useEffect(()=>{
        setTitle('One Time Attendee Payment')
        if(user?.role === ROLES.USER.ATTENDEE) {
            setAmount(1000);
        } else if (user?.role === ROLES.USER.RESEARCHER) {
            setAmount(1500);
            setTitle('One Time Researcher Proposal Payment')
        }
    },[user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(cardNumber && accountHolder && amount){
            const pay = {
                user: user._id,
                amount
            }
            const res = await dispatch(makePayment(pay))
            if(res.status === 201){
                addToast('Payment Successful.', { appearance: 'success', autoDismiss: true, });
                history.push('/');
            } else {
                setCardNumber('')
                setAccountHolder('')
                addToast('Payment Error', { appearance: 'error', autoDismiss: true, });
            }
        }else {
            handleError();
        }
    }

    const handleError = () => {
        if(!cardNumber){
            setCardNumberError(true)
        }
        if(!accountHolder){
            setAccountHolderError(true)
        }
    }
    return (
        <div className="container">
            <h2 className="text-center">{title}</h2>
            <div className="card rounded border p-5 bg-light w-75 d-flex flex-column mx-auto">
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
