import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    return(
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg}
            alt = 'logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title = 'HOME' pageRef='/'/>
            <TopMenuItem title = 'ABOUT US' pageRef='/about'/>
            <TopMenuItem title = 'SERVICES' pageRef='/service'/>
            {
                session?<TopMenuItem title = 'MYBOOKING' pageRef='/cart'/>:''
            }
            {/* {
                session ? null : <Link href="/api/auth/register"><div className='flex items-center right-3 flex-end h-full px-3'>
                <button className={`${styles.button} py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 bg-stone-300 rounded-2xl hover:bg-stone-400 `}><p className='font-bold'>Sign-Up</p></button></div></Link>
            } */}
            {
                session? <Link href="/api/auth/signout"><div className='flex items-center absolute right-0 h-full px-3'>
                <button className={`${styles.button} py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 bg-stone-300 rounded-2xl hover:bg-stone-400 `}><p className='font-bold'>Sign Out</p></button></div></Link>
               :<div className='flex flex-row px-5 right-13'>
               <Link href="/api/auth/signin"><div className='flex items-center absolute right-0 h-full px-3'>
                <button className={`${styles.button} py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 bg-stone-300 rounded-2xl hover:bg-stone-400 `}><p className='font-bold'>Sign In</p></button></div></Link>
                <Link href="/api/auth/register"><div className='flex items-center absolute right-12 h-full px-4 mx-14'>
                <button className={`${styles.button} py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 bg-stone-300 rounded-2xl hover:bg-stone-400 `}><p className='font-bold'>Register</p></button></div></Link>
                </div>
            }   
        </div>
    );
}