import { useQuery } from "@tanstack/react-query";
import { fetchFoods } from "../data/data";
import Pagination from "./pagination";
import { PiSpinnerBold } from "react-icons/pi";
import { useState } from "react";

function Food() {
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 4;

   const { data, isError, isLoading } = useQuery({
      queryKey: ["foods"],
      queryFn: fetchFoods,
   });

   if (isLoading) return (
      <div className="h-screen m-0 p-0 flex flex-col items-center justify-center">
         <PiSpinnerBold size={50} className="animate-spin"/>
      </div>
   );

   if (isError) return (
      <div className="h-screen m-0 p-0 flex flex-col items-center justify-center">
         <h1 className="text-6xl">Oooops🤨, Something Went Wrong💔</h1>
      </div>
   );

   // Sort items by idCategory and paginate
   const sortedCategories = data?.categories?.sort((a, b) => Number(a.idCategory) - Number(b.idCategory));
   const startIndex = (currentPage - 1) * itemsPerPage;
   const paginatedItems = sortedCategories.slice(startIndex, startIndex + itemsPerPage);

   return (
      <div className="m-0 p-0">
         <h1 className="flex flex-col items-center justify-center text-6xl p-8">FoodIn😋</h1>
         
         <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={sortedCategories.length}
            itemsPerPage={itemsPerPage}
         />

         <div className="m-auto grid grid-cols-4 gap-6">
            {paginatedItems.map((category) => (
               <div key={category.idCategory} className="w-full bg-orange-300 h-full m-auto rounded-3xl flex flex-col items-center justify-center pt-0.5">
                  <img src={category.strCategoryThumb} alt={category.strCategory} className="w-52 h-52 mt-6" />
                  <h2 className="text-xl font-bold m-auto underline">{category.strCategory}</h2>
                  <h3 className="m-auto px-2">{category.strCategoryDescription}</h3>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Food;
