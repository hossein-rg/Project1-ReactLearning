function Tip(){
    const btnTip = [{id:0,val:'5%'},{id:1,val:'10%'},{id:2,val:'15%'},{id:3,val:'25%'},{id:4,val:'50%'},{id:5,val:'Custom'}]
    const btns = btnTip.map(function(btnTip){
        if(btnTip.id !== 5)
        return <button key={btnTip.id} className="TipBtn">{btnTip.val}</button>
        else{
            return <input placeholder="Custom" className="InputTipBtn remove-spin" type="number"></input>
        }
    },this);
    function handleClickBtn(element){
        const target = element.target;
        if(target.classList.value === 'TipBtn'){
            const ele = target.parentElement.children;
            for (let item of ele){
                if(item.className === 'TipBtn'){
                    item.style.backgroundColor = "";
                    item.style.color = "";
                }
            }
            target.style.backgroundColor = "rgb(0, 182, 182)";
            target.style.color = "rgb(0, 83, 83)";
            // alert cant be zero
            function checkZero(elem,alert){
                if(elem.value === '0' || elem.value === ''){
                    alert.style.display = "block";
                    elem.style.border = "solid 2px rgba(255, 72, 72, 0.842)";
                }
                else{
                    AlertPeople.style.display="none";
                    people.style.border ="solid 2px rgb(0, 182, 182)"
                }
            }
            const people = document.querySelector('.inputPeople');
            const bill = document.querySelector('.inp-bill');
            const AlertBill = document.querySelector('.cantzero');
            const AlertPeople = document.querySelector('.cantzero2');
            checkZero(people,AlertPeople);
            checkZero(bill,AlertBill);
        }
    }
    return(
        <div className="TipBox leftSide-box">
        <p className='leftSide-p'>Select Tip %</p>
        <div className="TipBtns" onClick={handleClickBtn}>
            {btns}
        </div>
        </div>
    )
}

export default Tip;