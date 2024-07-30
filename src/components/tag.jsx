const Tag = ({ TagText }) => {
  return (
    <button className="bg-gray-200 rounded-xl  px-5 py-1  font-normal text-xl text-gray-600 dark:bg-white text-black">
      {TagText}
    </button>
  );
};
export default Tag;
