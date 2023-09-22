import {
    Outlet,
    useNavigate,
} from "react-router-dom";

const RouteLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
    )
  }
  
  export default RouteLayout