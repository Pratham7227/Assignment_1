import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Card = ({ data, userData, setUserData, index }) => {
  console.log("CARD DATA",data.is_employed);
  
  const [isEdit, setEdit] = useState(false);
  const [editedUser, setEditedUser] = useState({
    first_name: data.first_name,
    last_name: data.last_name,
    username: data.username,
    age: data.age,
    marital_status: data.marital_status,
    is_employed: data.is_employed,
    is_founder: data.is_founder,
  });

  // Delete user
  function deleteUser() {
    const newuser = userData.filter((_, i) => i !== index);
    setUserData(newuser);
    toast.success("Delete Successfully!")
  }

  // Edit user
  function editUser() {
    setEdit(!isEdit);
  }

  // Save edited user details
  function saveUser() {
    const updatedUsers = userData.map((user, i) => {
      if (i === index) {
        return editedUser;  // Update with the edited data
      }
      return user;
    });
    setUserData(updatedUsers);
    setEdit(false); // Close edit mode after saving
  }

  // Handle input changes
  function handleChange(e) {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className='bg-slate-200  m-3 rounded-md w-[450px] flex flex-col gap-2 p-3'>
      <div className='flex justify-between flex-wrap'>
        <p className='font-semibold'>
          FIRST_NAME: 
          {isEdit ? (
            <input
              type='text'
              name="first_name"
              value={editedUser.first_name}
              onChange={handleChange}
              className="border rounded-sm p-1"
            />
          ) : (
            <span className='font-normal italic '> : {data.first_name}</span>
          )}
        </p>
        <p className='font-semibold'>
          LAST_NAME: 
          {isEdit ? (
            <input
              type='text'
              name="last_name"
              value={editedUser.last_name}
              onChange={handleChange}
              className="border rounded-sm p-1"
            />
          ) : (
            <span className='font-normal italic '> : {data.last_name}</span>
          )}
        </p>
      </div>
      <div className='flex justify-between flex-wrap'>
        <p className='font-semibold'>
          USERNAME: 
          {isEdit ? (
            <input
              type='text'
              name="username"
              value={editedUser.username}
              onChange={handleChange}
              className="border rounded-sm p-1"
            />
          ) : (
            <span className='font-normal items-start italic '> : {data.username}</span>
          )}
        </p>
        <p className='font-semibold'>
          AGE: 
          {isEdit ? (
            <input
              type='number'
              name="age"
              value={editedUser.age}
              onChange={handleChange}
              className="border rounded-sm p-1"
            />
          ) : (
            <span className='font-normal italic '> : {data.age}</span>
          )}
        </p>
      </div>
      <p className='font-semibold'>
        MARITAL_STATUS: 
        {isEdit ? (
          <input
            type='text'
            name="marital_status"
            value={editedUser.marital_status}
            onChange={handleChange}
            className="border rounded-sm p-1"
          />
        ) : (
          <span className='font-normal italic '> : {data.marital_status?'Yes':'NO'}</span>
        )}
      </p>
      <p className='font-semibold'>
        IS_EMPLOYED: 
        {isEdit ? (
          <input
            type='text'
            name="is_employed"
            value={editedUser.is_employed}
            onChange={handleChange}
            className="border rounded-sm p-1"
          />
        ) : (
          <span className='font-normal italic'> : {data.is_employed?'Yes':'No'}</span>
        )}
      </p>
      <p className='font-semibold'>
        IS_FOUNDER: 
        {isEdit ? (
          <input
            type='text'
            name="is_founder"
            value={editedUser.is_founder}
            onChange={handleChange}
            className="border rounded-sm p-1"
          />
        ) : (
          <span className='font-normal italic'> : {data.is_founder?'Yes':'NO'}</span>
        )}
      </p>
      {isEdit ? (
        <button
          className='bg-blue-800 p-2 text-white rounded-sm'
          onClick={saveUser}
        >
          SAVE
        </button>
      ) : (
        <button
          className='bg-green-800 p-2 text-white rounded-sm'
          onClick={editUser}
        >
          EDIT
        </button>
      )}
      <button className='bg-red-800 p-2 text-white rounded-sm' onClick={deleteUser}>
        DELETE
      </button>
    </div>
  );
}

export default Card;
