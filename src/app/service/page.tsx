import React from 'react';
import styles from './service.module.css'

export default function Service() {
    return (
        <main className='p-10'>
            <div className={styles.page}>
                <h1 className='px-5 font-bold text-3xl'>Our Services</h1><br/>
                <p className='px-5' >Explore the services we offer to make your camping experience unforgettable!</p><br/>
                
                <section>
                    <h2 className='px-5 font-bold'>Campground Booking</h2>
                    <p className='px-5'>Discover and book from a wide range of campgrounds across different locations.</p><br/>
                </section>
                
                <section>
                    <h2 className='px-5 font-bold'>Amenities</h2>
                    <p className='px-5'>Explore various amenities available at our campgrounds, such as showers, fire pits, and more.</p><br/>
                </section>
                
                <section>
                    <h2 className='px-5 font-bold'>Activities</h2>
                    <p className='px-5'>Find exciting activities offered at our campgrounds, including hiking trails, fishing spots, and more.</p><br/>
                </section>
                
                <section>
                    <h2 className='px-5 font-bold'>Customer Support</h2>
                    <p className='px-5'>Our dedicated customer support team is available to assist you with any inquiries or issues.</p>
                </section>
            </div>
        </main>
    );
}
