// import './App.css';
import React,{useState} from 'react';
import './styles.css'
import Image from "./../src/images/1.png"
// import * as ReactBoostrap from 'react'
import RiseLoader from "react-spinners/RiseLoader";
// import image from 'C:/Users/Mohit/Desktop/New folder/textutils/images/1.png';
const App=()=>{
  const [users,setUsers]=useState([]);
  // const [isloading,setLoading]=useState(true);
  const [showLoader,setShowLoader]=useState(false);

  const Loader = ()=>{return <div className="loader"><RiseLoader  /></div>};
  const loadUsers=async()=>{
    const response=await fetch("https://reqres.in/api/users");
    const jsonresponse=await response.json();
    
    setShowLoader(false);
    setUsers(jsonresponse.data);
    // console.log(response);

  };
  const ButtonClick=async ()=>{
    setShowLoader(true);
    // await delay(5000);
    setTimeout(() => {      loadUsers(); }, 5000);
    // loadUsers();
  };

  
  console.log("printing outside");
  console.log(loadUsers);
  return(<div className="container-fluid">

      <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand"></a>
      <img src={Image} width="150 px" className="myimg"></img>
      
      <button type="button" className="btn btn-info btn-lg" onClick={ButtonClick}>Get Users</button>

      </nav>
      
     

      
     
         {showLoader ? Loader():(
        
<div className="row container-fluid my-5">
        {users.map(({id,email,first_name,last_name,avatar})=>(
          <div className="col">
          <div className="card mb-3 mycard" key={id}>
          <div className="row g-0">

          <div className="col-md-8">
          <div className="card-body">
          <p className="card-title">ID No:{" "}{id}</p>
          <h5 className="card-title">{first_name}{" "}{last_name}</h5>
          <h5 className="card-title">{email}</h5>

         </div>
         </div>
         <div className="col-md-4">
         <img src={avatar} className="img-fluid rounded-start" alt="..."></img>
         </div>
         </div>
         </div>
         </div>

         ))}</div>) }


         </div>
         );
};


export default App;




