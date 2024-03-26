import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { dbConnect } from "@/db/dbConnect"
import Campground from "@/db/models/Campground"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function DashBoardPage(){

    const addCampground=async (addCampgroundForm:FormData)=>{
        'use server'
        const name=addCampgroundForm.get('name')
        const address=addCampgroundForm.get('address')
        const tel=addCampgroundForm.get('tel')
        const image=addCampgroundForm.get('image')

        try{
            await dbConnect()
            const campground=await Campground.create({
                "name":name,
                "address":address,
                "tel":tel,
                "image":image
            })
        }
        catch(error){
            console.log(error)
        }

        revalidateTag('campgrounds')
        redirect('../../../camp')
    }

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createAt = new Date (profile.data.createAt);


    return(
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <h1>{profile.data._id}</h1>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Role</td><td>{profile.data.role}</td></tr>
                <tr><td>Member Since</td><td>{createAt.toString()}</td></tr>
                </tbody></table>
                {
                    (profile.data.role=="admin")?
                    <form action={addCampground}>
                    <div className="text-xl">Create Campground</div>
                    <div className="flex items-center">
                        <label className="w-auto block" htmlFor="name">
                            Campground Name
                        </label>
                        <input type="text" required id='name' name='name' placeholder="Campground Name"
                        className="bg-white border-2 rounded"/>
                    </div>
                    <div className="flex items-center">
                        <label className="w-auto block" htmlFor="address">
                            Campground Address
                        </label>
                        <input type="text" required id='address' name='address' placeholder="Campground Address"
                        className="bg-white border-2 rounded"/>
                    </div>
                    <div className="flex items-center">
                        <label className="w-auto block" htmlFor="tel">
                            Campground Telephone Number
                        </label>
                        <input type="text" required id='tel' name='tel' placeholder="tel"
                        className="bg-white border-2 rounded"/>
                    </div>
                    <div className="flex items-center">
                        <label className="w-auto block" htmlFor="image">
                            Campground Image
                        </label>
                        <input type="text" required id='image' name='image' placeholder="URL"
                        className="bg-white border-2 rounded"/>
                    </div>
                    <button type="submit" className="p-2 rounded bg-blue-500 hover:bg-blue-600">
                        Add New Campground
                    </button>
                    </form>:null
                }
        </main>
    )
}