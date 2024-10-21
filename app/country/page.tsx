import Link from "next/link";
import countries from "../admin/countries/countries";
export default function Country(){
    return(
       
      <div className="flex flex-col justify-center pt-20 items-center">
            <h2 className="text-5xl mb-10 ">
                List of Countries population
             </h2>
                    

             {/* List of Countries population Button start */}


              <ul className="space-y-4 ">
                 {countries.map((country, index) => (
                     <li key={index}>
                          <Link href={`/country/${country.name.toLowerCase()}`}>
                              
                              <span className="text-xl w-48 h-10 border-2 border-green-500 px-4 py-2 hover:bg-green-500 hover:text-white flex items-center justify-center hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out rounded-3xl">
                                   {country.name}
                              </span>

                          </Link>
                     </li>
        ))} 
              </ul>


              {/* List of Countries population Button end */}
      </div>

    );
}