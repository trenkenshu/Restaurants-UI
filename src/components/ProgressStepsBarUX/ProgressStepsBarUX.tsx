import React from 'react';

const ProgressStepsBarUX = () => {
    const w100 = { width: '100%' };
    const w20 = { width: '20%' };
    const w0 = { width: '0%' };
    const accomplished = false;
    return (
        <p>test</p>
        // 1 вариант
        // <>
        //     <div className='w-full mx-auto my-40'>
        //         <div className='bg-gray-200 h-1 flex items-center justify-between'>
        //             <div className='w-1/3 bg-corall h-1 flex items-center'>
        //                 <div className='bg-corall h-6 w-6 rounded-full shadow flex items-center justify-center'>
        //                     <svg
        //                         xmlns='http://www.w3.org/2000/svg'
        //                         className='icon icon-tabler icon-tabler-check'
        //                         width={18}
        //                         height={18}
        //                         viewBox='0 0 24 24'
        //                         strokeWidth='1.5'
        //                         stroke='#FFFFFF'
        //                         fill='none'
        //                         strokeLinecap='round'
        //                         strokeLinejoin='round'
        //                     >
        //                         <path stroke='none' d='M0 0h24v24H0z' />
        //                         <path d='M5 12l5 5l10 -10' />
        //                     </svg>
        //                 </div>
        //             </div>
        //             <div className='w-1/3 flex justify-between bg-corall h-1 items-center relative'>
        //                 <div className='absolute right-0 -mr-2'>
        //                     <div className='relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12'>
        //                         <svg
        //                             className='absolute top-0 -mt-1 w-full right-0 left-0'
        //                             width='16px'
        //                             height='8px'
        //                             viewBox='0 0 16 8'
        //                             version='1.1'
        //                             xmlns='http://www.w3.org/2000/svg'
        //                         >
        //                             <g id='Page-1' stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
        //                                 <g
        //                                     id='Progress-Bars'
        //                                     transform='translate(-322.000000, -198.000000)'
        //                                     fill='#FFFFFF'
        //                                 >
        //                                     <g id='Group-4' transform='translate(310.000000, 198.000000)'>
        //                                         <polygon id='Triangle' points='20 0 28 8 12 8' />
        //                                     </g>
        //                                 </g>
        //                             </g>
        //                         </svg>
        //                         <p className='text-corall text-xs font-bold'>Step 3: Analyzing</p>
        //                     </div>
        //                 </div>
        //                 <div className='bg-corall h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2'>
        //                     <svg
        //                         xmlns='http://www.w3.org/2000/svg'
        //                         className='icon icon-tabler icon-tabler-check'
        //                         width={18}
        //                         height={18}
        //                         viewBox='0 0 24 24'
        //                         strokeWidth='1.5'
        //                         stroke='#FFFFFF'
        //                         fill='none'
        //                         strokeLinecap='round'
        //                         strokeLinejoin='round'
        //                     >
        //                         <path stroke='none' d='M0 0h24v24H0z' />
        //                         <path d='M5 12l5 5l10 -10' />
        //                     </svg>
        //                 </div>
        //                 <div className='bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative'>
        //                     <div className='h-3 w-3 bg-corall rounded-full' />
        //                 </div>
        //             </div>
        //             <div className='w-1/3 flex justify-end'>
        //                 <div className='bg-white h-6 w-6 rounded-full shadow' />
        //             </div>
        //         </div>
        //     </div>
        // </>

        // 2 вариант
        // <div className='max-w-xl mx-auto my-4 border-b-2 pb-4'>
        //     <div className='flex pb-3'>
        //         <div className='flex-1'></div>

        //         <div className='flex-1'>
        //             <div className='w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center'>
        //                 <span className='text-white text-center w-full'>
        //                     <i className='fa fa-check w-full fill-current white'></i>
        //                 </span>
        //             </div>
        //         </div>

        //         <div className='w-1/6 align-center items-center align-middle content-center flex'>
        //             <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
        //                 <div
        //                     className='bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded '
        //                     style={w100}
        //                 ></div>
        //             </div>
        //         </div>

        //         <div className='flex-1'>
        //             <div className='w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center'>
        //                 <span className='text-white text-center w-full'>
        //                     <i className='fa fa-check w-full fill-current white'></i>
        //                 </span>
        //             </div>
        //         </div>

        //         <div className='w-1/6 align-center items-center align-middle content-center flex'>
        //             <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
        //                 <div
        //                     className='bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded '
        //                     style={w20}
        //                 ></div>
        //             </div>
        //         </div>

        //         <div className='flex-1'>
        //             <div className='w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center'>
        //                 <span className='text-grey-darker text-center w-full'>3</span>
        //             </div>
        //         </div>

        //         <div className='w-1/6 align-center items-center align-middle content-center flex'>
        //             <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
        //                 <div
        //                     className='bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded '
        //                     style={w0}
        //                 ></div>
        //             </div>
        //         </div>

        //         <div className='flex-1'>
        //             <div className='w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center'>
        //                 <span className='text-grey-darker text-center w-full'>4</span>
        //             </div>
        //         </div>

        //         <div className='flex-1'></div>
        //     </div>

        //     <div className='flex text-xs content-center text-center'>
        //         <div className='w-1/4'>Invitation received</div>
        //         <div className='w-1/4'>Personal details</div>
        //         <div className='w-1/4'>Application details</div>
        //         <div className='w-1/4'>Confirmation</div>
        //     </div>
        // </div>

        // 3 вариант

        // <ul className='stepper my-60' data-mdb-stepper='stepper'>
        //     <li className='stepper-step stepper-active'>
        //         <div className='stepper-head'>
        //             <span className='stepper-head-icon'> 1 </span>
        //             <span className='stepper-head-text'> step1 </span>
        //         </div>
        //         <div className='stepper-content'>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        //             et dolore magna aliqua.
        //         </div>
        //     </li>
        //     <li className='stepper-step'>
        //         <div className='stepper-head'>
        //             <span className='stepper-head-icon'> 2 </span>
        //             <span className='stepper-head-text'> step2 </span>
        //         </div>
        //         <div className='stepper-content'>
        //             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        //             consequat.
        //         </div>
        //     </li>
        //     <li className='stepper-step'>
        //         <div className='stepper-head'>
        //             <span className='stepper-head-icon'> 3 </span>
        //             <span className='stepper-head-text'> step3 </span>
        //         </div>
        //         <div className='stepper-content'>
        //             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //             pariatur.
        //         </div>
        //     </li>
        //     <li className='stepper-step'>
        //         <div className='stepper-head'>
        //             <span className='stepper-head-icon'> 4 </span>
        //             <span className='stepper-head-text'> step4 </span>
        //         </div>
        //         <div className='stepper-content'>
        //             Duis4554154424 aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        //             nulla pariatur.
        //         </div>
        //     </li>
        // </ul>

        // 4 вариант

        // <ProgressBar percent={75} filledBackground='linear-gradient(to right, #fefb72, #f0bb31)'>
        //     <Step transition='scale'>
        //         {({ accomplished }) => (
        //             <img
        //                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
        //                 width='30'
        //                 src='https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851'
        //             />
        //         )}
        //     </Step>
        //     <Step transition='scale'>
        //         {({ accomplished }) => (
        //             <img
        //                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
        //                 width='30'
        //                 src='https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508'
        //             />
        //         )}
        //     </Step>
        //     <Step transition='scale'>
        //         {({ accomplished }) => (
        //             <img
        //                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
        //                 width='30'
        //                 src='https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png'
        //             />
        //         )}
        //     </Step>
        // </ProgressBar>
    );
};

export default ProgressStepsBarUX;
