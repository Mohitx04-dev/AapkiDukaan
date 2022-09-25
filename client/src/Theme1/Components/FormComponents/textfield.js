import React from 'react'

function Textfield(props) {
    return (
        <div className="">
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          {props.label}
        </label>
        <div className="mt-1 flex flex-row rounded-md shadow-sm">
          <input
            type="text"
            name={props.name}
            id={props.id}
            className={" w-full sm:text-sm rounded-md " + props.Style}
            placeholder={props.value}
            onChange={(e)=>{
                props.setValue(e.target.value)
            }}
          />
          {/* <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div> */}
        </div>
      </div>
    )
}

export default Textfield
