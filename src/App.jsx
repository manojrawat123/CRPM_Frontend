import React, { useContext, useEffect, useState } from 'react'
import PaymentForm from './component/Payment'
import { Route, Routes } from 'react-router-dom'
// import Table from './component/Table'
import MyProcess from './component/MyProcess';
import MyLogin from './login/MyLogin';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import MyDashboard from './component/MyDashboard';
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
import PaymentRefund from './pages/PaymentRefund/PaymentRefund';
import PaymentDetails from './pages/paymentDetails/PaymentDetails';
import PaymentLink from './pages/PaymentLink/PaymentLink';
import PaymentRedirectLink from './pages/PaymentLink/PaymentRedirectLink';
import AddStaffForm from './pages/AddStaffForm/AddStaffForm';
import Batch from './pages/Batch/Batch';
import EditStaffDetail from './pages/AddStaffForm/EditStaffDetails';
import AssignBatches from './pages/AssignBatches/AssignBatches';
import { DataContext, DataProvider } from './context';
import LeadFollowUp from './pages/LeadFollowUp/LeadFollowUp';
import EmailShedule from './pages/emailshedule/EmailShedule';
import MessageShedule from './pages/MessageShedule/MessageShedule';
import SearchPage from './component/Search/Search';
import ViewStaffDetails from './pages/AddStaffForm/ViewStaffDetails';
import LeadStatus from './LeadDetailsPage/leadDetails/LeadStatus';

function App() {
  
  const { showNavbar } = useContext(DataContext)
  


  return (

    <>
      {showNavbar && <MyNavbar />}
    
    <Routes>      
      <Route path='' Component={ProtectedRoutes}>
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

      {/* <Route path='' Component={ProtectedRoutes} >
        <Route path='/table' Component={Table} />
      </Route> */}

      <Route path='' Component={ProtectedRoutes} >
        <Route path='/search' Component={SearchPage} /> 
      </Route>

      <Route path='' Component={ProtectedRoutes} >
        <Route path='/leadfollowup' Component={LeadFollowUp} />
      </Route>

      <Route path='' Component={ProtectedRoutes}>
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

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/refund/:id' Component={PaymentRefund}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/paymentdetails' Component={PaymentDetails}/>
      </Route>
    
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/paymentlink' Component={PaymentLink}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/paymentredirectlink/:id' Component={PaymentRedirectLink}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/addstaff' Component={AddStaffForm}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/editstaff/:id' Component={EditStaffDetail}/>
      </Route>
      
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/batch' Component={Batch}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/assignbatch' Component={AssignBatches}/>
      </Route>

      <Route path='' Component={ProtectedRoutes}>
        <Route path='/emailshedule' Component={EmailShedule}/>
      </Route>
      
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/message' Component={MessageShedule}/>
      </Route>
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/staffdetails' Component={ViewStaffDetails}/>
      </Route>

    
     <Route path='/login' Component={MyLogin} />

    </Routes>
    </>
  )
}

export default App
