import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const videoRef = useRef()
  const isMobile = useMediaQuery({maxWidth: 768})
  useGSAP(()=>{
    const heroSplit = new SplitText('.title',{
      type:'chars, words'
    })
    const paragraphSplit = new SplitText('.subtitle',{
      type:'lines'
    })

    heroSplit.chars.forEach((char,index)=>{
      char.classList.add('text-gradient')
    })

    gsap.from(heroSplit.chars,{
      yPercent:100,
      duration:1.8,
      ease:"expo.out",
      stagger:0.06
    })

    gsap.from(paragraphSplit.lines,{
      opacity:0,
      yPercent:100,
      duration:1.8,
      ease:"expo.out",
      stagger:0.06,
      delay:0.8
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true,
      }
    }).to('.right-leaf',{
      y:200
    }, 0)
    .to('.left-leaf',{
      y:-200
    }, 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    let tl = gsap.timeline({
      scrollTrigger: {
       trigger: "video",
       start: startValue,
       end: endValue,
       scrub: true,
       pin: true,
      },
     });
     
     videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
       currentTime: videoRef.current.duration,
      });
     };
  },[])
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf absolute top-40 left-0 z-0' />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf absolute top-0 right-0 z-1' />

        <div className='body'>
            <div className='content'>
              <div className="space-y-5 md:block hidden ">
                <p className='text-gradient'>Crisp, Cool, Refreshing</p>
                <p className='text-gradient subtitle text-yellow'>Crafted with passion <br /> and precision</p>
              </div>

              <div className="view-cocktails">
                <p className="subtitle">
                  Every cocktail on our menu is a blend of premium ingredients , creative, flair and timeless recipes
                  - design to delight your senses.
                </p>
                <a href="#cocktails" className={`relative hover:text-yellow after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow after:transition-all after:duration-300 hover:after:w-full`}>View Cocktails</a>
              </div>
            </div>
        </div>
    </section>

    <div id='video' className='video absolute inset-0'>
      <video ref={videoRef} src="/videos/output.mp4" playsInline muted preload='auto' />
    </div>
    </>
  )
}

export default Hero