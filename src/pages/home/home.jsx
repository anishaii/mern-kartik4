

// props is passing value


// New From Here

// Q)1
// export default function Home() {
//   return (
//     <div>

//       <Child person={{ name: 'John', age: 100 }} />


//     </div>
//   )
// }

// function Child(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>hello jee</h1>
//     </div>
//   )
// }

// Q)1 [ANSWER]
// export default function Home() {
//   return (
//     <div>

//       <Child person={{ name: 'John', age: 100 }} />


//     </div>
//   )
// }

// function Child({person:{name,age}}) {
//   console.log(name,age);
//   return (
//     <div>
//       <h1>hello jee</h1>
//     </div>
//   )
// }

// Q)2 children
// export default function Home() {
//   return (
//     <div>

//       <Child person={{ name: 'John', age: 100 }} >
//         <h1>hello jee</h1>
//       </Child>


//     </div>
//   )
// }



// function Child(props) {
//   console.log(props);

//   return (
//     <div>
//       <h1>hello jee</h1>
//     </div>
//   )
// }

// Q)2 children [ANSWER]
// export default function Home() {
//   return (
//     <div>

//       <Child person={{ name: 'John', age: 100 }} >
//         <h1>hello jee</h1>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et similique facere, necessitatibus voluptates nulla esse doloribus temporibus reiciendis consequuntur eius sapiente alias quia quisquam sint at voluptas reprehenderit impedit ad!</p>
//       </Child>


//     </div>
//   )
// }



// function Child({ person:{name , age}, children }) {
// console.log(name, age);
// console.log(children)


//   return (
//     <div>
//       <h2>{name}  {age}</h2>
//       {children}
//     </div>
//   )
// }

// ✔ Multiple children → array
// ✔ Single child → object
// ✔ Text → string
// ✔ React normalizes later during render
// ✔ Arrays are needed to preserve order

// Q)3 function as prop
// export default function Home() {
//   const func = () => {
//     alert(' show alert ');
//   }
//   return (
//     <div>

//       <Child />



//     </div>
//   )
// }



// function Child() {


//   return (
//     <div>
//       <button>click</button>
//     </div>
//   )
// }

// answer

// export default function Home() {
//   const func = () => {
//     alert(' show alert ');
//   }
//   return (
//     <div>

//       <Child fun={func} />



//     </div>
//   )
// }



// function Child({fun}) {


//   return (
//     <div>
//       <button onClick={fun}>click</button>
//     </div>
//   )
// } 

// Q)4 passing array as prop

// export default function Home() {

//   const data = [
//     {
//       id: 1,
//       name: 'John',
//       age: 100
//     },
//     {
//       id: 2,
//       name: 'John',
//       age: 100
//     }
//   ];

//   return (
//     <Child persons={data} />
//   )
// }



// function Child({ persons }) {


//   return (
//      <div>
//       {persons.map(person => (
//         <div key={person.id}>
//           <p>Name: {person.name}</p>
//           <p>Age: {person.age}</p>
//         </div>
//       ))}
      
//     </div>
//   )
// }

//multiple props

// export default function Home() {



//   return (
//     <div>

//       <Child

//         name={'ram'}
//         age={90}
//         address={{
//           city: 'bangalore',
//           state: 'karnataka'
//         }}
//         jobs={['developer', 'tester']}
//       />

//     </div>
//   )
// }



// function Child({name, age, address, jobs}) {
   
//   return (
//        <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>City: {address.city}</p>
//       <p>State: {address.state}</p>
//       <p>Jobs:</p>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
//

// import { useState } from "react";




// export default function Home() {


//   const [count, setCount] = useState(0);







//   const handleIncrement = () => {

//     setCount((prev) => prev + 1);

//   }

//   const handledecrement = () => {

//     setCount((prev) => prev > 0 ? prev - 1 : 0);

//   }

//   return (
//     <div className="p-5">


//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>Increment</button> <br></br>
//       <button onClick={handledecrement}>decrement</button>
//     </div>
//   )
// }


// now the value must be decreasing . but it should't decreasw from zero


// import React, { useState } from "react";
// import { Button } from "../../components/ui/button";
// import { faker } from "@faker-js/faker";

// const Home = () => {
//   const [data, setData] = useState([]);

//   const handleData = () => {
//     const newUser = {
//       id: faker.string.uuid(),
//       name: faker.person.firstName(),
//     };

//     setData((prev) => [...prev, newUser]);
//   };

//   return (
//     <div className="p-5">
//       <Button onClick={handleData} className="mb-4">
//         Add Name
//       </Button>

//       <div className="space-y-2">
//         {data.map((user) => (
//           <p key={user.id} className="text-lg">
//             {user.name}
//           </p>
//         ))}

//         {/* <Avatar className="h-28 w-28"> <AvatarImage src="https://github.com/shadcn.png"></AvatarImage> <AvatarFallback>JD</AvatarFallback> </Avatar> */}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react'

// import { users , cafe, clothing} from "../../data/data";


