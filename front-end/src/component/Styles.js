import styled from "styled-components";

export const Select = styled.select`
    border: 1px solid brown;
    width: 250px;
    height: 40px;
    margin-top: 30px;
    text-align: left;
    background-color: #ffffffcf;
`;

export const Button = styled.button`
    margin-left: 8px;
    width: 100px;
    height: 35px;
    font-size: 1rem;
    box-shadow: 1px 1px 4px grey;
    outline: none;
    border-color: cornflowerblue;
    border-radius: 10px;
`;

export const rowStl = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    align: "middle",
    marginTop: "5em"
};

export const tableStl = {
    marginTop: "9em",
    fontSize: "1rem",
    border: "1px solid brown",
    backgroundColor: "#b0e0e669"
};

export const columnStl = {
    border: "1px solid brown"
}