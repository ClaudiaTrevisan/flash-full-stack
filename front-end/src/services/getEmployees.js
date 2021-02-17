import axios from "axios";


export const getEmployees = (value, setState) =>{
    console.log(value)
    axios.get(`http://localhost:3003/employee/${value}`)
    .then((response) =>{
        console.log(response)
        setState(response.data)
    })
    .catch((error) =>{
        alert("Ocorreu um erro. tente novamente mais tarde")
    })
}