const Spinner = ({ icon: Icon, text = "", loading = false }) => {
  return (
    <div className="flex justify-center items-center cursor-pointer gap-2">
      {loading ? (
        <div className="size-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
      ) : (
        <>
          {Icon && <Icon size={20} />}
          <span>{text}</span>
        </>
      )}
    </div>
  );
};

export default Spinner;