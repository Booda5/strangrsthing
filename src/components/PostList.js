import styles from './PostList.module.css';
import { getPosts } from './apis';
import { useEffect } from 'react';
import Post from './Post';



const PostList = ({
    token,
    posts,
    setPosts,
}) => {
  useEffect(()=>{
    getPosts()
    .then((posts)=>{
      setPosts(posts)
    })
    .catch((e)=>{
      console.error('user not signed in!')
    })

  }, [token, setPosts]);

    return(
        <div className={styles.conttainer}>
        
          
          
       { 
         posts.map((post)=>{
           return(
           <Post key={post._id} post={post} />
           )
         })
       }
</div>

    )
}
export default PostList;