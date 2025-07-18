import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function Education() {
    return ( 
         <div className="container p-5 mb-5">
                    <div className="row">
                         <div className='col 6'>
                            <img style={{width:"70%"}} src='media/images/education.svg' alt='Education' />
                         </div>
                        <div className="col 6">
                      <h1 className='mb-3'>Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                         <a href='' className='mx-4' style={{textDecoration:'none'}}>Varsity    <FontAwesomeIcon icon={faLongArrowAltRight} />
        </a>
        <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                         <a href='' className='mx-4' style={{textDecoration:'none'}}>TradingQ&A  <FontAwesomeIcon icon={faLongArrowAltRight} />
        </a>
                        </div>
                        
                        
                    </div>
                </div>

     );
}

export default  Education;
