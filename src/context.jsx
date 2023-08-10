import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
  const [auth,setAuth ] = useState(false);
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidInfo,setInvalidInfo] = useState(false);
  const [internalError,setInternalError] = useState(false);
  const [company, setCompany] = useState();
  const [brand, setBrandId] = useState()
  const navigate = useNavigate();


  const profileFunc = async()=>{
    const apiUrl = 'http://localhost:8000/profile/';
  const token = localStorage.getItem("token");

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };



axios.get(apiUrl, config)
.then((response) => {
  console.log('Response data:', response.data);
  const data = response.data
  setCompany(data.company)
})
.catch((error) => {
  console.error('Error:', error.message);
  localStorage.removeItem("token");
  navigate("/login")
});
}


  const loginFunc = (e)=>{
    
    e.preventDefault();
    setIsLoading(true);
    const username = e.target.username.value
    const password = e.target.password.value
    const loginEndpoint = 'http://localhost:8000/login/';
async function login() {
  try {
    const response = await axios.post(loginEndpoint, {
      email: username, 
      password: password,
    });
    const token = response.data.token;
    console.log('Login successful. Token:', token);
    localStorage.setItem("token", token.access);
    console.log(token.access)
    setAuth(true)
    navigate("")
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      setInvalidInfo(true);
      setAuth(false);
      setIsLoading(false);
    }
    else{
      setInternalError(true);
      setAuth(false);
      setIsLoading(false);
    }
    localStorage.removeItem("token")
    navigate("/login")
    console.log("This is Real Error");
    console.error('Login failed:', error.message);
  }
}
login();
    console.log({"username":username, "password": password})
    console.log("Form Submitted");
  }


  // Add Lead Functions 

 const addLeadFunc = (values)=>{


    console.log(values)
    const formData = {
      "LeadName": values.studentName,
      "LeadPhone": values.phoneNumber,
      "LeadEmail": values.studentEmail,
      "LeadLocation": "New York",
      "LeadAddress": "123 Main Street",
      "LeadSource": values.leadSource,
      "Profession": "Software Developer",
      "PageSource": "Homepage",
      "Plateform": "Windows",
      "LeadDateTime": `${values.leadDate}T${values.leadTime}:00Z`,
      "LeadStatus": "New",
      "LeadRepresentativePrimary": values.leadRepresentative,
      "LeadRepresentativeSecondary": "Bob",
      "LeadCountry": values.country,
      "LeadState": values.state,
      "LeadAssignmentAlgo": "Round Robin",
      "LeadNextCallDate": "2023-08-05",
      "Brand":1,
      "Company": company,
      "LeadServiceInterested": [1]
  };
    axios.post('http://localhost:8000/lead/', formData)
      .then((response) => {
        console.log('Lead data submitted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error submitting lead data:', error);
        console.log(formData)
      });


 }
 



  // End OF lead Function
    return (
      <DataContext.Provider value={{ auth, setAuth ,brand, setBrandId,internalError,isLoading,setIsLoading, loginFunc, invalidInfo,profileFunc, number, setNumber, code, setCode, country,setCountry, addLeadFunc }}>
        {children}
      </DataContext.Provider>
    );
  };