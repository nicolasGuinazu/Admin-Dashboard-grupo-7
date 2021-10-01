import classes from '../UI/Sidebar.module.css'
import { Link } from "react-router-dom";
function Sidebar({show,hide}) {
  return (
    <div className={show ? classes.navbarshow : classes.navbar}>
        <ul>
            <li>
            <Link to='/' style={{ textDecoration: 'none',color:'white' }} onClick={hide}>Pannel</Link>
            </li>
            <li>
            <Link to='/products-pannel' style={{ textDecoration: 'none' ,color:'white'}} onClick={hide}>Products</Link>
            </li>
        </ul>
    </div>
  );
}

export default Sidebar;