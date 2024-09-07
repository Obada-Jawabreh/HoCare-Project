import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="max-w-md mx-auto p-4 bg-background rounded-lg shadow-md">
      <input 
        type="text" 
        placeholder="Type a command or search..." 
        className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-ring" 
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-foreground">Suggestions</h2>
        <ul className="mt-2">
          <li className={`flex items-center p-2 rounded-md ${location.pathname === '/Physiotherapy' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted hover:text-muted-foreground'}`}>
            <span className="mr-2">✨</span>
            <Link to="/Physiotherapy">Physiotherapy</Link>
          </li>
          <li className={`flex items-center p-2 rounded-md ${location.pathname === '/HomeNursing' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted hover:text-muted-foreground'}`}>
            <span className="mr-2">👨‍⚕️</span>
            <Link to="/HomeNursing">Home Nursing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
