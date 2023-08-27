import React, {FormEvent} from "react";
import {useAuth} from "../context/auth-context";
import {Form,Input,Button} from 'antd'
import {LongButton} from "./index";


const apiUrl = process.env.REACT_APP_API_URL

export const RegisterScreen=({onError}:{onError:(error:Error)=>void})=>{

    const {register,user}=useAuth()

    const  handleSubmit=async ({cpassword,...values}:{username:string,password:string,cpassword:string})=>{
       if(cpassword !== values.password){
           onError(new Error("请确认两次输入的密码相同"))
           return
       }
        try{
           await register(values)
       }catch (e){
           onError(e as Error)
       }
    }

    return (<Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required:true,message:'请输入用户名'}]}>
                <Input placeholder={'用户名'} type="text" id={'username'}/>
            </Form.Item>
            <Form.Item  name={'password'} rules={[{required:true,message:'请输入密码'}]}>
                <Input placeholder={'密码'} type="password" id={'password'}/>
            </Form.Item>
            <Form.Item  name={'cpassword'} rules={[{required:true,message:'请确认密码'}]}>
                <Input placeholder={'确认密码'} type="password" id={'cpassword'}/>
            </Form.Item>
            <Form.Item>
                <LongButton htmlType={'submit'} type={"primary"}>注册</LongButton>{/*此type专指antd样式*/}
            </Form.Item>
        </Form>
    );
}