import styles from './bookings.module.css'
import BookingMenu from './bookingsMenu'

export default function ReservationLayout({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            <BookingMenu/>
            {children}
        </div>
    )
}