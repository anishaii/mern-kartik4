import { NavLink } from "react-router";


export default function Header() {
  return (
    <div className=" mx-12 py-2 flex items-baseline justify-between">
      <h1 className="text-orange-400">Post Application</h1>
      <nav>
        <NavLink to={'/add-todo'} className="px-4 py-2 bg-orange-400 text-white rounded-lg">Add Post</NavLink>
      </nav>

    </div>
  )
}