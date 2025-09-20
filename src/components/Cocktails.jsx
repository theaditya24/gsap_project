import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

  useGSAP(()=>{
    const parallaxTime = gsap.timeline({
      scrollTrigger:{
        trigger:'#cocktails',
        start:'top 30%',
        end:'bottom 80%',
        scrub:true,
      }
    })
    parallaxTime.from('.c-left-leaf',{
      x:-100,
      y:100
    }).from('.c-right-leaf',{
      x:100,
      y:100
    })
  })
  return (
    <section id='cocktails' className='noisy'>
      <img src="/images/cocktail-left-leaf.png" id='c-left-leaf' alt="left-leaf" className='left-leaf  z-1' />
      <img src="/images/cocktail-right-leaf.png" id='c-right-leaf' alt="right-leaf" className='right-leaf  z-1' />

      <div className="list">
        <div className="popular px-10">
          <h2>Most Popular Cocktails</h2>
          <ul>
            {cocktailLists.map(({name, detail, price, country}) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>{detail} | {country}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved px-10">
          <h2>Most Loved Cocktails</h2>
          <ul>
            {mockTailLists.map(({name, detail, price, country}) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>{detail} | {country}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
      </div>
    </section>
  )
}

export default Cocktails