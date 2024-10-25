import { MdFilterList } from "react-icons/md";
const Filter = () => {
  return (
    <div className="fixed bg-slate-200 h-full w-[20%] p-5 text-lg  subpixel-antialiased">
      <div className="flex flex-row items-center font-medium gap-2">
        <span>Filter</span>
        <MdFilterList />
      </div>
    </div>
  );
};

export default Filter;
