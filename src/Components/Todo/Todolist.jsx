import Todoli from './Todoli.jsx'

export default function Todolist({todos}){
console.log(todos)
   return(

     <ul className="list-reset">
{ todos.map((todo,index)=><Todoli key={index} todo={todo}/>)}
   
     </ul>
   ) 
}