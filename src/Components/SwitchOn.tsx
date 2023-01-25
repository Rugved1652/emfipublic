import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import eLogoWhite from '../Assets/e-logo-white.svg'
type Props = {}

const SwitchOn = (props: Props) => {
    const [addRomove, setaddRomove] = useState(false)
    const [addAnimated, setaddAnimated] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setaddRomove(true)
        }, 5000);
        if(addAnimated) {
            setTimeout(() => {
                setaddAnimated(false)
            }, 6550);
            setTimeout(() => {
                setaddRomove(false)
            }, 6550);
            setTimeout(() => {
                localStorage.setItem('cookies','true')
            }, 6600);

        
        }
    }, [])
    
  return (
    <div className={`emfi-switched-on option-one ${addAnimated ? 'animated':''} ${addRomove ? 'removeElogo':''}`} id="animation-div">
        <div className="text-logo-main rotate-main">           
            <div className="items">
                <div className="text-title wow slideInLeft e-logo-main" data-wow-duration="0.2s" data-wow-delay="0s">                    
                    <h2 className="e-blue-logo logo-rotate" style={{animationDelay:'0s'}}>
                        <Image src={eLogoWhite} alt="" />
                    </h2>
                    <h2 className="e-white-logo logo-rotate" style={{animationDelay:'0s'}}>
                        <Image  src={eLogoWhite} alt="" />
                    </h2>
                </div>
                <div className="text-title  wow slideInRight customeH2" data-wow-duration="0.2s" data-wow-delay="2s">
                    <span className="block" style={{animationDelay:'2s'}}></span>
                    <h2 className="e-logo-text" style={{animationDelay:'2.5s'}}>Switched On</h2>                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default SwitchOn