import { useState } from "react"
import { Link } from "react-router-dom"

const Login = ()=>{
    const [type, setType] = useState('password')

    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center animate__animated animate__fadeIn">
            <div className="bg-white rounded-lg w-[480px] p-6 animate__animated animate__pulse">
                <h1 className="text-2xl font-semibold mb-4 text-center">Hi User !</h1>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-base">Email</label>
                        <input 
                            className="border border-gray-300 rounded p-2"
                            placeholder="mail@gmail.com"
                            name="email"
                        />
                    </div>

                    <div className="flex flex-col gap-2 relative">
                        <label className="font-medium text-base">Password</label>
                        <input 
                            className="border border-gray-300 rounded p-2 pr-12"
                            placeholder="**********"
                            name="password"
                            type={type}
                        />
                        <button type="button" className="absolute top-9 right-2 bg-gray-100 w-8 h-8 rounded-full hover:bg-gray-200" onClick={()=>setType(type === "password" ? "text" : "password")}>
                            {
                                type === "password" ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>
                            }
                        </button>
                    </div>

                    <button className="bg-indigo-600 text-white p-2 rounded font-medium">Sign in</button>
                </form>
                <div className="flex gap-2 mt-4">
                    <label className="text-gray-500">I Don`t Have an account ?</label>
                    <Link to="/signup" className="text-blue-600">Register now</Link>
                </div>
            </div>
        </div>
    )
}

export default Login