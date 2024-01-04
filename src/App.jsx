import React, { useContext, useEffect, useState } from 'react'
import PaymentForm from './component/PaymentForm/Payment'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
// import Table from './component/Table'
import MyProcess from './component/MyProcess';
import MyLogin from './login/MyLogin';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import MyDashboard from './component/MyDashboard';
import MyFooter from './component/Fotter';
import MyBrand from './pages/Brand';
import AddFeesDetails from './pages/addpendingFees/addPendingFees';
import Lead from './pages/Lead/Lead';
import VisitSchedule from './pages/SchedulePage/visitSchedule/visitSchedule';
import RegisteredStudent from './pages/RegisteredStudent/RegisteredStudent';
import FeesDetails from './pages/FeesTable/FeesDetails';

import CustomerRegister from './pages/CustomerRegistrationFrom/CustomerRegister';
import PaymentRefund from './pages/PaymentRefund/PaymentRefundForm';


import ConvertedLeadLink from './pages/ConvertedLeadLink/ConvertedLeadLink';
import AddLostSale from './pages/addLostSale/AddLostSale';
import MyNavbar from './component/Navbar/MyNavbar';
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
import LeadAnalytics from './pages/LeadAnalytics/LeadAnalytics';
import ConvertLeadForm from './pages/ConvertLeadForm/ConvertLeadForm';
import ReactLoadingForm from './LoadingForm/ReactLoadingForm';
import FeesDetailsWithGst from './pages/FeesDetailsWithGst/FeesDetailsWithGst';
import BatchDetails from './pages/Batch/BatchDetails/BatchDetails';
import AddBatchForm from './pages/Batch/AddBatchForm';
import PaymentLinkForm from './pages/PaymentLink/PaymentLinkForm';
import LeadDetailsCustom from './pages/LeadDetailsCustomizePage/leadDetailsMain/LeadDetailsCustom';
import VisitHappned from './pages/SchedulePage/VisitHappened/VisitHappned';
import DemoHappned from './pages/SchedulePage/DemoHappened/DemoHappned';
import DemoSchedule from './pages/SchedulePage/DemoSchedule/DemoSchedule';
import StudentDetails from './pages/StudentDetails/StudentDetails';
import PendingFeeGet from './pages/PendingFees/PendingFeesDetails';
import PaymentRefundDetails from './pages/PaymentRefund/PaymentRefundDetails/PaymentRefundDetails';
import StudentDetailsAndUpdateLink from './pages/StudentDetailsUpdate/StudentDetailsAndUpdateLink';
import DownloadInvoiceForm from './pages/DownloadInvoice/InvoiceForm';

function App() {

  const location = useLocation();

  return (

    <>
      {location.pathname == "/login" || location.pathname === "/brand" || location.pathname == "" ?  null : <MyNavbar /> }

      <Routes>
        <Route path='' Component={ProtectedRoutes}>
          <Route index path='' Component={DefaultPage} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route index path='/brand' Component={MyBrand} />
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
          <Route path='/search' Component={SearchPage} />
        </Route>

        <Route path='' Component={ProtectedRoutes} >
          <Route path='/leadfollowup' Component={LeadFollowUp} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/convertlead/:id' Component={ConvertLeadForm} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/leaddetails/:id' Component={LeadDetailsCustom} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/pendingfees' Component={PendingFeeGet} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/addpendingfee/:id' Component={AddFeesDetails} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/lead' Component={Lead} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/visitschedule' Component={VisitSchedule} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/visithappned' Component={VisitHappned} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/demohappned' Component={DemoHappned} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/demoschedule' Component={DemoSchedule} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/registeredstudent' Component={RegisteredStudent} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/feesdetails' Component={FeesDetails} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/customer_registration_form/:id' Component={CustomerRegister} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/customer_update_link' Component={StudentDetailsAndUpdateLink} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/convertedleadlink' Component={ConvertedLeadLink} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/addlostsale/:id' Component={AddLostSale} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/refund/:id' Component={PaymentRefund} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/paymentdetails' Component={PaymentDetails} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/paymentlink' Component={PaymentLink} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/createpaymentlink' Component={PaymentLinkForm} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/paymentredirectlink/:id' Component={PaymentRedirectLink} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/addstaff' Component={AddStaffForm} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/editstaff/:id' Component={EditStaffDetail} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/batch' Component={BatchDetails} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/createnewbatch' Component={AddBatchForm} />
        </Route>
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/assignbatch' Component={AssignBatches} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/emailshedule' Component={EmailShedule} />
        </Route>

        <Route path='' Component={ProtectedRoutes}>
          <Route path='/message' Component={MessageShedule} />
        </Route>
        
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/staffdetails' Component={ViewStaffDetails} />
        </Route>
        
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/leadanalytics' Component={LeadAnalytics} />
        </Route>
        
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/fesstaxdetails' Component={FeesDetailsWithGst} />
        </Route>
        
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/student_details/:id' Component={StudentDetails} />
        </Route>
        
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/refundfees' Component={PaymentRefundDetails} />
        </Route>
        
        <Route path='' Component={ProtectedRoutes}>
          <Route path='/studentinvoice/:id' Component={DownloadInvoiceForm} />
        </Route>


        
        <Route path='/login' Component={MyLogin} />

      </Routes>
    </>
  )
}

export default App



const DefaultPage = ()=>{
  const location = useLocation();
  const navigate = useNavigate()
  
    useEffect(()=>{
      if (location.pathname == ""){
        navigate("/login")
      }
    },[])
  return <></>
}