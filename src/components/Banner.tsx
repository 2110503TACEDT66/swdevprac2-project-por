import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt = 'cover'
            fill ={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h3 className='text-xl font-italic'>spend a great week</h3>
                <h1 className='text-4xl font-medium'>Hello Summer</h1>
                <h1 className='text-4xl font-medium'>Campground</h1>
             
            </div>

        </div>
    );
}

