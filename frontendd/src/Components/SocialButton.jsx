
const SocialButton = ({
  icon,
  alt = "icon",
  href,
  onClick,
  className = "",
}) => {
  const baseClasses =
    "size-10 rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 flex items-center justify-center";

  const content = (
    <img src={icon} alt={alt} className="w-full h-full object-contain" />
  );

  // If link is provided → render anchor
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  // Otherwise render button
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

export default SocialButton;