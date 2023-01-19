import styles from './Post.module.css';

const Post = ({ post }) =>{
    const  { createdAt, author: { username, }, title, location, } = post;


    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <span>Listed by: {username}</span>
            <span>Created at: {createdAt}</span>
            <span>Location: {location}</span>

        </div>
    )

}
export default Post;