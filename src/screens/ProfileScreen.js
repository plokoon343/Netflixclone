import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
function ProfileScreen() {
    const user = useSelector(selectUser);
    // const plans =[
    //   "Basic",
    //   "Premium"
    // ]
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
            <img

             src='https://th.bing.com/th/id/OIP.i2HBuWmNU78kbh4kUkDr7gAAAA?pid=ImgDet&rs=1' alt=''/>
        <div className='profileScreen_details'>
            <h2>
            {user.email}
            </h2>
            {/* <p>Current PLan 
            {
              Math.floor(
                Math.random() * plans.length
              )
            }
            </p>
            <p>Expiry Date:
            <span>{new Date().getFullYear() + 1}</span> 
            </p> */}
            <div className='.profileScreen_plans'>

                <button
                onClick={()=> auth.signOut()}
                 className='profileScreen_signOut'>
                    Sign Out
                </button>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
