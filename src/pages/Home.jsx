import React from 'react';
import { Navbar, Hero, Section, Promo, Services, Projects, Process, ProcessCard, Footer } from '../componnets';

function Home() {
    return (
        <div>
            <div className='relative flex items-center justify-center bg-secondary'>
                <Hero />
            </div>
            <Section />
            <Promo />
            <Services />
            <Projects />
            <Process />
        </div >
    )
}

export default Home;