import React from "react"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"

const FooterContainer = () => {
  const location = useLocation()
  const isMainPage = location.pathname === "/"

  return <Footer />
}

export default FooterContainer
