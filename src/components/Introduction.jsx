import React from 'react'
import Button from './Button'
//bura shekil importu gelecek
import rightSideImg from '../assets/images/introduction/sagTeref.svg'
import './css/Introduction.css'
import PlayIsaresi from '../assets/images/introduction/play.svg'

import Typed from 'react-typed';


const Introduction = () => {
    return (


        <div className="introduction">
            <div className="introduction row">
                <div className="introduction__left-side col-12 col-md-6 col-lg-7">
                    <h6>Next genaretion platform</h6>
                    <Typed
                    className='type-text'
                        strings={[
                        'Artificial intelligence',
                        'Syber security',
                        'Master Group Ever 131']}
                        typeSpeed={40}
                        backSpeed={50}
                        
                        loop >
                      
                    </Typed>
                    
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className="button-groups">
                        <Button buttonunIcindekiYazi='Get Started'/>
                        <Button buttonunIcindekiYazi='Watch Video' buttonunIcindekiShekil={PlayIsaresi}/>
                    </div>
                </div>

                <div className="introduction__right-side col-12 col-md-6 col-lg-5">
                    <img src={rightSideImg} alt="" className='main-img' />
                </div>
            </div>
        </div>

    )
}

export default Introduction
