'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner(){
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%3]}
            alt = 'cover'
            fill ={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h3 className='text-xl font-italic'>spend a great week</h3>
                <h1 className='text-7xl font-medium'>Hello Summer</h1>
                <h1 className='text-7xl font-medium'>Campground</h1><br></br><br></br>
            <button className={`${styles.button} bg-red-500 text-white py-2 px-2 rounded z-40 
            hover:bg-red-600 hover:text-white hover:border-transparent`}
                onClick={(e)=> {e.stopPropagation(); router.push('/camp')}}>
                Register for Camp
            </button>
            </div>
        </div>
    );
}

