import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                   <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                   <h2 className='fs-4'>Customer-First always</h2>
                   <p className='text-muted'>That's why 1.4+ crore Customer trust Zerodha with their $3.5 crore lakh crore worth of equity investments </p>
                   
                   <h2 className='fs-4'>No spam or gimmics</h2>
                   
                   <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>

                   <h2 className='fs-4'>The Zeerodha Universe</h2>
                   
                   <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>

                   <h2 className='fs-4'>Do better with money$</h2>
                 
                   <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>
                </div>
                <div className='col-6 p-5'>
                   <img src='media\images\ecosystem.png' style={{width : '95%'}}></img>
                   <div className='text-center'> 
                    <a href='#' className='mx-5' style={{textDecoration:'none'}}>Explore our Products  <FontAwesomeIcon icon={faLongArrowAltRight} />
</a>
                    <a href='https://kite.zerodha.com/' className='mx-4' style={{textDecoration:'none'}}>Try Kite  <FontAwesomeIcon icon={faLongArrowAltRight} />
</a>
                   </div>
                </div>

            </div>
        </div>

     );
}

export default  Stats;
