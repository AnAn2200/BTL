import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Services from '../components/Service';
        
const Home = () => {
    var[isOpen, setIsOpen] = useState(false);
    var toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Section />
        <Services />
        <Footer />
    </>
  )
}

export default Home