import {ProjectListScreen} from "./screens/project-list";
import React from "react";
import {useAuth} from "./context/auth-context";
import styled from "@emotion/styled";
import {Row} from "./components/lib"
import {ReactComponent as SoftwareLogo} from './assets/software-logo.svg'
import {Button, Dropdown, Menu} from "antd";


export const AuthenticatedApp=()=>{
    const {logout,user}=useAuth()
    return (<Container>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'}/>
                <h3>项目</h3>
                <h3>用户</h3>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={<Menu>
                    <Menu.Item key={'logout'}>
                        <Button type={"link"}>登出</Button>
                    </Menu.Item>
                </Menu>}>
                    <Button type={"link"} onClick={e => e.preventDefault()}>
                        Hi,{user?.name}
                    </Button>
                </Dropdown>
            </HeaderRight>
        </Header>
        <Main>
        <ProjectListScreen/>
        </Main>
    </Container>)
}

const Container=styled.div`
display: grid;
grid-template-areas: "header" "main";
grid-template-rows: 6rem calc(100vh - 6rem);
height: 100vh;`;

const Header = styled(Row)`
padding: 3.2rem;
box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
z-index: 1`;

const HeaderRight=styled.div``;
const HeaderLeft=styled(Row)``;

const Main=styled.main`
grid-area: main;`;
