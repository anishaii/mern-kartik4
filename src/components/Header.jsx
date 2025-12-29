import { NavLink } from "react-router"

const Header = () => {
  return (
    <div className="bg-black text-white px-5 py-5 flex  items-baseline justify-between">
      <h1 className="text-2xl">React Router</h1>
      <nav className="flex gap-5">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default Header
