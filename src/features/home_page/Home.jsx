// import { Button } from "../../components/ui/button.jsx";
// import { useGetBlogsQuery } from "../blogs/blogApi.js"

// export default function Home() {

//   const { data, isLoading, error, refetch, isFetching } = useGetBlogsQuery();
//   // console.log(`isLoading: - ${isLoading}`);
//   // console.log(`isRefetching: - ${isFetching}`);

//   if (isLoading || isFetching) return <h1>Loading....</h1>

//   if (error) return <h1 className="text-red-500">{error.message || error.error}</h1>



//   return (
//     <div>

//       <Button onClick={refetch}>Refetch</Button>

//       {data && data.map((blog) => {
//         return <div key={blog.id}>

//           <h1>{blog.title}</h1>
//           <p>{blog.detail}</p>

//         </div>
//       })}

//     </div>
//   )
// }

import { Button } from "../../components/ui/button.jsx";
import { useGetBlogsQuery, useLazyGetBlogsQuery } from "../blogs/blogApi.js"

export default function Home() {

  // const { data, isLoading, error } = useGetBlogsQuery();


  const [getData, { isLoading, error, data }] = useLazyGetBlogsQuery();




  if (isLoading) return <h1>Loading....</h1>

  if (error) return <h1 className="text-red-500">{error.message || error.error}</h1>



  return (
    <div>

      <Button onClick={() => getData()}>Get Data</Button>



      {data && data.map((blog) => {
        return <div key={blog.id}>

          <h1>{blog.title}</h1>
          <p>{blog.detail}</p>

        </div>
      })}

    </div>
  )
}