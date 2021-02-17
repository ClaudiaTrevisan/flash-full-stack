import React, { useState } from "react";
import { Col, Row, Table } from 'antd';
import { getEmployees } from "../services/getEmployees";
import { Button, columnStl, rowStl, Select, tableStl } from "./Styles";


const { Column, ColumnGroup } = Table;

const TableEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [state, setState] = useState("")
    
    const handleChange = (event) =>{
        setState(event.target.value);
    };
    const onClick = (event) =>{
        event.preventDefault();
        getEmployees(state, setEmployees);
    };

    return(
        <>
        <Row style={rowStl}>
            <Col>
                <Select onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="Flash" >Flash</option>
                    <option value="Anjo" >Anjo</option>
                </Select>
                <Button onClick={onClick}>Buscar</Button>
            </Col>
            <Table dataSource={employees} pagination={false} style={tableStl}>
                        <ColumnGroup title="Nome">
                            <Column style={columnStl} dataIndex="name" key="name"/>
                            <Column dataIndex="surname" key="surname"/>
                        </ColumnGroup>
                        <Column title="Cpf" dataIndex="cpf" key="cpf"/>
                        <Column title="Email" dataIndex="email" key="email"/>
            </Table>
        </Row>
        </>
    );
}

export default TableEmployees;
