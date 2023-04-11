import dollarSvg from '../../images/icon-dollar.svg'
function Bill(){
    function handleClick(ele){
        const inputBill = document.querySelector('.cantzero');
        if(Number(ele.target.value) === 0){
            ele.target.style.border = "solid 2px rgba(255, 72, 72, 0.842)";
            inputBill.style.display="block";
        }
        else{
            ele.target.style.border = "solid 2px rgb(0, 182, 182)"
            inputBill.style.display="none";
        }
    }
    return(
        <div className='BillBox leftSide-box'>
        <p className='leftSide-p'>Bill</p>
        <div className='BillBox-input'>
        <img src={dollarSvg} alt="dolar-sign" />
        <input onKeyUp={handleClick} className='remove-spin inp-bill' type="number" name="valueBill" id="valueBill" placeholder="0"/>
        <p class='cantzero'>can't be zero</p>
        </div>
        </div>
    )

}

export default Bill;