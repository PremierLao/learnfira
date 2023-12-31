/** @jsxImportSource @emotion/react */
import {jsx} from "@emotion/react";
import React from "react";
import {Form, Input, Select} from "antd";
import FormItem from "antd/es/form/FormItem";

export interface User{
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
    token:string;
}
interface  SearchPanelProps{
    users:User[],
    param:{
        name:string;
        personId:string;
    },
    setParam:(param:SearchPanelProps['param'])=>void;
}
export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {

    return <Form css={{marginBottom:'2rem'}} layout={'inline'}>
        <FormItem>
            {/*setParam(Object.assign({},param,{name:evt.target.value}))*/}
            <Input placeholder={"项目名"}
                type={"text"} value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })}/>
        </FormItem>
        <FormItem>
            <Select value={param.personId} onChange={value=>setParam({
                ...param,
                personId: value
            })}>
                <Select.Option value={''}>负责人</Select.Option>
                {
                    users.map(user=> <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
                }
            </Select>
        </FormItem>
    </Form>
}