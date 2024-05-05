import { Link } from "react-router-dom"
function ErrorPage() {
    return (
        <>
            <div className="w-[1440px] mx-auto">
                <div className="mx-auto flex flex-col  px-[165px] mb-24 mt-40">
                    <Link className="text-[15px]" to='/headphones'>Go Home</Link>
                    <div className="flex flex-col items-center justify-center h-[200px] w-[400px] justify-center mx-auto mt-56 rounded-lg shadow-lg ">
                        <h1 className="text-4xl font-bold text-red-600 mb-4">Error!</h1>
                        <p className="text-lg text-gray-800">404 This page could not be found.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
