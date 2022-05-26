import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import Axios from 'axios'
import {useState,useEffect} from 'react';
import Wrapper from './components/Wrapper'
import Load from './components/Load';
import Insert from './components/Insert';
import It from './components/It'
import Container from './components/Container';
import NameTitle from './components/NameTitle'
import Loading from './components/Loading';

import AppContain from './components/App';
import Banner from './components/Banner';
import Fields from './components/Fields';
import Input from './components/Input';
import Button from './components/Button';
import Select from './components/Select';
import Main from './components/Main';

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
    <AppContain>
      <Banner>
        <Main>CRUD APPLICATION TEST PROJECT</Main>
      </Banner>
       <Container>
          {load && lists.map((items:lists,key) => 
            (
              <Wrapper key={key}>
                <NameTitle>Name: {items.Name}</NameTitle>
                <Fields>Birth Date: {items['Date of birth']}</Fields>
                <Fields>Gender: {items.Gender}</Fields>
                <Fields>Salary: {items.Salary}</Fields>
                <Input type="text" placeholder="Name" onChange={(e:any) => {setItem(e.target.value)
                  console.log(e.target.value)
                }}></Input>
            
                <Button onClick={() => updateUser(items._id)}>Update</Button>
                <Button onClick={() => deleteId(items._id)}>Delete</Button>
          </Wrapper>
              
              
            ))}


       </Container>
       <Load>
       {

        !load && <Loading>
          
          </Loading>
       }

       </Load>
       
       <Insert>Data Insertion</Insert>
       <It>
         <Input type="text" placeholder="Name" onChange={(e:any) => setName(e.target.value)}></Input>
         <Input type="date" onChange={(e:any) => setDob(e.target.value)}></Input>
         <Select name="select" onChange={(e:any) => setGender(e.target.value)}>
            <option value="Male" >Male</option> 
            <option value="Female" >Female</option>
        </Select>
        <Input type="number" placeholder="Salary" onChange={(e:any) => setSalary(parseInt(e.target.value))}></Input>
        <Button onClick={createuser}>Insert Data</Button>
       </It>
       
         
         
       
    </AppContain>
  );
}

export default App;
