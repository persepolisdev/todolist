import '../App.css'
import Layout from '../Layouts/Layout.jsx'
import Blog from '../Components/Blog.jsx'
import Settodo from '../Components/Todo/Settodo.jsx'
import Todolist from '../Components/Todo/Todolist.jsx'
import { useState } from 'react'

const Homepage = () => {
const[todos,setTodo]=useState([
  {
    title: 'mahnaz afshar raft',
    status : false
  },
  {
    title: 'mohammadreza golzar amad',
    status : false
  },
  {
    title: 'iman safari dargozasht',
    status : false
  }
]);
function fetch(event)
{
if(event.key==='Enter')
{
setTodo([
  ... todos,
  {title : event.target.value,
  status: false }
])

}
}
console.log(setTodo)
return (
  <Layout>
  <div class="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
        <input type="text"  onKeyDown={fetch} placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
 
    </div>
               <Todolist  todos={todos} />
           
            </div>
        </div>
    </div>
  </Layout>
)

}

export default Homepage
