import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
const App = () => {
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>

                    {/* Settings Icon  */}
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button type='button' className='text-3xl 
                            hover:drop-shadow-xl 
                            hover:bg-light-gray text-white'
                                style={{ background: 'tomato', borderRadius: '50%' }}>
                                <FiSettings></FiSettings>
                            </button>

                        </TooltipComponent>
                    </div>

                    {/* Sidebar Hide unhide */}

                    {
                        activeMenu ? (
                            <div className='w-72 fixed sidebar
                            dark:bg-secondary-dark-bg bg-white
                            '>
                                Sidebar
                            </div>
                        ) : (
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                Sidebar w-0
                            </div>
                        )
                    }

                    {/* Navigation bar */}
                    <div >

                    </div>

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;