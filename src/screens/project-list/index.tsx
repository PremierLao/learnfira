import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import React from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import {useHttp} from "../../utils/http";
import styled from "@emotion/styled";
import {Typography} from "antd";
import {useAsync} from "../../utils/use-async";
import {Project} from "./list"
import {useProjects} from "../../utils/project";
import {useUsers} from "../../utils/user";

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debounceParam=useDebounce(param,200)
    const {isLoading,error,data:list}=useProjects(debounceParam)
    const {data:users} = useUsers()

    return (<Container>
        <h1>项目列表</h1>
        <SearchPanel users={users || []} param={param} setParam={setParam}/>
        {error? <Typography.Text type={"danger"}>{error.message}</Typography.Text>:null}
        <List loading={isLoading} users={users || []} dataSource={list || []}/>
    </Container>)
}

const Container= styled.div`
padding: 3.2rem`