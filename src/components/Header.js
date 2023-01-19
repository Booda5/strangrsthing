import { Link } from 'react-router-dom'
import styles from './Header.module.css';

const Header = ({ currentUser }) =>{
    return(
        <header className={styles.container}>
            {
            currentUser && <div>
               Hello {currentUser.username}

            </div>
}
            <Link className={styles.links} to='/home'>Home</Link>
            {
                !currentUser && <Link className={styles.links} to='/register'>Register</Link>
            }
            {
                !currentUser && <Link className={styles.links} to='/loging'>LogIn</Link>
}
    {
        currentUser && <Link className={styles.links} to='/posts'>Posts</Link>
    }
    {
        currentUser && <Link to='/signout'>SignOut</Link>
    }

        </header>
    )
}

export default Header;