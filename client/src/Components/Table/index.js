

export function UnivTable (props) {
  if(props.Responses) {
    
    if (props.Responses.length>0) {
      let Headers = Object.keys(props.Responses[0])
      return (
        <table class="table-auto border-collapse ">
        <thead className="bg-darkGrey text-white">
          <tr className="">
              {Headers.map(th => {
                  return (
                      <th className="p-3" key={th}>{th}</th>
                  )
              })}
              {   props.Delete ? <td>Delete</td> : null}
          </tr>
        </thead>
        <tbody>
          {
            props.Responses.map(th => {
              return (
                <tr className="m-3" key={th}>   
                {Headers.map(function(key) {
                  let v = th[key]
                  return (
                    <td className="p-3" key={v}>{v}</td>
                  )
                })}
                {
                  props.Delete ? <button onClick={(e)=>{
                    e.preventDefault()
                    props.Delete(th)
                  }} > <td className="p-3">Delete</td> </button> : null
                }
                </tr>
                )})
          }
          
        </tbody>
      </table>
      ) 
    }
   else {
     return (
     <>
     <table class="table-auto border-collapse ">
      <th>
        Nothing here as of Now
      </th>
     </table>
     </>
     )
   }
  
  }
 else {
    return (
      <div>
        No Data
      </div>
    )
 }
}

export default UnivTable