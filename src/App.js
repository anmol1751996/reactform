
 import { Formik,Form } from 'formik';

 import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'




 

import './App.css';


function App() {
  const [name,setName]=useState("");
  
  const [interest,setInterest]=useState("");
  const [gender,setGender]=useState("");
  const [address,setAddress]=useState("");

  
    const [Counnt, setCounnt] = useState('');
    const options = useMemo(() => countryList().getData(), []);
  
    const changeHandler = (Counnt) => {
      setCounnt(Counnt);
    
    };
  function getFormData(e)
  {
    console.log(name,interest)
    e.preventDefault()
  }
  return (
    <div className="App" display="flex">
     <h1>User Information</h1>
<Formik >

     <Form onSubmit={getFormData}>
      <label>name:</label>
       <input type="text" title="name" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> 
       
       <br /><br />
       
       <div className="address">
         <label for="ad">address:</label>
         <textarea class="form-control" value={address} rows="3" onChange={(e)=>setAddress(e.target.value)}/>
       </div>
       <br /><br />
      <label >Country</label>
       <Select options={options} Counnt={Counnt} onChange={changeHandler} />
       <br /><br />
       <label >Select Gender</label>
       <input type="radio" name={gender} value="male" onChange={(e)=>setGender(e.target.value)} />Male
       <input type="radio" name={gender} value="female" onChange={(e)=>setGender(e.target.value)} />female
       <br /><br />
       <select onChange={(e)=>setInterest(e.target.value)}>
        
         <option>Select Hobbies</option>
         <option>Playing cricket</option>
         <option>watching movies</option>
       </select> <br /><br />
       <select onChange={(e)=>setInterest(e.target.value)}>
         <option>Select Interest</option>
         <option>Bollywood</option>
         <option>Hollywood</option>
       </select> <br /><br />

       <button type="Round" onClick={()=> alert('button click catched')}>Submit</button>
       
       <button >Clear</button>

     </Form>
</Formik>
    </div>
  );
}





export default App;
