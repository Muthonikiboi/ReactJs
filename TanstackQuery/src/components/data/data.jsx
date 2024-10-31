export async function fetchFoods(){
   const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
   console.log(response); 
   return response.json();
}