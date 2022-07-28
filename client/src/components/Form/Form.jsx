import React from 'react';
import { useForm } from "react-hook-form";
import { Login,Register } from '../../service/authServ';
import './Form.css'

const Form = ({isExist,setIsExist}) => {
  const { 
      register,
      formState: {errors, isValid},
      handleSubmit,
      reset,
    } = useForm({mode: "onBlur"});
    const handleExist = () => {
      if(!isExist) {return 'Account already exist?'} else {return 'No account?'}
    }
    const onRegister = (data) => {
      Register(data.username, data.password)
      alert('successfully registered:' + JSON.stringify(data));
      reset();
    }
    const onLogin = (data) => {
      Login(data.username, data.password);
      alert('successfully Logined:' + JSON.stringify(data));
      reset();
    }
    return (
        <form className='form' action="" onSubmit={handleSubmit(isExist? onLogin : onRegister)}>
            <label>Username</label>
            <input style={errors?.username? {background:'#ffcfcf'}: {background:"white"}} className='input' 
            {...register('username',{
                required: "Username is requied",
                minLength : {
                value: 5,
                message: "Username has to contain at least 5 symbols!"
                },
                maxLength: {
                value: 15,
                message: "Username has to contain at least 15 symbols!"
                }
            })}/>
            <label>Password</label>
            <input style={errors?.password? {background:'#ffcfcf'}: {background:"white"}} className='input' type='password'
            {...register('password',{
            required: "Password is requied",
            minLength : {
                value: 5,
                message: "Password has to contain at least 5 symbols!"
            },
            maxLength: {
                value: 20,
                message: "Password has to contain maximum 20 symbols!"
            }
            })}/>
            <p className='alredyEx'>{handleExist()}<span onClick={() => {setIsExist(!isExist);reset()}} className='link'>Click here</span></p>
            <div className='error' style={{marginTop: '.4em'}}>
                {errors?.password && <p className="error error_password">{errors?.password?.message || "Try again"}</p>}
            </div>
            <div className='error'>
                {errors?.username && <p className="error">{errors?.username?.message || "Try again"}</p>}
            </div>

            <button type="submit" disabled={!isValid} className={isValid?'submit': "submit invalid"}>Submit</button>
        </form>
      );
}
 
export {Form};