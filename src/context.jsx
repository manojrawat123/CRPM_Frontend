import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "./config";
import { toast } from "react-toastify";

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
  const [leadCustomAlert, setLeadCustomAlert] = useState(false);
  const [courseName, setCourseName] = useState();
  const [leads, setLead] = useState();
  const [leadByIdObj, setLeadIdByObj] = useState();
  const [visitSechudule, setVisitSechudule] = useState();
  const [visitHappned, setVisitHappned]  = useState();
  const [demoHappned, setDemoHappned]  = useState();
  const [demoSchedule, setDemoSchedule]  = useState();
  const [registeredStudent, setRegisteredStudent] = useState();
  const [allFeesObj, setAllFeesObj] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showNavbar, setShowNavbar] = useState(false);
  const [leadSubmitButton, setLeadSubmitButton] = useState(false);
  const [leadScource, setLeadScource] = useState();
  const [serviceName, setServiceName] = useState([]);
  const [serviceObj, setServiceObj] = useState();
  const [leadRepresentative , setLeadRepresentative] = useState();
  const [serviceArrById, setServiceArrById] = useState();
  const [leadAnalyticsObj, setLeadAnyticsObj] = useState();
  const [paymentmode, setPaymentMode] = useState([]); 
  const [paymentType, setPaymentType] = useState([]);
  const [register_student_detail_obj, setRegisterStudentDetailObj] = useState();
  const [paymentObj, setPaymentObj] = useState();
  const [refundPaymentObj, setRefundObj] = useState();
  

  useEffect(() => {
    serviceFunc();
  }, []);


  /// Fees Details
  const GetFeesAll = () => {
    axios
      .get(`${API_BASE_URL}/feetracer/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        console.log("Data received:", values.data);
        setAllFeesObj(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /// End Fees Details

  /// ///
  const getResisteredStudentAll = () => {
    axios
      .get(`${API_BASE_URL}/registeredstudent/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        console.log("Data received:", values.data);
        setRegisteredStudent(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /// /// GetLeadVisitSechudle start
  const getLeadFollowUpAll = () => {
    axios
      .get(`${API_BASE_URL}/leadfollowup/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        console.log("Data received:", values.data);
        const fl_visitSchedule = values.data?.filter((element) => {
          return element.LeadStatus == "Visit scheduled";
        });
        const fl_demoSchedule = values.data?.filter((element) => {
          return element.LeadStatus == "Demo scheduled";
        });
        const fl_visitHappned = values.data?.filter((element) => {
          return element.LeadStatus == "Visit Happened";
        });
        const fl_demoHappned = values.data?.filter((element) => {
          return element.LeadStatus == "Demo Happened";
        });
        setVisitSechudule(fl_visitSchedule);
        setDemoSchedule(fl_demoSchedule);
        setDemoHappned(fl_demoHappned);
        setVisitHappned(fl_visitHappned);
        
         // Lead Analitics
         const filter_data = [];
    
         values.data?.forEach((lead, index) => {
           const leadDate = lead?.LeadStatusDate
           const existing_date_object = filter_data?.find(
             (ele) => ele.date.substring(0,10) == leadDate.substring(0,10)
           );


     
           if (existing_date_object) {
             existing_date_object.leadObject.push(lead);
             existing_date_object.myLead.push(lead.LeadID);

           } else {
             filter_data.push({ date: leadDate, leadObject: [lead] , myLead : [lead.LeadID] });
           }
         });
         console.log(filter_data);
         setLeadAnyticsObj(filter_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /// Get Lead Visit Schedule data End
  const getLeadFunc = () => {
    axios
      .get(`${API_BASE_URL}/lead/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        setLead(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const serviceFunc = () => {
    const brandID = localStorage.getItem("brand");
    const apiUrl = `${API_BASE_URL}/services/${brandID}/`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        console.log("Response data:", response.data);
        const data = response.data;
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const profileFunc = async () => {
    const apiUrl = `${API_BASE_URL}/profile/`;
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        console.log("Response data:", response.data);
        setBrandarr(response.data.brand);
        const data = response.data;
        setCompany(data.company);
        setUserId(data.id);
        setUsername(data.name);
        setShowNavbar(true);
      })
      .catch((error) => {
        setShowNavbar(false);
        console.error("Error:", error.message);
        localStorage.removeItem("token");
        navigate("/login");
      });
  };

  const loginFunc = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = e.target.username.value;
    const password = e.target.password.value;

    const loginEndpoint = `${API_BASE_URL}/login/`;
    async function login() {
      try {
        const response = await axios.post(loginEndpoint, {
          email: username,
          password: password,
        });
        const token = response.data.token;
        console.log("Login successfull Token:", token);
        localStorage.setItem("token", token.access);
        console.log(token.access);
        setAuth(true);
        setShowNavbar(true);
        navigate("");
      } catch (error) {
        setShowNavbar(false);
        if (error.response && error.response.status === 400) {
          setInvalidInfo(true);
          setAuth(false);
          setIsLoading(false);
        } else {
          setInternalError(true);
          setAuth(false);
          setIsLoading(false);
        }
        localStorage.removeItem("token");
        navigate("/login");
        console.log("This is Real Error");
        console.error("Login failed:", error.message);
      }
    }
    login();
  };

  // Add Lead Functions

  const addLeadFunc = async (values, { resetForm }) => {
    setLeadSubmitButton(true);
    const leadServFilter = leadScource?.filter((element, index) => {
      return (element.LeadSource = values.leadSource);
    });

    const formData = {
      LeadName: values.studentName,
      LeadPhone: values.phoneNumber,
      LeadEmail: values.studentEmail,
      LeadLocation: values?.location,
      LeadAddress: `${values?.location} ${values?.state} ${values?.country}`,
      LeadSource: values.leadSource,
      LeadScourceId: leadServFilter[0]?.LeadSourceID,
      Profession: "Student",
      PageSource: "Homepage",
      Plateform: "Windows",
      LeadDateTime: `${values.leadDate}T${values.leadTime}:00Z`,
      LeadStatus: "Fresh",
      LeadRepresentativePrimary: userId,
      LeadRepresentativeSecondary: userId,
      LeadCountry: values.country,
      LeadState: values.state,
      LeadAssignmentAlgo: values.classMode,
      LeadNextCallDate: "2023-08-05",
      Brand: brandId,
      Company: company,
      LeadServiceInterested: values.course?.map((servelement, index) => {
        return servelement.value;
      }),
    };
    console.log(formData);

    axios
      .post(`${API_BASE_URL}/lead/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Lead data submitted successfully:", response.data);
        console.log(values?.course);
        toast.success('Lead Added successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
       
        
          leadScourceFunc();
        // resetForm();     
      }).catch((err)=>{
        console.log(err)
        toast.error('Data submission failed', {
          position: toast.POSITION.TOP_CENTER,
        });
        
      }).finally(()=>{
        setLeadSubmitButton(false);
      })
      
  };


  const leadGetById = (myLeadId) => {
    if (myLeadId != undefined) {
      axios
        .get(`${API_BASE_URL}/lead/${myLeadId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Lead data:", response.data);
          setLeadIdByObj(response.data);
          setBrandId(response.data.Brand);
        })
        .catch((error) => {
          console.log(error?.status);
          if (error?.response?.status === 404) {
            setErrorStatus(true);
          }
          console.error("Error submitting lead Data:", error);
        });
    }
  };

  // Lead Scource Function
  const leadScourceFunc = () => {
    const brandID = localStorage.getItem("brand");
    const apiUrl = `${API_BASE_URL}/leadscource/${brandID}/`;
    const token = localStorage.getItem("token");

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Response data:", response.data);
        const data = response.data;
        setLeadScource(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const leadUpdateFunc = (id, leadStatus) => {
    axios
      .put(
        `${API_BASE_URL}/lead/${id}/`,
        {
          LeadStatus: leadStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((el) => {
        console.log("Put Request Response");
      })
      .catch((err) => {
        console.log("An Error Occured!!");
      });
  };

  
  const getServiceNameById = (serviceID)=>{
    if(serviceID == null || undefined){
      return
    }
      axios.get(`${API_BASE_URL}/servicesbyid/${serviceID}/`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((value)=>{
        setServiceName(value.data.ServiceName);
        setServiceObj(value.data);
        console.log(value.data);
        return value.data.ServiceName
      }).catch((err)=>{
        console.log(err)
      })
      
  }


  const getServiceObjectByIds = async (arrOfId)=>{
    const idsString = ids.join(',');
    try {
      const response = await axios.get(`/servicesarrbyId/?ids=${idsString}`, {
          params: {
              ids: arrOfId
          }
      });
      setServiceArrById(response.data);
  } catch (error) {
      console.error('Error fetching service details:', error);
  }

  }

  const userObj = (userid)=>{
    axios.get(`${API_BASE_URL}/user/${userid}/`,{
      headers:
      {
        "Authorization": `Bearer ${token}`
      }
    }).then((value)=>{
      setLeadRepresentative(value.data);
    }).catch((err)=>{
      console.log(err);
    })
  }


  const paymentTypeModeFunc = ()=>{
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(`${API_BASE_URL}/paymentmode/${brandId}/`, config).then((response) => {
      setPaymentMode(response?.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error)
    });

    axios.get(`${API_BASE_URL}/paymenttype/${brandId}/`, config).then((response) => {
      setPaymentType(response?.data[0]);
      console.log(response?.data);
      // setPaymentTypeID(response?.data[0]?.payment_type_id);
    }).catch((error) => {
      console.log(error)
    })
  }


  const registeredStudentDetailFunc = (id)=>{
    axios.get(`${API_BASE_URL}/customerdetails/${id}/`, {
      headers: {"Authorization": `Bearer ${token}`}
    }).then((value)=>{
      console.log(value.data);
      setRegisterStudentDetailObj(value.data);
    }).catch((err)=>{
      console.log(err)
      if (err.response){
        if (err.response.status){
          toast.error('No Data Found', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    })
  }
  

  const paymentFunc =  (id, setLoad) => {
    if (id == undefined){
      return;
    }
    axios.get(`${API_BASE_URL}/payments/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setPaymentObj(res.data);
      console.log(res.data);
      setLoad(true)
    }).catch((errr) => {
      console.log(errr);
    });
  }


  const paymentRefundFeesDetailsFunc = ()=>{
    axios.get(`${API_BASE_URL}/refundfees/`, {
        headers : {
            "Authorization": `Bearer ${token}`
        }
    }).then((response)=>{
        setRefundObj(response.data);
    }).catch((err)=>{
        console.log(err);
    })
}
  // End OF lead Function
  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        brand,
        brandarr,
        username,
        setBrandId,
        internalError,
        isLoading,
        setIsLoading,
        loginFunc,
        invalidInfo,
        profileFunc,
        serviceFunc,
        getResisteredStudentAll,
        number,
        setNumber,
        code,
        setCode,
        country,
        setCountry,
        userId,
        addLeadFunc,
        service,
        setLead,
        setCourseName,
        visitSechudule,
        demoHappned,
        demoSchedule,
        visitHappned,
        getLeadFollowUpAll,
        setService,
        getLeadFunc,
        leads,
        company,
        registeredStudent,
        GetFeesAll,
        allFeesObj,
        leadCustomAlert,
        setLeadCustomAlert,
        showNavbar,
        setShowNavbar,
        leadScourceFunc,
        leadScource,
        setLeadScource,
        leadUpdateFunc,
        leadGetById,
        leadByIdObj,
        leadSubmitButton,
        setLeadSubmitButton,
        getServiceNameById,
        serviceName,
        setServiceName,
        userObj,
        leadRepresentative,
        getServiceObjectByIds,
        serviceArrById,
        leadAnalyticsObj, 
        paymentTypeModeFunc,
        paymentType,
        paymentmode,
        registeredStudentDetailFunc,
        register_student_detail_obj,
        paymentFunc,
        paymentObj,
        paymentRefundFeesDetailsFunc,
        refundPaymentObj
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
