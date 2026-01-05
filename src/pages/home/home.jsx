// export default function Home() {
//   return (
//     <div>

//       <Child person={{ name: 'John', age: 100 }} />


//     </div>
//   )
// }



// function Child({ person: { name, age } }) {

//   console.log(name, age);

//   return (
//     <div>
//       <h1>hello jee</h1>
//     </div>
//   )
// }


// q/n
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

// answer

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



// function Child({ person, children }) {


//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// question2

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
// answer2

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



// function Child({ fun }) {


//   return (
//     <div>
//       <button onClick={fun}>click</button>
//     </div>
//   )
// }

// question3

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

// answer3
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
//     <div>

//       <Child persons={data} />




//     </div>
//   )
// }



// function Child({ persons }) {
  
//   return (
//     <div>
//       {persons.map(({ id, name, age }) => (
//         <div key={id}>
//           <h2>{name}</h2>
//           <p>Age: {age}</p>
//         </div>
//       ))}
//       </div>
//   )
// }


// Question4
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



// function Child() {


//   return (
//     <div>

//     </div>
//   )
// }



// props is passing value