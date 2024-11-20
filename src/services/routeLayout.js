import {
    Outlet,
    useNavigate,
    useLocation
} from "react-router-dom";
import "../styles/pagebody.css"
import NavBar from "../components/NavBar";


const RouteLayout = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';

  let bodyContent = (
    <div className="bg-D9D9D9 min-h-screen w-screen flex items-center justify-center">
      
    <main>
    <NavBar />
      <Outlet />
    </main>
      </div>  
    );
    if (isHomeRoute) {
    bodyContent = (
      <div className="flex min-h-screen w-screen justify-center sm:items-center">
        
        <main className="flex-grow overflow-auto">
        
          <Outlet />
        </main>
        <div className="pb-64">

      </div>
      </div>
    )
  }
    return (
      bodyContent
    )
  }
  
  export default RouteLayout