import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const brandId = localStorage.getItem("brand");
  const [auth, setAuth] = useState(false);
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidInfo, setInvalidInfo] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const [company, setCompany] = useState();
  const [brand, setBrandId] = useState();
  const [service, setService] = useState();
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
  const [brandarr, setBrandarr] = useState();
  const [registerSucessfully, setRegisterSucessfully] = useState(false);
  const [courseName, setCourseName] = useState();
  const [leads, setLead] = useState();
  const [visitSechudule, setVisitSechudule] = useState();
  const [registeredStudent, setRegisteredStudent] = useState();
  const [allFeesObj, setAllFeesObj] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    serviceFunc()
  }, [])

  /// Fees Details 
  const GetFeesAll = () => {
    axios.get(`http://localhost:8000/feetracer/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((values) => {
      console.log("Data received:", values.data);
      setAllFeesObj(values.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  /// End Fees Details

  /// ///
  const getResisteredStudentAll = () => {
    axios.get(`http://localhost:8000/convertedlead/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((values) => {
      console.log("Data received:", values.data);
      setRegisteredStudent(values.data)

    }).catch((err) => {
      console.log(err);
    });
  }



  /// /// GetLeadVisitSechudle start
  const getLeadFollowUpAll = () => {
    axios.get(`http://localhost:8000/leadfollowup/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((values) => {
      console.log("Data received:", values.data);
      const filteredData = values.data?.filter((element) => {
        // Keep elements where LeadEvent is not null
        return element.LeadEvent !== null;
      });
      setVisitSechudule(filteredData)
    }).catch((err) => {
      console.log(err);
    });
  }



  /// Get Lead Visit Schedule data End
  const getLeadFunc = () => {

    axios.get("http://localhost:8000/lead/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((values) => {
      setLead(values.data);
    }).catch((err) => {
      console.log(err);
    })

  }

  const serviceFunc = () => {
    const brandID = localStorage.getItem("brand")
    const apiUrl = `http://localhost:8000/services/${brandID}/`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(apiUrl, config)
      .then((response) => {
        console.log('Response data:', response.data);
        const data = response.data
        setService(response.data)
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }

  const profileFunc = async () => {
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
        setBrandarr(response.data.brand);
        const data = response.data;
        setCompany(data.company);
        setUserId(data.id);
        setUsername(data.name);
        setShowNavbar(true)
      })
      .catch((error) => {
        setShowNavbar(false)
        console.error('Error:', error.message);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }


  const loginFunc = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = e.target.username.value;
    const password = e.target.password.value;

    const loginEndpoint = 'http://localhost:8000/login/';
    async function login() {
      try {
        const response = await axios.post(loginEndpoint, {
          email: username,
          password: password,
        });
        const token = response.data.token;
        console.log('Login successfull Token:', token);
        localStorage.setItem("token", token.access);
        console.log(token.access)
        setAuth(true)
        setShowNavbar(true);
        navigate("")

      } catch (error) {
        setShowNavbar(false)
        if (error.response && error.response.status === 400) {
          setInvalidInfo(true);
          setAuth(false);
          setIsLoading(false);
        }
        else {
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
  }


  // Add Lead Functions 

  const addLeadFunc = async (values, { resetForm }) => {

    const stringValue = values?.course;
    const selectedId = parseInt(stringValue, 10)
    const selectedCourseName = service.find((element) => element.id === selectedId)?.ServiceName || '';

    setCourseName(selectedCourseName);
    console.log(courseName)

    const formData = {
      "LeadName": values.studentName,
      "LeadPhone": values.phoneNumber,
      "LeadEmail": values.studentEmail,
      "LeadLocation": values?.location,
      "LeadAddress": `${values?.location} ${values?.state} ${values?.country}`,
      "LeadSource": values.leadSource,
      "Profession": "Student",
      "PageSource": "Homepage",
      "Plateform": "Windows",
      "LeadDateTime": `${values.leadDate}T${values.leadTime}:00Z`,
      "LeadStatus": "New",
      "LeadRepresentativePrimary": username,
      "LeadRepresentativeSecondary": username,
      "LeadCountry": values.country,
      "LeadState": values.state,
      "LeadAssignmentAlgo": values.classMode,
      "LeadNextCallDate": "2023-08-05",
      "Brand": brandId,
      "Company": company,
      "LeadServiceInterested": values.course,
      "CourseName": selectedCourseName

    };

    axios.post('http://localhost:8000/lead/', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Lead data submitted successfully:', response.data);
        setRegisterSucessfully("success");
        resetForm();
      })
      .catch((error) => {
        console.error('Error submitting lead data:', error);
        setRegisterSucessfully("error");

      });

  }


  // End OF lead Function
  return (
    <DataContext.Provider value={{
      auth, setAuth, brand, brandarr, username, setBrandId, internalError
      , isLoading, setIsLoading, loginFunc, invalidInfo, profileFunc, serviceFunc, getResisteredStudentAll,
      number, setNumber, code, setCode, country, setCountry, userId, addLeadFunc, service,
      setLead, setCourseName, visitSechudule, getLeadFollowUpAll, setService, getLeadFunc, leads, company, registeredStudent, GetFeesAll, allFeesObj,
      registerSucessfully, setRegisterSucessfully, showNavbar, setShowNavbar
    }}>
      {children}
    </DataContext.Provider>
  );
};