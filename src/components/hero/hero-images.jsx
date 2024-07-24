const Heroimages = ({ imgUrl, size }) => {
  return (
    <div>
      <img
        className={`${size} shadow-[40px_40px_#E5E7EB] border-8 border-white `}
        src={imgUrl}
        alt="img"
      />
    </div>
  );
};

export default Heroimages;
