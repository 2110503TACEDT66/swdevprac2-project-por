import React from 'react';
import styles from './about.module.css'

export default function About() {
    return (
        <main className='p-10'>
            <div className={styles.page}>
                <h1 className='px-5 font-bold text-3xl'>POR Campground Booking</h1><br/>
                <p className='px-5'> Welcome to our campground booking platform!</p>
                <p className='px-5'>
                    Our platform aims to provide users with the best camping experience by offering a wide range of campgrounds
                    to choose from, easy booking processes, and reliable customer support.
                </p><br/>
                <h2 className='px-5 font-bold'>Our Mission</h2>
                <p className='px-5'>
                    Our mission is to connect nature enthusiasts with the perfect camping spots, ensuring memorable experiences
                    in the great outdoors.
                </p><br/>
                <h2 className=' px-5 font-bold'>Meet the Team</h2>
                <p className='px-5'>
                    Introduce your team members here and highlight their roles and contributions to the platform.
                </p><br/>
                <h2 className=' px-5 font-bold'>Contact Us</h2>
                <p className='px-5'>
                    If you have any questions or need assistance, please don't hesitate to <a href="/contact">contact us</a>.
                </p>
            </div>
        </main>
    );
}
