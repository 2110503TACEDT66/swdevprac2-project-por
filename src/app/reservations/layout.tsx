import styles from './reservations.module.css'
import ReservationMenu from '@/app/reservations/ReservationsMenu'

export default function ReservationLayout({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    )
}