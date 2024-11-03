import React from 'react'
import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import About from './components/About/page'
import Work from './components/Work/page'
import Projects from './components/Projects/page'
import ContactForm from './components/Contact/page'
import Footer from './components/Footer/page'

const page = () => {
  return (
<>
<Navbar/>
<Hero/>
<Work/>
<About/>
<Projects/>
<ContactForm/>
<Footer/>
</>

)
}

export default page