// const Home = () => {
 

//   return (
//     <div className='flex gap-10 m-10'>
//       {/* User */}
//       <div className='flex flex-col gap-5'>
//         <h2 className="text-xl font-bold text-blue-600">Users</h2>
//         {users.map((user) => (
//           <div key={user.id}>
//             <ul>
//               <li><strong>Name:</strong> {user.name}</li>
//               <li><strong>Email:</strong> {user.email}</li>
//               <li><strong>Role:</strong> {user.role}</li>
//               <li>
//                 <strong>Skills</strong>
//                 <ul>
//                   {user.skills?.map((skilled,index) => (
//                     <li key={index}>{skilled}</li>

//                   )
//                 )}
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Cafe */}
//       <div className='flex flex-col gap-5'>
//         <h2 className="text-xl font-bold text-orange-400">Cafe Menu</h2>
//         {cafe.map((item) => (
//           <div key={item.id}>
//             <ul>
//               <li><strong>{item.name}</strong></li>
//               <li>{item.description}</li>
//               <li>Price: {item.price}</li>
//               <li><strong>Currency:</strong> {item.currency}</li>
//               <li><strong>Category:</strong> {item.category}</li>
//               <li><strong>IsAvaliable:</strong> {item.isAvailable}</li>
//               <li>
//                 <strong>Ingredients:</strong>
//                 <ul>
//                   {item.ingredients.map((ingre , index) => (
//                     <li key={index}>{ingre}</li>
//                   )
//                 )}

//                 </ul>
//               </li>
              
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className='flex flex-col gap-5'>
//         <h1 className=' text-xl font-bold text-green-500'>Clothing Item</h1>
//         {clothing.map((cloth) =>
//         <div key={cloth.id}>
//           <ul>
//             <li><strong>Name:</strong>{cloth.name}</li>
//             <li><strong>Description:</strong>{cloth.description}</li>
//             <li><strong>Price:</strong>{cloth.price}</li>
//             <li><strong>Currency:</strong>{cloth.currency}</li>
//             <li><strong>Category:</strong>{cloth.category}</li>
//             <li><strong>inStock:</strong>{cloth.inStock}</li>
//             <li>
//               <strong>Tags:</strong>
//               <ul>
//                 {cloth.tags.map((tag, index) => (
//                   <li key={index}>{tag}</li>
//                 ))}
//               </ul>
//             </li>

//           </ul>

//         </div>
//         )
//         }
//       </div>

//     </div>
//   );
// };

// export default Home;


// import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
// import { Button } from "../../components/ui/button";
// import { faker } from '@faker-js/faker';
// import { v4 as uuidv4 } from 'uuid';
// import { Trash2Icon } from "lucide-react";




// export default function Home() {

//   const [data, setData] = useState([]);



//   const handleData = () => {
//     setData((prev) => [...prev, {
//       displayName: faker.internet.displayName(),
//       avatar: faker.image.avatarGitHub(),
//       id: uuidv4()
//     }].reverse());

//   }

//   const persons = [
//     { id: 1, name: "John", age: 100 },
//     { id: 2, name: "sita", age: 90 },
//     { id: 3, name: "rita", age: 70 },
//   ];
//   const pers = persons.filter((per) => per.id !== 1);
//   console.log(pers);
//   const removeData = (id) => {
//     setData((prev) => {
//       const filterData = prev.filter((user) => user.id !== id);
//       return filterData
//     });
//   }




//   return (
//     <div className="p-5">

//       <Button onClick={handleData}>Add To Generate Data </Button>

//       <div className="mt-4 flex flex-col gap-4">
//         {data.map((user) => {
//           return <div key={user.id} className="space-y-3">
//             <h1>{user.displayName}</h1>
//             <Avatar className="h-28 w-28">
//               <AvatarImage
//                 src={user.avatar} alt="@shadcn" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <Button onClick={() => removeData(user.id)}>
//               <Trash2Icon />
//             </Button>
//           </div>


//         })}
//       </div>








//     </div>
//   )
// }


// import { useState } from "react";
// import { Button } from "../../components/ui/button.jsx";
// import { Input } from "../../components/ui/input.jsx";



// export default function Home() {

//   const [text, setText] = useState('');

//   const [data, setData] = useState([]);




//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setData((prev) => [...prev, text]);
//     setText('');
//   }



//   return (
//     <div className="p-5">


//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md space-y-4">

//         <Input
//           value={text}
//           onChange={(e) => {
//             setText((prev) => e.target.value);
//           }}
//           placeholder="Some Text" />

//         <Button type="submit">Submit</Button>


//       </form>

//       {data.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}


//     </div>
//   )
// }

import { useState } from "react";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";



export default function Home() {


  const [a, setA] = useState(false);

  const handleA = () => {
    setA(true);
    console.log(a);
  }

  console.log(a);

  return (
    <div className="p-5">

      <Button onClick={handleA} className={`${a ? 'bg-red-400' : 'bg-amber-400'}`}>Click To</Button>









    </div>
  )
}