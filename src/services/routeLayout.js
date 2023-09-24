import {
    Outlet,
    useNavigate,
} from "react-router-dom";
import "../styles/pagebody.css"

const RouteLayout = () => {
    return (
      <div className="animated-gradient min-h-screen flex items-center justify-center">
        <main>
          <Outlet />
        </main>
      </div>
    )
  }
  
  export default RouteLayout