
function Card ({ title, icon, description })  {
  return (
    <div className="p-10">
        <div className=" h-130 container shadow-2xl flex flex-col items-center p-10 gap-6 text-xl sm:text-sm  md:text-lg lg:text-xl rounded-xl ">
        <h1>{title}</h1>
        <i>{icon}</i>
        <ul className=" flex flex-col gap-5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Card

