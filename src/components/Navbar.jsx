import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top',
        // end:'bottom top',
        // scrub:true,
        // markers:true,
      }
    });
    navTween.fromTo('nav',{
      bakcgroundColor:'transparent',
    },{
      bakcgroundColor:'#00000050',
      duration:1,
      ease:'power1.inOut',
      backdropFilter:'blur(10px)',
    })
  })
  return (
    <nav className='px-14'>
      <div className='container mx-auto'>
        <a href="#home" className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar