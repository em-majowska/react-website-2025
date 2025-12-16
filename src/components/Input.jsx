const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id="site-search"
      className="rounded-lg bg-white p-2 border border-white focus:outline-none focus:ring-2 focus:ring-orange-600 container"
    />
  );
};

export default Input;
