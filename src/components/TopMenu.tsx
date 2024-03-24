import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu(){
    return(
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.jpg'} className={styles.logoimg}
            alt = 'logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title = 'HOME' pageRef='/features'/>
            <TopMenuItem title = 'FEATURES' pageRef='/features'/>
            <TopMenuItem title = 'ABOUT' pageRef='/about'/>
            <TopMenuItem title = 'SERVICES' pageRef='/service'/>
            <TopMenuItem title = 'BLOG' pageRef='/blog'/>
            <TopMenuItem title = 'CONTACT' pageRef='/contact'/>
            <button className={`${styles.button} block rounded-md bg-yellow-500 hover:bg-yellow-600 px-6 py-2 shadow-sm text-white`}>
                Register Now  
            </button>

            
        </div>
    );
}