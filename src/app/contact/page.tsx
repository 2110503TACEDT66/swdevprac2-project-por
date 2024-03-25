import React from 'react';
import styles from './contact.module.css'; // Import the CSS module for styling

export default function Contact() {
    return (
        <main className='p-10'> {/* Apply styles using the styles.page class */}
            <div className={styles.page}>
                <h1 className='px-5 font-bold text-3xl'>Contact Us</h1><br/>
                <p className='px-5'>Have questions or need assistance? Reach out to us!</p><br/>
                
                <h2 className='px-5 font-bold'>Our Office</h2>
                <p className='px-5'>123 Campground Ave</p>
                <p className='px-5'>Forest City, CA 12345</p><br/>
                
                <h2 className='px-5 font-bold'>Contact Details</h2>
                <p className='px-5'>Email: info@porcampground.com</p>
                <p className='px-5'>Phone: 02-138-321</p>
                
            </div>
        </main>
    );
}
