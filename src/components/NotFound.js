import styles from './NotFound.module.css'
const NotFound = () =>  {
    return(
        <div className={styles.container}>
            <h3>Not Found!</h3>
            <img className={styles.img}  src={'https://media.tenor.com/DPEfCqnChk0AAAAi/loading-slow-net.gif'} alt={'/'}/>


        </div>
    )

}

export default NotFound;