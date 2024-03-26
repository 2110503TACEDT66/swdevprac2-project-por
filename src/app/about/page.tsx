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
                <h2 className=' px-5 font-bold'>Embrace the Wilderness</h2>
                <p className='px-5'>
                    Immerse yourself in the untouched beauty of nature as you explore our handpicked selection of campgrounds.
                </p><br/>
                <h2 className=' px-5 font-bold'>Meet the Team</h2>
                <p className='px-5'>
                    Introduce your team members here and highlight their roles and contributions to the platform.
                </p><br/>
                <h2 className=' px-5 font-bold'>Contact Us</h2>
                <p className='px-5'>
                    If you have any questions or need assistance, please don't hesitate to <a href="/contact">contact us</a>.
                </p><br/>
                <h1 className={`px-5 font-bold ${styles["team-heading"]}`}>Our Team</h1>

                <div className={styles["image-container"]}>
                    <div className='px-2'>
                        <div className={styles["banner-container"]}>
                            <img className={styles["banner-image"]} src='/img/img1.jpg' alt='Image 1' />
                            <div className={styles.caption}>Naphat Chartwanchai</div>
                            <div className={styles.caption}>SID : 6633059321</div>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className={styles["banner-container"]}>
                            <img className={styles["banner-image"]} src='image2.jpg' alt='Image 2' />
                            <div className={styles.caption}>Pattaradanai Thanomsittikul</div>
                            <div className={styles.caption}>SID : </div>
                        </div>
                    </div>
                    <div className='px-2'>
                        <div className={styles["banner-container"]}>
                            <img className={styles["banner-image"]} src='image3.jpg' alt='Image 3' />
                            <div className={styles.caption}>Phavarisa Pitavaratorn</div>
                            <div className={styles.caption}>SID : </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
