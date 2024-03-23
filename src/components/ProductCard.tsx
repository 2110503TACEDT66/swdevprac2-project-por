import InteractiveCard from './InteractiveCard'
import styles from './productcard.module.css'
import Image from 'next/image'

export default function Productcard({campName, imgSrc}:{campName:string, imgSrc:string}){
    return (
        <InteractiveCard contentName={campName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Camp Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px]'>{campName}</div>
        </InteractiveCard>
    )
}