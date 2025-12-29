import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
        <Header />
        <h1>hello iam good</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis?</p>
        <NavLink to={'/page1'}>Page 1</NavLink>
        <NavLink to={'/page2'}>Page 2</NavLink>
        <Outlet />
    </div>
  )
}
