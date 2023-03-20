'./login.css';
import React from 'react'

import { Link } from 'react-router-dom';




export default function AdminLogin() {
    /*const{ setAuth} = useContext(AuthContext);

    const adminRef = useRef();
    const errRef = useRef();

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errMsg, setErrMsg] = useState('');
    const[Success, setSuccess] = useState(false);

    useEffect(()=>{
        adminRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[username,email,password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username,email,password}),
                {
                    headers: {'Content-Type':'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(reponse?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username,email,password,roles,accessToken});
            setUsername('');
            setEmail('');
            setPassword('');
            setSuccess(true);

        }catch (err){
            if(!err?.response){
                setErrMsg('No server response');
            }else if(err.response?.status === 400){
                setErrMsg('Missing username or password');
            }else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            }else{
                setErrMsg('Login fail');
            }
            errRef.current.focus();
        }
        //console.log(username,email,password);
        setUsername('');
        setEmail('');
        setPassword('');
        setSuccess(true);
    }*/


  return (

  <div>
    
    <div className= 'bgimg1 pt-80'></div>
    <div className="login stuff">

        <h1 className="text-center pt-5 ">Admin Login</h1>
        
        <div className="container1 center">
        <form className="needs-validation">
            <div className="form-group was-validated">
                <label className="form-label" for="username">Username</label>
                <input className="form-control" 
                type="text" 
                id="username" 
                //ref={adminRef} 
                //onChange={(e) => setUsername(e.target.value)}
                //value={username}
                required/>
                <div className="invalid-feedback pb-4">
                    Please enter the username
                </div>
            </div>
            
            <div className="form-group was-validated">
                <label className="form-label" for="password">Password</label>
                <input className="form-control" 
                type="password" 
                id="password"
                //onChange={(e) => setPassword(e.target.value)}
                //value={password} 
                required/>
                <div className="invalid-feedback pb-4">
                    Please enter your password
                </div>
            </div>
            <Link className="btn btn-success w-100" type="submit" to="/admin"> SIGN IN</Link>
        </form>
       </div>
    </div>
    </div>
  )
}
