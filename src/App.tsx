import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Axios from 'axios'
import {useState,useEffect} from 'react';

function App() {
  const [lists, setLists] = useState([]);
  const [load,setLoad] = useState(false);
  const [Name,setName] = useState("");
  const [DOB,setDob] = useState("");
  const [Gender,setGender] = useState("");
  const [Salary,setSalary] = useState(0);
  const [id,setId] = useState("");
  const [Item,setItem] = useState("");
  interface lists
  {
    Name:string;
    "Date of birth":string;
    Gender:string;
    Salary:number;
    _id:string;


  }
  useEffect(() => 
  {
    Axios.get("https://addis-mern-test.herokuapp.com/getUsers").then((res) => 
    {
      setLists(res.data)
      setLoad(true);
    })
  },[])
  const createuser = () => 
  {
    Axios.post("https://addis-mern-test.herokuapp.com/createUser",
      {
        Name:Name,
        "Date of birth":DOB,
        Gender:Gender,
        Salary:Salary
      }).then((response) => 
    {
      alert('user created');
      window.location.reload();
    })
  }

  const deleteId = (id:any) => 
  {

    Axios.delete(`https://addis-mern-test.herokuapp.com/delete/${id}`).then((response) => 
    {
        alert('User Deleted');
        window.location.reload();
    })

  }
  const updateUser = (id:any) => 
  {
    Axios.put('https://addis-mern-test.herokuapp.com/update',
    {
        id:id,
        Name:Item
    })
    window.location.reload();
  }

  return (
    <div className="App">
      <h1 className="title">CRUD APPLICATION TEST PROJECT</h1>
       <div className="container">
          {load && lists.map((items:lists,key) => 
            (
              <div className="data" key={key}>
                <h1 className="name">Name: {items.Name}</h1>
                <h1>Birth Date: {items['Date of birth']}</h1>
                <h1>Gender: {items.Gender}</h1>
                <h1>Salary: {items.Salary}</h1>
                <input type="text" placeholder="Name" onChange={(e) => {setItem(e.target.value)
                  console.log(e.target.value)
                }}></input>
            
                <button onClick={() => updateUser(items._id)}>Update</button>
                <button onClick={() => deleteId(items._id)}>Delete</button>
          </div>
              
              
            ))}


       </div>
       <div className="load">
       {

        !load && <div className="loading">Loading</div>
       }

       </div>
       <br/>
       <h1 className="Insert">Data Insertion</h1>
       <div className="it">
         <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
         <input type="date" onChange={(e) => setDob(e.target.value)}></input>
         <select name="select" onChange={(e) => setGender(e.target.value)}>
            <option value="Male" >Male</option> 
            <option value="Female" >Female</option>
        </select>
        <input type="number" placeholder="Salary" onChange={(e) => setSalary(parseInt(e.target.value))}></input>
        <button onClick={createuser}>Insert Data</button>
       </div>
       
         
         
       
    </div>
  );
}

export default App;
