import Link from "next/link"

export default function Home(){
    return(
        <div className="flex flex-col gap-y-20 h-screen justify-center items-center">
             <div className=" flex justify-center items-center">
                <p className="text-7xl">Countries Servey About Population</p>
             </div>


                       
                           {/* view country Button start */}




            <Link href="/country">
                {/* <button className="bg-blue-900 hover:bg-grey-700 text-white py-2 px-4 rounded-bg hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">
                    View Countries
                </button> */}
                {/* <button className="bg-blue-900 text-white px-10 py-5 text-xl tracking-widest hover:bg-black hover:text-white rounded-3xl">
                    View Countries
                </button> */}

                <button className="border-2 border-green-500 px-4 py-2 hover:bg-green-500 hover:text-white rounded-3xl">
                    View Countries
                </button>
            </Link>   

                                {/* view country Button end */}
          
        </div>
    )
}