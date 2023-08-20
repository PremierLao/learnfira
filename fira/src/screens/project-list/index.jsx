import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import React from "react";
import qs from "qs";
import {cleanObject} from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [users,setUsers]=useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [list,setList]=useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response=>{
            console.log(response)
            if(response.ok){
                setList(await response.json())
            }})
    }, [param]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }})
    }, []);
    console.log(list)
    console.log(users)
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}
