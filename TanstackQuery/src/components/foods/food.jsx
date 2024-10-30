import { useQuery } from "@tanstack/react-query";
import {fetchFoods} from "../data/data";

import { ProgressSpinner } from 'primereact/progressspinner';
        

function Food(){
   //data is the return property from the useQuery
   const {data ,isError ,isLoading}=useQuery({
      queryKey: ["foods"],
      queryFn: fetchFoods
   });

   if(isLoading) return (
      <div className="h-screen m-0 p-0 flex flex-col items-center justify-center"><ProgressSpinner/></div>
   )

   if(isError) return (<div className="h-screen m-0 p-0 flex flex-col items-center justify-center"><h1 className="text-6xl">Oooops🤨, Something Went Wrong💔</h1></div>)

   return(
      <>
      <div className="m-0 p-0">
         <h1 className="flex flex-col items-center justify-center text-6xl p-8">FoodIn😋</h1>
          <div className="m-auto grid grid-cols-4 gap-6"> 
          {data?.categories?.map((category) => (
            <div key={category.idCategory}className=" w-full bg-orange-300 h-full m-auto rounded-3xl flex flex-col items-center justify-center pt-0.5">
               <img src={category.strCategoryThumb} alt={category.strCategory} className="w-52 h-52 mt-6" />
               <h2 className="text-xl font-bold m-auto underline" >{category.strCategory}</h2>
               <h3 className="m-auto px-2">{category.strCategoryDescription}</h3>
            </div>
            ))}
         </div>
      </div>
      </>
   )
}
export default Food;