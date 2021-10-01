import classes from '../UI/Header.module.css'
function Header({clicked}) {
  return (
    <div className={classes.header}>
        <ul>
            <li>
                <i className="fas fa-bars" onClick={clicked}></i>
            </li>
        </ul>
    </div>
  );
}

export default Header;
