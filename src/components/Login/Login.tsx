import React from 'react';

const LoginForm = () => {
    return <form>
        <div>
            <input placeholder={'LOGIN'}/>
        </div>
        <div>
            <input placeholder={'Password'}/>
        </div>
       <div>
           <input type={'checkbox'}/>
       </div>

        <button> Submit</button>
    </form>

}
const Login = (props:any) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}

export default Login


