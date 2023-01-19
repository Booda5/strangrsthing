import { signup } from './apis';
import styles from './SignUp.module.css';

const SignUp = ({
username,
password,
setUsername,
setPassword,
setToken,
}) =>{
return (
  <div className={styles.container}>
    <form
        onSubmit={async(e) => {
          
           e.preventDefault();

         
          const stToken = await signup(username, password)
          console.log('register succssfully');
          
          
          setToken(stToken);
        
        }}
        >

          
          <h1>Register below:</h1>
      
      



        <label>username<input value={username} onChange={setUsername} /></label>
        <label>password<input type={'password'} value={password} onChange={setPassword} /></label>
        <button>Sign Up</button>
      </form>
      </div>
      
      
      
)
}




export default SignUp;