import { Link } from "react-router-dom"

const Signup = ()=>{
    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center animate__animated animate__fadeIn">
            <div className="bg-white rounded-lg w-[480px] p-6 animate__animated animate__pulse">
                <h1 className="text-2xl font-semibold mb-4 text-center">Register Now</h1>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-base">Fullname</label>
                        <input 
                            className="border border-gray-300 rounded p-2"
                            placeholder="your name"
                            name="fullname"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-base">Email</label>
                        <input 
                            className="border border-gray-300 rounded p-2"
                            placeholder="mail@gmail.com"
                            name="email"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-base">Password</label>
                        <input 
                            className="border border-gray-300 rounded p-2 pr-12"
                            placeholder="**********"
                            name="password"
                            type="password"
                        />
                    </div>

                    <button className="bg-indigo-600 text-white p-2 rounded font-medium">Sign up</button>
                </form>
                <div className="flex gap-2 mt-4">
                    <label className="text-gray-500">I Have an account ?</label>
                    <Link to="/login" className="text-blue-600">Signin</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup