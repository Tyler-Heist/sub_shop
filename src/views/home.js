import React from 'react';
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div >
            <div className='imgContainer'></div>
            <div className='backgroundImg'>
                <div className='borderWrapper'>
                    <div className='border'>   
                        <h1>Hecky's Sub Shop</h1>
                        <p>A hometown favorite since 1982, Hecky's features 20" (large), 11" (small), and 7" (mini) loaded subs, ranging from cheesesteaks to all veggie. Also offered are hand crafted soups and made-to-order salads with homemade dressings, not to mention our never frozen 100% angus beef hamburgers. Give us a call or stop in. You wont be disappointed!</p>
                        <button className='orderBtn' onClick={(event) => {window.open('https://www.toasttab.com/heckys-sub-shop-315-state-st', '_blank');}}>Order Now</button>
                    </div>
                    <div className='border'>
                        <h1>We offer catering!</h1>
                        <p>Are you looking for a reliable partner for your business or private event? Our restaurant offers party platters that will make sure your guests are well-fed.</p>
                        <Link to='./catering' style={{textDecoration: 'none'}}><button className='orderBtn' >Learn more!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;