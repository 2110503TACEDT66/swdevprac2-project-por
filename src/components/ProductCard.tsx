import InteractiveCard from './InteractiveCard'
import styles from './productcard.module.css'
import Image from 'next/image'

export default function Productcard({campName, imgSrc, onCompare}:{campName:string, imgSrc:string, onCompare?:Function}){
    return (
        <InteractiveCard contentName={campName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Camp Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>{campName}</div>
            {
                onCompare? <button className='block h-[10%] text-sm rounded-md bg-sky-600
                hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm'
                onClick={(e)=>{e.preventDefault();onCompare(campName)}}>Compare</button>:''
            }
        </InteractiveCard>
    )
}