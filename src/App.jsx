import React from 'react'
import PaymentForm from './component/Payment'
import { Route, Routes } from 'react-router-dom'
import Table from './component/Table'
import MyProcess from './component/MyProcess';
import MyLogin from './login/MyLogin';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import MyDashboard from './component/MyDashboard';
import LeadStatus from './component/leadDetails/LeadStatus';

function App() {

  return (
    <>
    <Routes>
    <Route path='' Component={ProtectedRoutes} >
        <Route path='' Component={MyProcess} />
      </Route>
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/dashboard' Component={MyDashboard} />
      </Route>
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/payment' Component={PaymentForm} />
      </Route>
      
      <Route path='' Component={ProtectedRoutes} >
        <Route path='/table' Component={Table} />
      </Route>
      
      <Route path='' Component={ProtectedRoutes}>
        <Route path='/leaddetails/:id' Component={LeadStatus}/>
      </Route>
      

      <Route path='/login' Component={MyLogin} />

    </Routes>

    
    </>
  )
}

export default App
