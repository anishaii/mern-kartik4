const Color = ({ titles, colors }) => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center font-medium mb-10">
        {titles}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-10">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`${color.bg} h-24 flex items-center justify-center font-semibold text-white`}
          >
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;
