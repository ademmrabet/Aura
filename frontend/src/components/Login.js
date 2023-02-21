import React, {useState} from 'react'


function Login(props) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor={"email"}>email</label>
            <input value={email} type={"email"}  id={"email"} name={"email"} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor={"password"}>Password</label>
            <input value={pass} type={"password"}  id={"password"} name={"password"} onChange={(e)=>setPass(e.target.value)}/>
            <button type={"submit"}>Log In</button>
        </form>
        <br/>
        <button OnFormSwicth={()=> props.onFormSwitch('register')}>Don't have an account? register here!</button>
    </div>
    
  )
}

export default Login