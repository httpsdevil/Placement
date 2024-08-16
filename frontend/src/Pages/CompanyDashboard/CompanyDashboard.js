import React, { useEffect } from 'react'
import HeaderSecond from '../../Components/HeaderSecond/HeaderSecond'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'

const CompanyDashboard = () => {
  // useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const companyData = await axios("http://localhost:4000/findCompany")
        console.log("see this :", companyData.data)
      } catch (error) {
        console.log(`error hai : ${error}`)
      }
    }
  // }, [])

  return (
    <div>
      <HeaderSecond/>
      Company Dashboard
      <button onClick={fetchData}>click me</button>
      <Footer/>
    </div>
  )
}

export default CompanyDashboard
