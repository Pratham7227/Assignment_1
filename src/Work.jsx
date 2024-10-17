import React, { useEffect, useState } from 'react'
import Card from './Card'
import AddNewUser from './AddNewUser'

const Work = () => {
   const [userData,setUserData]=useState([])
   const url='https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e'
   function deleteUser(index){
      
   }
   async function fetchData() {
      try{
         const response=await fetch(url)
         const data=await response.json()
         setUserData(data)
      }catch(e){
         console.log("Something went wrong");
      }
   }

   useEffect(()=>{
      fetchData()
   },[])
  return (
    <div className='bg-gray-800 p-10'>
      <AddNewUser userData={userData} setUserData={setUserData}/>
       <p className='text-center text-3xl text-slate-200 mt-5 font-serif'>All User Card Details</p>
       <p className='text-center text-3xl text-slate-200 font-serif'>Total User : <span className='text-yellow-600 font-semibold'>{userData.length}</span></p>
    <div className='flex w-full flex-wrap justify-center'>
        {
          userData.length==0?(<p>loading...</p>):(
            userData.map((element,index)=>(<Card data={element} userData={userData} setUserData={setUserData} key={index} index={index}/>))
          )
        }
    </div>
    </div>
  )
}

export default Work
