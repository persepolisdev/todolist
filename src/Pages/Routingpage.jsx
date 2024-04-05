
import '../App.css'
import About from './Aboutpage.jsx'
import Homepage from './Homepage.jsx'
import Blogs from './Blogs.jsx'
import Aps from './Aps.jsx'
import Single from './Singlepage.jsx'
import { Route, Routes } from "react-router-dom"
function Routingpage() {

return (
<Routes>
<Route path="/" element={<Homepage />} />
<Route path="/about" element={<About />} />
<Route path="/Blogs" element={<Blogs />} />
<Route path="/Aps" element={<Aps />} />
<Route
          path="Single/:id"
          element={<Single />}
        />
    </Routes>

)
}

export default Routingpage
