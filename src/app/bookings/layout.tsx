import styles from './bookings.module.css'

export default function ReservationLayout({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            {children}
        </div>
    )
}