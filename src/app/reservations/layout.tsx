import styles from './reservations.module.css'
import ReservationMenu from '@/components/ReservationsMenu'

export default function ReservationLayout({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    )
}