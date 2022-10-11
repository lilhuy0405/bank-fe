import {useEffect, useState} from 'react'
import './App.css'
import ListAccount from "./components/ListAccount.jsx";
import AccountDetail from "./components/AccountDetail.jsx";

const allAccountsApiUrl = "http://13.229.201.66:3000"

function App() {
  return (
    <div className="App">
      <h1>Bank</h1>
      <ListAccount/>
      <AccountDetail/>
    </div>
  )
}

export default App
