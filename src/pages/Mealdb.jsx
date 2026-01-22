// import axios from "axios";
// import { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "../components/ui/card";

// export default function Mealdb() {
//   const [categories, setCategories] = useState([]);

//   const getCategories = async () => {
//     try {
//       const response = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/categories.php"
//       );
//       setCategories(response.data.categories);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
//    <div className="grid grid-cols-4 gap-4 p-4">

//     {categories.map((item) => (
//      <Card key={item.idCategory} className="pt-0">
//       <CardContent className="px-0">
//         <img
//           src={item.strCategoryThumb}
//           alt={item.strCategory}
//           className="h-48 w-full object-cover rounded-t-xl"
//         />
//       </CardContent>

//       <CardHeader>
//         <CardTitle>{item.strCategory}</CardTitle>
//         <CardDescription>
//           {item.strCategoryDescription}
//         </CardDescription>
//       </CardHeader>
//     </Card>
//     ))}
//     </div>
//   );
// }
 
// import axios from 'axios'
// import {useEffect, useState} from 'react'

// const Mealdb = () => {
//   const [categories , setCategories] = useState ([]);

//   const getCategories = async() => {
//     try{
//       const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
//       setCategories(response.data.categories);
//     }catch(error){
//       console.log('error');
      
//     }
//   }

//   useEffect(() => {
//     getCategories ();

//   },[]);

//   return (
//     <div>
//       {categories.map((item) => (
//         <div key={item.idCategory}>
//           <h1>{item.strCategory}</h1>
//           <img src={item.strCategoryThumb} width={150} alt="" />
//           <h1>{item.strCategoryDescription}</h1>  
//         </div>
//       ))}
      
//     </div>
//   )
// }

// export default Mealdb
