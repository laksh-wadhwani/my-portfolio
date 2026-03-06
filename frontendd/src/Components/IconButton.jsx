import { Link } from "react-router";

const IconButton = ({
  icon: Icon,
  size = 20,
  to,
  onClick,
  className = "",
  iconClassName = "",
}) => {
  const baseClasses =
    "group size-10 rounded-md p-2 border border-white flex items-center justify-center transition-all duration-500 ease-in-out hover:border-[#dac5a7] hover:scale-[1.02] cursor-pointer";

  const iconClasses =
    "transition-all duration-500 ease-in-out group-hover:text-[#dac5a7]";

  const content = (
    <Icon size={size} className={`${iconClasses} ${iconClassName}`} />
  );

  
  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

export default IconButton;