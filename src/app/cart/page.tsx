import BookingCart from "@/components/BookingCart";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile";
import styles from './cart.module.css'

export default async function CartPage() {

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createAt = new Date (profile.data.createAt);

    return(
        <main>
            <div className={`${styles.main} py-10 px-10 text-2xl font-bold`}>Hello {profile.data.name}
                <br/><div className="text-xl font-medium">This is your details.</div><br/>
                <div className="text-xl font-medium">User ID : {profile.data._id}</div>
                <div className="text-xl font-medium">Email : {profile.data.email}</div>
                <div className="text-xl font-medium">Telephone : {profile.data.tel}</div>
                <div className="text-xl font-medium">Role : {profile.data.role}</div>
                <div className="text-xl font-medium">Create At : {new Date(profile.data.createAt).toString()}</div>
            </div>
                <BookingCart/>
        </main>
    );
}