import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

const AddNewUser = ({userData,setUserData}) => {
   const {register,reset,handleSubmit ,formState:{isSubmitSuccessful,errors}}=useForm()
   function handleUserData(data){
    console.log(data); 
    console.log("In");
    console.log(data.is_founder);
    const newArray=[...userData,data];
    setUserData(newArray)
    toast.success("New User Added!")
    
   }
  return (
    <div>
         
          <div className='flex flex-col gap-1 bg-slate-600 justify-center items-center p-2 sm:p-10  w-full'>
            <p className='text-slate-200 text-2xl font-serif'>Add New Data</p>
           <div className='bg-gray-200 w-full sm:h-4/5 flex flex-col p-2 rounded-md gap-1 font-semibold'>

            
            
            <label className='' htmlFor='firstname'>FIRST_NAME</label>
            <input type='text' id='firstname' className='p-1 font-normal rounded-sm' {...register('first_name',{required:true})}/>
            {errors.first_name && <p className='text-red-600'>Enter Firstname please</p>}
          

            <label htmlFor='lastname'>LAST_NAME</label>
            <input type='text' id='lastname'className='p-1 font-normal rounded-sm' {...register('last_name',{required:true})}/>
            {errors.last_name && <p className='text-red-600'>Enter Firstname please</p>}

            <label htmlFor='username'>USERNAME</label>
            <input type='text'id='username'className='p-1 font-normal rounded-sm' {...register("username",{required:true})}/>
            {errors.username && <p className='text-red-600'>Enter Firstname please</p>}

            <label htmlFor='age' >AGE</label>
            <input type='text'id='age' className='p-1 font-normal rounded-sm' {...register("age",{required:true})}/>
            {errors.age && <p className='text-red-600'>Enter Firstname please</p>}
           
           <div className='flex gap-2 flex-wrap'>
           <label>MARITAL_STATUS :</label>
            <div className='flex gap-2 flex-wrap'>
              MARRIED<input type='radio' name='Maritial_status' value={'married'} {...register('marital_status',{required:true})}/>
              UN-MARRIED<input type='radio' name='Maritial_status' value={'unmarried'} {...register('marital_status',{required:true})}/>
            </div>
           </div>
           {errors.marital_status && <p className='text-red-600'>This is required</p>}
             


            <div className='flex gap-2 flex-wrap'>
            <label>IS_EMPLOYED :</label>
            <div className='flex gap-2 flex-wrap'>
            YES<input type='radio' name='is_employed' value={true} {...register('is_employed',{required:true})}/>
            NO<input type='radio' name='is_employed'value={false} {...register('is_employed',{required:true})}/>
            </div>
            </div>
            {errors.is_employed && <p className='text-red-600'>This is required</p>}
            
            <div className='flex gap-2 flex-wrap'>
            <label>IS_FOUNDER :</label>
            <div className='flex gap-2 flex-wrap'>
              YES<input type='radio' name='is_founder'value={true} {...register('is_founder',{required:true})}/>
              NO<input type='radio' name='is_founder'value={false} {...register('is_founder',{required:true})}/>
            </div>
            </div>
            {errors.is_founder && <p className='text-red-600'>This is required</p>}
            <button onClick={handleSubmit(handleUserData)} className='bg-yellow-500 p-1'>Add New User</button>
            </div>
 </div>
          

        
    </div>
  )
}

export default AddNewUser
