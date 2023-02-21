import React,{useState} from 'react'
import {Grid} from '@mui/material'
import '../App.css'

function Register(props) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAdress] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email)
  }
  return (
    <>
    <Grid container lg={12} spacing={2}>
    <Grid item lg={6}>
        <h1>A video is going to be here please be patient</h1>
      </Grid>
      <Grid item lg={6}>
        <div className='RegisterContainer'> 
          <form onSubmit={handleSubmit}>
              <label htmlFor={"name"}>Name </label>
              <input value={name} type={'text'} id={'name'} name={"name"} onChange={(e)=>setName(e.target.value)}/><br/>
              <label htmlFor={"lastName"}>Last Name </label>
              <input value={lastName} type={'text'} id={'lastName'} name={'lastName'} onChange={(e)=>setLastName(e.target.value)}/><br/>
              <label htmlFor={"email"}>email </label>
              <input value={email} type={"email"}  id={"email"} name={"email"} onChange={(e)=>setEmail(e.target.value)}/><br/>
              <label htmlFor={'number'}>Phone Number </label>
              <input value={number} type={'text'} id={'number'} name={'number'} onChange={(e)=>setNumber(e.target.value)}/><br/>
              <label htmlFor={'address'}>Home Address </label>
              <input value={address} type={'text'} id={'address'} name={'address'} onChange={(e)=>setAdress(e.target.value)}/><br/>
              <label htmlFor={"password"}>Password </label>
              <input value={pass} type={"password"}  id={"password"} name={"password"} onChange={(e)=>setPass(e.target.value)}/><br/>
              <label htmlFor={'confirm'}>Confirm Password </label>
              <input value={confirm} type={"password"}  id={"confirm"} name={"confirm"} onChange={(e)=>setConfirm(e.target.value)}/><br/>
              <button type={"submit"}>sign up</button>
          </form>
          <button >you have an account Already? Login here!</button>
        </div>
      </Grid>
    </Grid>
      
    </>
  )
}

export default Register