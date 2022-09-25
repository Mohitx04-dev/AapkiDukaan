import {React} from 'react'
import CatMenuV from '../CategoryMenu/vertical'
import 'rc-slider/assets/index.css';

function SideElements(props) {
 
    return (
        <div>
        <CatMenuV title="Categories" />
        {/* <div className="mt-10">
        <h1 className="text-xl mb-5 text-left">Filter by Price Range</h1>
        <Range min={0} max={100000}  tipFormatter={value => `${value}%`} value={value} onChange={(value)=>{
            if(value[0] < value[1])
            props.setStartV(value[0])
            props.setEndV(value[1])
        }} />      
        <div className="flex flex-row text-left mt-5">
        <Textfield label="Start" value={props.StartV} setValue={props.setStartV} />
        <Textfield label="End" value={props.EndV} setValue={props.setEndV}/>
        </div>
        <button
                type="submit"
                className="bg-theme text-w  mt-5 float-right py-2 px-4 border border-transparent text-sm font-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > Apply
              </button>
        </div> */}
        </div>
    )
}

export default SideElements
