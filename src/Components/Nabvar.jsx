import React from 'react';
import logo from '../assets/Group 1.png';
import currency from '../assets/Currency.png';
import hero from '../assets/image 1.png';
import background from '../assets/background.png';

const Nabvar = ({coin}) => {
    return (
        <div className='container mx-auto px-4'>
         <header>

                {/* // navbar desing */}
                <div className=" navbar bg-base-100 shadow-sm container mx-auto p-5">

                    <div className="flex-none md:flex-1">
                        <a className="btn btn-ghost text-xl">
                            <img src={logo} alt="bpl logo" />
                        </a>
                    </div>


                    <div className=" flex-1 md:flex-none">
                        <ul className="menu menu-horizontal px-1 items-center">
                            <li><a className='text-[#585861] font-semibold'>Home</a></li>
                            <li><a className='text-[#585861] font-semibold'>Fixture</a></li>
                            <li><a className='text-[#585861] font-semibold'>Teams</a></li>
                            <li><a className='text-[#585861] font-semibold'>Schedules</a></li>


                            <li className="border border-1 border-cyan-950 rounded-lg ml-4">
                                <div className="flex items-center gap-2 font-bold">
                                    {coin} Coin
                                    <img src={currency} alt="currency logo" className="w-6 h-6" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
            <main>

                <section className='md:relative mx-auto mt-5 h-[450px] flex flex-col items-center justify-center text-center container'>
                    <div className='w-11/12 mx-auto mt-5 absolute inset-0 -z-10 '>
                        <img className='w-full h-full rounded-2xl object-cover' src={background} alt="background logo combinatin of three color" />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <img className='w-6/12 md:w-3/12' src={hero} alt="cricket logo and text" />
                        <h2 className='font-semibold text-xl md:text-3xl lg:font-bold text-4xl mx-auto text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p className='font-semibold text-xl text-gray-200'>Beyond Boundaries Beyond Limits</p>w

                        <button className='btn bg-[#e7fe29] hover:bg-[#d4e925] font-bold text-md outline-2 outline outline-[#e7f329] px-5 py-4 border-none outline-offset-4 rounded-md'>Claim Free Credit</button>
                    </div>
                </section>

                <section>
                   
                </section>




            </main>
            <footer>

            </footer>
      </div>

    );
};


export default Nabvar;