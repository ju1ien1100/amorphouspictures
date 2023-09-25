import {
    Outlet,
    useNavigate,
    useLocation
} from "react-router-dom";
import "../styles/pagebody.css"



const RouteLayout = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';

  let bodyContent = (
    <div className="bg-D9D9D9 min-h-screen flex items-center justify-center">
    <main>
      <Outlet />
    </main>
  </div>  
    );
    if (isHomeRoute) {
    bodyContent = (
      <div className="animated-gradient min-h-screen flex items-center justify-center">
        <main>
          <Outlet />
        </main>
      </div>
    )
  }
    return (
      bodyContent
    )
  }
  
  export default RouteLayout