import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL, { API_ROUTE_URL } from "./config";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { format } from "date-fns";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const brandId = Cookies.get("brand");
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
  // const [userId, setUserId] = useState();
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
  const [dashboardData, setDashboardData] = useState();
  const [navItem, setNavItem] = useState();
  const [brand_cookie_arr, setbrand_cookie_arr] = useState();
  const [recaptcha, setRecaptchaToken] = useState();
  const [filteredLead, setFilterLeadData] = useState([]);
  const [todayCallData, setTodayCallData] = useState();
  const [todayCallFilterData, setTodayCallFilterData] = useState();  
  const [filterLeadAanlist, setFilterLeadAnalist] = useState();
  const [filteredRegisteredStudent, setFilteredRegisterStudent] = useState();
  const [filterPaymentRefundData, setFilterPaymentRefundData] = useState();
  const [paymentAllObj, setpaymentAllObj] = useState();
  const [filterPaymentObj, setpaymentFilterObj] = useState();
  const [filteredVisitSechudule, setFilteredVisitSechudle] = useState([]);
  const [filteredvisitHappned, setFilteredVisitHappned] = useState([]);
  const [filtereddemoSchedule, setFilteredDemoSchedule] = useState([]);
  const [filtereddemoHappned, setFilteredDemoHappned] = useState([]);
  const [batchObj, setBatchObj] = useState();
  const [batchFilterObj, setBatchFilterObj] = useState();
  const [filteredallFeesObj, setFilteredAllFeesObj] = useState([]);
  const [assignBatchObj, setAssignBatchObj] = useState();
  const [filterAssignBatchObj, setFilterAssignBatchObj] = useState();

  const token = Cookies.get("token");
  
  var userId;

  try{
     userId = JSON.parse(Cookies.get('user_data')).user_id

  }
  catch{
    userId = null
  }
  
  const brandPageFunc = ()=>{
    try{

      const brand_cookie = JSON.parse(Cookies.get('user_data')).user_brands
      setbrand_cookie_arr(brand_cookie);
    }
    catch{
      console.log("no Brands Alocated")
    }
}

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


    /// Fees Details
    const getFilterFeesFunc = ( s_startdate, p_endDate) => {

      const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
      const endDate = format(new Date(p_endDate), "yyyy-MM-dd");

      axios
        .get(`${API_BASE_URL}/feetracer/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params : {
            from_date : startDate,
            to_date : endDate
          }
        })
        .then((values) => {
          setFilteredAllFeesObj(values.data);
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
  const getLeadFollowUpAll = (leadstatus) => {

    
    axios
      .get(`${API_BASE_URL}/leadfollowup/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params : {
          follow_up_status: leadstatus,
        }
      })
      .then((values) => {
        if (leadstatus == "Visit scheduled"){
          setVisitSechudule(values.data);
        }
        else if(leadstatus == "Demo scheduled"){
          setDemoSchedule(values.data);
        }
        else if(leadstatus == "Visit Happened"){
          setVisitHappned(values.data);
        }
        else if(leadstatus == "Demo Happened"){
          setDemoHappned(values.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const getLeadFollowUpFilter = (leadstatus, s_startdate, p_endDate) => {

    const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
    const endDate = format(new Date(p_endDate), "yyyy-MM-dd");
    
    axios
      .get(`${API_BASE_URL}/leadfollowup/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params : {
          follow_up_status: leadstatus,
          from_date : startDate,
          to_date : endDate
        }
      })
      .then((values) => {
        
        if (leadstatus == "Visit scheduled"){
          setFilteredVisitSechudle(values.data);
        }
        else if(leadstatus == "Demo scheduled"){
          setFilteredDemoSchedule(values.data);
  
        }
        else if(leadstatus == "Visit Happened"){
          setFilteredVisitHappned(values.data);
        }
        else if(leadstatus == "Demo Happened"){
          setFilteredDemoHappned(values.data);
        }
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
        console.log(values)
        setLead(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterLeadFunc = (s_startdate, p_endDate)=>{
    const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
    const endDate = format(new Date(p_endDate), "yyyy-MM-dd");
    
    axios
    .get(`${API_BASE_URL}/lead/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        from_date:startDate,
        to_date: endDate
      },
    })
    .then((values) => {
      
      setFilterLeadData(values.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }

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
    // const token = localStorage.getItem("token");
    const token = Cookies.get("token");

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
        setCompany(response.data.company);
        setUsername(response.data.name);
        Cookies.set("user_data", JSON.stringify({"user_id": response.data.id, "user_company": response.data.company, "user_name": response.data.name, "user_brands": response.data.brand}))
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

    async function login() {
      try {
        const response = await axios.post(`${API_BASE_URL}/login/`, {
          email: e.target.username.value,
          password: e.target.password.value,
        });
        const token = response.data.token;
        console.log("Login successfull Token:", token);
        localStorage.setItem("token", token.access);
        Cookies.set('token', token.access, { secure: true });
        const stored_token = Cookies.get("token");
        console.log(stored_token);
        setAuth(true);
        setShowNavbar(true);
        (async () => {
          try {
            await profileFunc();
            navigate("/brand");
          } catch (error) {
            // Handle errors if needed
            console.error("Error in main code block:", error);
          }
        })();
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
      LeadRepresentativePrimary: JSON.parse(Cookies.get('user_data')).user_id,
      LeadRepresentativeSecondary: JSON.parse(Cookies.get('user_data')).user_id,
      LeadCountry: values.country,
      LeadState: values.state,
      LeadAssignmentAlgo: values.classMode,
      LeadNextCallDate: "2023-08-05",
      Brand: Cookies.get('brand'),
      Company: JSON.parse(Cookies.get('user_data')).user_company,
      LeadServiceInterested: values.course?.map((servelement, index) => {
        return servelement.value;
      }),
      captcha_token: recaptcha
    };
    console.log(formData);

    axios
      .post(`${API_BASE_URL}/lead/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(values?.course);
        toast.success('Lead Added successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
       
        
        dashboardFunc()
        resetForm();     
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
    axios.get(`${API_BASE_URL}/customer/${id}/`, {
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

const dashboardFunc = ()=>{
  axios.get(`${API_BASE_URL}/dashboard/${brandId}/`, {
   headers: {"Authorization": `Bearer ${token}`}
 }).then((value)=>{
   console.log(value.data);
   setDashboardData(value.data);
   setLeadScource(value.data.lead_scource);

 }).catch((err)=>{
   console.log(err)
   if (err.response){
     if (err.response.status){
       toast.error('No Data Found', {
         position: toast.POSITION.TOP_CENTER,
       });
     }
}
})}

const navFunc = ()=>{
  axios.get(`${API_BASE_URL}/navbar/`, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then((value) => {
    setNavItem(value.data);
})
}


const todayCallFunc = () => {
  axios
    .get(`${API_BASE_URL}/leadnotconverted/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((value) => {
      console.log(value.data);
      setTodayCallData(value.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const todayCallFilterFunc = (s_startdate, p_endDate)=>{
  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
    const endDate = format(new Date(p_endDate), "yyyy-MM-dd");
    
  axios
    .get(`${API_BASE_URL}/leadnotconverted/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     params: {
        from_date:startDate,
        to_date: endDate
      }
    })
    .then((value) => {
      console.log(value.data);
      setTodayCallFilterData(value.data);
    })
    .catch((err) => {
      console.log(err);
    });
}


const leadAnalyticsFunc = () => {
  axios
    .get(`${API_BASE_URL}/leadanalyts/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((values) => {
      console.log(values.data);

      const filter_data = [];
      
      values.data?.forEach((lead, index) => {
        console.log(index);
        const existing_date_object = filter_data?.find(
          (ele) => ele.date?.substring(0,10) == lead?.LeadStatusDate?.substring(0,10)
        );

        if (existing_date_object) {
          existing_date_object.leadObject.push(lead);
          existing_date_object.myLead.push(lead.LeadID);

        } else {
          filter_data.push({ date: lead?.LeadStatusDate, leadObject: [lead] , myLead : [lead.LeadID] });
        }
        setLeadAnyticsObj(filter_data);
      });
  

    })
    .catch((err) => {
      console.log(err);
    });
};

const refundFilterDetailsFunc = (s_startdate, p_endDate)=>{
  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
    const endDate = format(new Date(p_endDate), "yyyy-MM-dd");
  axios.get(`${API_BASE_URL}/refundfees/`, {
    headers : {
        "Authorization": `Bearer ${token}`
    },
    params: {
      from_date : startDate,
      to_date: endDate
    }
}).then((response)=>{
    setRefundObj(response.data);
}).catch((err)=>{
    console.log(err);
})
}


const filterLeadAnalyticsFunc = (s_startdate, p_endDate)=>{
  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
  const endDate = format(new Date(p_endDate), "yyyy-MM-dd");
  axios
    .get(`${API_BASE_URL}/leadanalyts/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {from_date : startDate,
        to_date : endDate
      }
    })
    .then((values) => {
      console.log(values.data);

      const filter_data = [];
      values.data?.forEach((lead, index) => {
        const existing_date_object = filter_data?.find(
          (ele) => ele.date?.substring(0,10) == lead?.LeadStatusDate?.substring(0,10)
        );

        if (existing_date_object) {
          existing_date_object.leadObject.push(lead);
          existing_date_object.myLead.push(lead.LeadID);

        } else {
          filter_data.push({ date: lead?.LeadStatusDate, leadObject: [lead] , myLead : [lead.LeadID] });
        }
        setFilterLeadAnalist(filter_data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}




const getFilterResisteredStudentAll = (s_startdate, p_endDate) => {
  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
  const endDate = format(new Date(p_endDate), "yyyy-MM-dd");
  axios
    .get(`${API_BASE_URL}/registeredstudent/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {from_date : startDate,
        to_date : endDate
      }
    })
    .then((values) => {
      console.log("Data received:", values.data);
      setFilteredRegisterStudent(values.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPaymentAllFunc = ()=>{
  axios
      .get(`${API_BASE_URL}/payments/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        console.log(value.data);
        setpaymentAllObj(value.data);
      });
}


const getPaymentFilterFunc = (s_startdate, p_endDate)=>{
  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
  const endDate = format(new Date(p_endDate), "yyyy-MM-dd");

  axios
      .get(`${API_BASE_URL}/payments/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {from_date : startDate,
        to_date : endDate
      }
      })
      .then((value) => {
        setpaymentFilterObj(value.data);
      });
}



const batchDetails = () => {
  axios.get(`${API_BASE_URL}/batch/`,
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((value) => {
      setBatchObj(value.data);
    }).catch((err) => {
      console.log(err);
    })
}

const filterBatchFunc = (s_startdate, p_endDate)=>{

  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
  const endDate = format(new Date(p_endDate), "yyyy-MM-dd");

  axios.get(`${API_BASE_URL}/batch/`,
  {
    headers: {
      "Authorization": `Bearer ${token}`
    },
    params: {
      from_date : startDate,
      to_date : endDate
    }
  }).then((value) => {
    setBatchFilterObj(value.data);
  }).catch((err) => {
    console.log(err);
  })

}

const batchAssignStuDetailsFunc = () => {

  axios.get(`${API_BASE_URL}/batchforconverted/`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    
  }).then((values) => {
    setAssignBatchObj(values.data);
  }).catch((err)=>{
    console.log(err);
  });
}

const filterBatchAssignStuDetailsFunc = (s_startdate, p_endDate) => {

  const startDate = format(new Date(s_startdate), 'yyyy-MM-dd');
  const endDate = format(new Date(p_endDate), "yyyy-MM-dd");

  axios.get(`${API_BASE_URL}/batchforconverted/`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {
      from_date : startDate,
      to_date : endDate
    }
  }).then((values) => {
    setFilterAssignBatchObj(values.data);
  }).catch((err)=>{
    console.log(err);
  });
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
        refundPaymentObj,
        dashboardFunc,
        dashboardData,
        navFunc,
        navItem,
        brandPageFunc,
        brand_cookie_arr,
        setRecaptchaToken,
        filterLeadFunc,
        filteredLead,
        todayCallFunc,
        todayCallData,
        todayCallFilterFunc,
        todayCallFilterData,
        leadAnalyticsFunc,
        filterLeadAnalyticsFunc,
        filterLeadAanlist,
        getFilterResisteredStudentAll,
        filteredRegisteredStudent,
        refundFilterDetailsFunc,
        filterPaymentRefundData,
        getPaymentAllFunc,
        paymentAllObj,
        getPaymentFilterFunc,
        filterPaymentObj,
        filteredVisitSechudule,
        filteredvisitHappned,
        filtereddemoSchedule,
        filtereddemoHappned,
        getLeadFollowUpFilter,
        batchDetails,
        batchObj,
        filterBatchFunc,
        batchFilterObj,
        getFilterFeesFunc,
        filteredallFeesObj,
        batchAssignStuDetailsFunc,
        filterBatchAssignStuDetailsFunc,
        assignBatchObj,
        filterAssignBatchObj
      }}
    >
      {children}
    </DataContext.Provider>
  );
};


