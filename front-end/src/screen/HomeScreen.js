import React from "react";
import logo from "../assets/logo.png";
import {Image, Layout} from "antd";
import { bcgHome } from "./Style";
import TableEmployees from "../component/TableEmployees";

const HomeScreen = () =>{

    return(
        <Layout style={bcgHome}>
            <TableEmployees/>
            <Image height="130px" src={logo} style={{position: "absolute", bottom: 0, right: 20}} preview={false}/>          
        </Layout>
    );
}
export default HomeScreen;
