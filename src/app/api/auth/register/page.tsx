
import { redirect } from "next/navigation"
import register from "@/libs/userRegister"

export default async function RegisterPage() {

    const addUser = async (addUserForm: FormData) => {
        "use server"
        const name = addUserForm.get("name")as string || "";
        const tel = addUserForm.get("tel")as string || "";
        const email = addUserForm.get("email")as string || "";
        const password = addUserForm.get("password")as string || "";
        const role = addUserForm.get("role")as string || "";

        const regis = register(name ,tel ,email ,password)
        redirect("../../../")
    }    

    return (
        <main className="m-5 p-5 flex justify-center items-center h-screen">
    <form className="w-[80%] max-w-xl flex flex-col items-center space-y-4 bg-white rounded-lg p-8" action={addUser}>
        <div className="text-5xl p-10">Register</div>
        
        <div className="flex flex-col w-full max-w-md my-2">
            <label className="text-gray-700 mb-1" htmlFor="name">Name</label>
            <input type="text" required id="name" name="name" placeholder="name" className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"/>
        </div>

        <div className="flex flex-col w-full max-w-md my-2">
            <label className="text-gray-700 mb-1" htmlFor="tel">Tel</label>
            <input type="text" required id="tel" name="tel" placeholder="tel" className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"/>
        </div>

        <div className="flex flex-col w-full max-w-md my-2">
            <label className="text-gray-700 mb-1" htmlFor="email">Email</label>
            <input type="email" required id="email" name="email" placeholder="email" className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"/>
        </div>

        <div className="flex flex-col w-full max-w-md my-2">
            <label className="text-gray-700 mb-1" htmlFor="password">Password</label>
            <input type="password" required id="password" name="password" placeholder="password" className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"/>
        </div>

        <button type="submit" className="bg-gray-600 hover:bg-stone-400 text-white rounded-md px-3 py-2">Sign Up</button>
    </form>
</main>

    )
}