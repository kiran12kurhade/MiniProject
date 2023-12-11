import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import kiran from './kk.png';
import Mayur from './mp.png'
import Prasad from './pm.png'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Mayur} />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"Switching to this health insurance provider was a game-changer! The coverage is comprehensive, and the claim process is seamless. I feel confident knowing my health is in good hands.".</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mayur Patil</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Smart Person</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={kiran} />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">"I can't thank your team enough for the prompt and caring service. From routine check-ups to unexpected emergencies, the support I've received has been exceptional. This health insurance is truly a lifesaver!".</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kiran Kurhade</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Cdac Student</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Prasad} />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"As a satisfied customer, I highly recommend this health insurance company. The plans are flexible, the premiums are reasonable, and the customer service is top-notch.".</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Prasad Mali</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Future CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial