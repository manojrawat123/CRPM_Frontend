import React from 'react'
import PaymentForm from './component/Payment'
import { Route, Routes } from 'react-router-dom'
import Table from './component/Table'
import MyProcess from './component/MyProcess';
import MyLogin from './login/MyLogin';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import MyDashboard from './component/MyDashboard';
import LeadStatus from './component/leadDetails/LeadStatus';
import MyFooter from './component/Fotter';
import MyBrand from './pages/Brand';
import ConvertLead from './pages/convertlead/ConvertLead';
import ConvertedLeadGet from './pages/ConvertedLead/ConvertedLeadGet';
import AddFeesDetails from './pages/addpendingFees/addPendingFees';
import Lead from './pages/Lead/Lead';
import VisitSchedule from './pages/visitSchedule/visitSchedule';
import RegisteredStudent from './pages/RegisteredStudent/RegisteredStudent';
import FeesDetails from './pages/FeesTable/FeesDetails';
import CustomerRegister from './pages/CustomerRegistrationFrom/CustomerRegister';
import ConvertedLeadLink from './pages/ConvertedLeadLink/ConvertedLeadLink';
import AddLostSale from './pages/addLostSale/AddLostSale';
import MyNavbar from './component/Navbar/MyNavbar';

function App() {

  return (

    <>
    {/* {localStorage.getItem('token') && localStorage.getItem('brand')? <MyNavbar />: <></>} */}
    
    <Routes>      
      <Route path='' Component={ProtectedRoutes} >
        <Route index path='' Component={MyBrand} />
      </Route>
    <Route path='' Component={ProtectedRoutes} >
        <Route path='/process' Component={MyProcess} />
      </Route>
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/dashboard' Component={MyDashboard} />
      </Route>
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/payment/:id' Component={PaymentForm} />
      </Route>
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/table' Component={Table} />
      </Route>
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/convertlead/:id' Component={ConvertLead} />
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/leaddetails/:id' Component={LeadStatus}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/convertedleaddata' Component={ConvertedLeadGet}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/addpendingfee/:id' Component={AddFeesDetails}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/lead' Component={Lead}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/visitsechudule' Component={VisitSchedule}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/registeredstudent' Component={RegisteredStudent}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/feesdetails' Component={FeesDetails}/>
      </Route>
      
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/customer_registration_form/:id' Component={CustomerRegister}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/convertedleadlink' Component={ConvertedLeadLink}/>
      </Route>
      
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/addlostsale/:id' Component={AddLostSale}/>
      </Route>


     <Route path='/login' Component={MyLogin} />

    </Routes>
    </>
  )
}

export default App
