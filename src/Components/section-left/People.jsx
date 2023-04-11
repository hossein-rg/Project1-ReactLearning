import personSvg from '../../images/icon-person.svg'
function People(){
    function handleClick(ele){
        const inputPeople = document.querySelector('.cantzero2');
        if(Number(ele.target.value) === 0){
            ele.target.style.border = "solid 2px rgba(255, 72, 72, 0.842)";
            inputPeople.style.display="block";
        }
        else{
            ele.target.style.border = "solid 2px rgb(0, 182, 182)"
            inputPeople.style.display="none";
        }
    }

    return(
        <div className="PeopleBox leftSide-box">
            <p className='leftSide-p'>Number of People</p>
            <div className="PeopleBox-input">
            <img src={personSvg} alt="dolar-sign" />
        <input onKeyUp={handleClick} className='remove-spin inputPeople' type="number" name="valueBill" id="valueBill" placeholder="0"/>
        <p class='cantzero2'>can't be zero</p>
            </div>
        </div>
    )
}

export default People;