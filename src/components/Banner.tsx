'use client'
import { useState,useEffect } from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner() {
    const covers = ['/img/cover4.jpg', '/img/cover5.jpg', '/img/cover6.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % covers.length);
        }, 6000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className={styles.banner}>
            <div className={styles.imageWrapper}>
                {covers.map((cover, idx) => (
                    <Image
                        key={idx}
                        src={cover}
                        alt='cover'
                        fill={true}
                        className={styles.image}
                        style={{ opacity: idx === index ? 1 : 0 }} // Show only the current image
                    />
                ))}
            </div>
            <div className={`${styles.bannerText} color-white`}>
                <h1 className='text-6xl font-medium'>POR CAMPGROUND</h1>
                <h3 className='text-xl font-medium'>the biggest campground booking platform</h3>
                <h3 className='text-xl font-italic'>having your best experience with us</h3>
            </div>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col items-center'> {/* Wrapper for first button and text */}
                    <button
                        className={`${styles.circularButton} bg-yellow-600 m-14 my-3 rounded-full z-30 hover:bg-yellow-700`}
                        onClick={(e) => { e.stopPropagation(); router.push('/camp'); }}
                    >
                        <img src='/img/camping-tent.png' className={styles.iconimage} alt='Camping Tent' />
                    </button>
                    <span className={`${styles.textunderbutton} z-30 text-white`}>Campgrounds</span> {/* Text under the first button */}
                </div>
                <div className='flex flex-col items-center'> {/* Wrapper for second button and text */}
                    <button
                        className={`${styles.circularButton} bg-yellow-600 m-14 my-3 rounded-full z-30 hover:bg-yellow-700`}
                        onClick={(e) => { e.stopPropagation(); router.push('/reservations'); }}
                    >
                        <img src='/img/appointment.png' className={styles.iconimage} alt='Camping Tent' />
                    </button>
                    <span className={`${styles.textunderbutton} z-30 text-white`}>Booking</span> {/* Text under the second button */}
                </div>
                <div className='flex flex-col items-center'> {/* Wrapper for third button and text */}
                    <button
                        className={`${styles.circularButton} bg-yellow-600 m-14 my-3 rounded-full z-30 hover:bg-yellow-700`}
                        onClick={(e) => { e.stopPropagation(); router.push('/camp'); }}
                    >
                        <img src='/img/contact-us.png' className={styles.iconimage} alt='Camping Tent' />
                    </button>
                    <span className={`${styles.textunderbutton} z-30 text-white`}>Contact</span> {/* Text under the third button */}
                </div>
            </div>
        </div>
    );
}
