import axios from 'axios';
import  { useState, useEffect } from 'react';
const baseUrl = 'https://strangers-things.herokuapp.com/api/';
const chohort_name = '2209-FTB-ET-WEB-PT';




const Profile = ({token, user}) => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
        const fetchUserData = async () =>{
            const userRe = await axios.get(`${baseUrl}${chohort_name}/users/me`,{
                headers: {
                    'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
                }
                
            })
            setUserData(userRe.data.data.messages)
            fetchUserData()
            
            }
          , [token])
        }
    )
        
    return ( <>
        <h1 className='title'>
            Messages
        </h1> 
        <div>
            <h3>Recieved Messages</h3>
            {  
                userData.map(message => user._id !== message.fromUser._id ? <> 
                <div className='messageR'>
                    <div>A message from {message.fromUser.username} about your item '{message.post.title}'</div>
                    <div>Details: {message.content}</div>
                </div>
                </> : '') 
            }
        </div>
        <div>
            <h3>Sent Messages</h3>
            {   
                userData.map(message => user._id === message.fromUser._id ? <> 
                <div className='messageS'>
                    <div>About: '{message.post.title}'</div>
                    <div>Details: {message.content}</div>
                </div>
                </> : '') 
            }
        </div>
    </>
    )

        }
export default Profile;