import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import {
    Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid,
    Customers, Kanban, Area, Bar, Pie, Financial, ColorMapping, ColorPicker, Editor, Line
} from './pages';
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
                                <Sidebar></Sidebar>
                            </div>
                        ) : (
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                        )
                    }

                    {/* Navigation bar */}
                    <div className={`
                    dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}
                    `}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-bg navbar w-full'>
                            Navbar
                        </div>

                    </div>

                    {/* Define all routes here  */}
                    <div>
                        <Routes>
                            {/* Dashboard  */}
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/ecommerce' element={<Ecommerce />} />

                            {/* Pages  */}
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/employees' element={<Employees />} />
                            <Route path='/customers' element={<Customers />} />

                            {/* Apps  */}
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/editor' element={<Editor />} />
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/color-picker' element={<ColorPicker />} />

                            {/* Charts  */}
                            <Route path='/line' element={<Line />} />
                            <Route path='/area' element={<Area />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/financial' element={<Financial />} />
                            <Route path='/color-mapping' element={<ColorMapping />} />
                            <Route path='/pyramid' element={<Pyramid />} />
                            <Route path='/stacked' element={<Stacked />} />

                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;