import { useState } from 'react';
import { newPost } from './apis';

const CreatePost = (token, getPosts) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver ] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
 
    async function createNewPost(event) {
        event.preventDefault();
        getPosts();
        if (!title) {
            setErrorMessage("Title required!");
        } else if(!description) {
            setErrorMessage("Please include a description.")
        } else {
            setErrorMessage("");
            const post = {
                post: {
                    title,
                    price,
                    description,
                    willDeliver,
                    location, 
                }
            }
            const response = await newPost(token, post);
            console.log(response);
        }  
        setTitle('');
        setDescription('');
        setPrice('');
        setWillDeliver(false);
        setLocation('');
        setErrorMessage('Post created!')
        
        
    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={createNewPost} >
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />
                <label>Price</label>
                <input 
                    type="text" 
                    value={price} 
                    onChange={(event) => setPrice(event.target.value)}
                />
                <label>Description</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(event) => setDescription(event.target.value)}
                />
                <label>Location</label>
                <input 
                    type="text" 
                    value={location} 
                    onChange={(event) => setLocation(event.target.value)}
                />
                <label>Will you deliver?</label>
                <input
                    type="checkbox"
                    checked={willDeliver}
                    onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)}
                />
                <button type="submit">Submit</button>
                <p>{errorMessage}</p>
            </form>
           
        </div>
    )
}
export default CreatePost;