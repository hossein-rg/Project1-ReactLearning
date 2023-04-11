import dollarSign from '../../images/icon-dollar.svg';
function AmountTotal(){
    return(
        <>
            <div className='RightBox-Amount'>
                <div className='RightBox-Amount-title'>
                <p>Tip Amount</p>
                <p>/ person</p>
                </div>
                <div className='RightBox-Amount-price'>
                    <img src={dollarSign} alt='dollarSign'/>
                    <p>0.00</p>
                </div>
            </div> 
            <div className='RightBox-Total'>
            <div className='RightBox-Total-title'>
                <p>Total</p>
                <p>/ person</p>
                </div>
                <div className='RightBox-Total-price'>
                    <img src={dollarSign} alt='dollarSign'/>
                    <p>0.00</p>
                </div>
            </div> 
            <button className='reset-amount' type="submit">RESET</button>
        </>
    )
}

export default AmountTotal;