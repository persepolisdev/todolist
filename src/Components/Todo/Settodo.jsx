export default function Settodo(){
  
  function fetch(event)
  {
if(event.key==='Enter')
{
  console.log(event.target.value)
  }
}
    return(
      <>
        <div className="relative">
        <input type="text" onKeyDown={fetch} placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
 
    </div>
    </>
    )
}