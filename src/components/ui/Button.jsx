const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="flex justify-center items-center w-full sm:w-[30%] bg-primary shadow-md text-slate-200 font-title rounded-md py-2 hover:text-slate-100 transition"
    >
      {children}
    </button>
  );
};

export default Button;
