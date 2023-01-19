import axios from "axios";

const baseUrl = 'https://strangers-things.herokuapp.com/api/';
const chohort_name = '2209-FTB-ET-WEB-PT';


export const getMyUser = async (token) =>{

    try{
        const response  = await axios.get(
            `${baseUrl}${chohort_name}/users/me`,{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
                }

            }
        );
        const me = response.data.data;
        return me;
        

    }catch(e){
        console.log('failed to fetch currently active user')
        console.error(e);
        throw e;

    }
    

};

export const login = async (username, password) =>{
    try{
        const res = await axios.post(`${baseUrl}${chohort_name}/users/login`, {
          user: {
          username,
          password,
          }
        },); 
        const setToken = res.data.data.token;
        return setToken;
    }catch(e){
        console.log('failed to login!')
        console.error(e);
        throw e;

    }
}

export const signup = async (username, password) =>{
    try{
        const res = await axios.post(`${baseUrl}${chohort_name}/users/register`, {
          user: {
          username,
          password,
          }
        },); 
        const setToken = res.data.data.token;
        return setToken;
    }catch(e){
        console.log('failed to signup!')
        console.error(e);
        throw e;

    }
}

export const getPosts = async (token) =>{
    try{
        const resp = await axios.get
        (`${baseUrl}${chohort_name}/posts`,
        {headers:{'content-Type': 'application./json',
         Authorization: `Bearer${token}`
        ,},})
       
        const posts = resp.data.data.posts;
        return posts;
    }catch(e){
        console.log('failed to get posts');
        console.error(e);
        throw e;
    }
}

export  const newPost = async(token) =>{
    try{
        const response = await axios.get(`${baseUrl}${chohort_name}/posts`, {
            
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
        })  
        const newp = response.data.data.posts
        return newp;
    }catch(e){
        console.log('failed to get posts');
        console.error(e);
        throw e;
    }
};

export const removePost = async (postId, token) => {
    try{
    console.log("PostId: ", postId);
    //console.log(`${baseUrl}${chohort_name}${postId}`);
    const response = await axios.get(`${baseUrl}${chohort_name}${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const mpostId = response.data.data.postId;
    return mpostId
}catch(e){
    console.log('failed to remove');
    console.error(e);
    throw e;
}
  };