import '../css/style.css';
import Top from './top/Top';

// import left side
import Bill from './section-left/Bill';
import Tip from './section-left/Tip';
import People from './section-left/People';
// import right side
import AmountTotal from './section-right/AmountTotal';
function App(){
    return(
        <div className='body'>
        <div className='top'>
            <Top />
        </div>
        <div className='section'>
        <div className='section-left'>
                <Bill />
                <Tip />
                <People />
            </div>
            <div className='section-right'>
                <AmountTotal />
            </div>
        </div>
        </div>
    )
}

export default App;