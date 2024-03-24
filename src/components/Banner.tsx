'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner(){
    const covers = ['/img/cover4.jpg', '/img/cover5.jpg', '/img/cover6.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%3]}
            alt = 'cover'
            fill ={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-6xl font-medium'>POR CAMPGROUND</h1>
                <h3 className='text-xl font-medium'>the biggest campground booking platfrom</h3>
                <h3 className='text-xl font-italic'>having your best experience with us</h3><br></br><br></br>
            </div>
            <button className='bg-white text-yellow-600 border border-yellow-600 font-semibold py-3 px-3 m-3 rounded z-30 absolute bottom-0 right-0
                hover:bg-yellow-600 hover:text-white hover:border-transparent'
                onClick={(e)=> {e.stopPropagation(); router.push('/camp')}}>
                Booking Campground
            </button>
            
        </div>
    );
}

