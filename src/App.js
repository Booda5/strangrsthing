import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import LogIn from './components/LogIn';
import styles from './App.module.css';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import { getMyUser } from './components/apis';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import DeletePost from './components/DeletePost';
import Profile from './components/Profile';

 const storage_key = 'stToken';

const App = () => {
const [username,  setUsername] = useState('');
const [password, setPassword] = useState('');
const [token, setToken] = useState('');
const [posts, setPosts] = useState([]);
const [me, setMe] = useState(null);
const setAndStoredToken = (stToken) =>{
  localStorage.setItem(storage_key, stToken);
  setToken(stToken);
}

useEffect(()=>{
const keptToken = localStorage.getItem(storage_key)
setToken(keptToken);
},[]);

useEffect(()=> {
  if(token){
getMyUser(token)   
.then((me) => {
  setMe(me)

})
.catch((e)=>{
  throw new Error('failed to fetch me');
})
  } 

}, [token])


const setValue = (cb) => {
  return (e) =>{
    cb(e.target.value);
  };
};

return(
  <div>
    <Header
    currentUser={me}
     />

  
    {<main className={styles.main}>
      
      <Switch>
        <Route excat path={'/home'}>
          <h1>Welcom to Stranger's things!</h1>
          
        </Route>
        <Route exact path={'/register'}>
        <SignUp 
       username={username}
       password={password}
       setUsername={setValue(setUsername)}
       setPassword={setValue(setPassword)}
       setToken={setAndStoredToken}
        />

        </Route>
        
        <Route exact path={'/login'}>
          <LogIn username={username}
       password={password}
       setUsername={setValue(setUsername)}
       setPassword={setValue(setPassword)}
       setToken={setAndStoredToken}/>

        </Route>
        
         <Route exact path={'/posts'}>
          <PostList token={token} posts={posts} setPosts={setPosts} />
        </Route> 
        
        <Route>
          <NotFound />

        </Route>
        <Route excat path={'./createpost'}>
          <CreatePost />

        </Route>
        <Route exact path={'./myprofile'}>
          <Profile token={token}/>
          </Route>

          <Route excat path={'./delete'}>
            <DeletePost posts={posts} setPosts={setPosts} postId={posts}/>
          </Route>
        
          <Post post={posts}/>
        
      </Switch>

    </main>}
  </div>
)



// if(!token){
//   return (
//     <div className="App">
       
//     </div>
//   );
//       }
//       return(
//         <div className={'app'}>
//           <PostList 
//           token={token}
//           posts={posts}
//           setPosts={setPosts}
//           />
         
//         </div>
//       )
}

export default App;
