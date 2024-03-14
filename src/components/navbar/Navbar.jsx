import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.container}>
        <Link to='/'>
          <h2>Pomodoro</h2>
        </Link>
        <div className={styles.btnGroup}>
          <Link>Settings</Link>
          <Link to='/login'>Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
