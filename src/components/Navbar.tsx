import darkLogo from "../assets/logo-dark.svg";
import crossIcon from "../assets/icon-add-task-mobile.svg";
import verticalElipsisIcon from "../assets/icon-vertical-ellipsis.svg";

export default function Navbar() {
  return (
    <nav className="w-full flex bg-white">
      <div className="w-80 p-6 border-r-2 border-gray-100">
        <img src={darkLogo} alt="logo" />
      </div>
      <div className="w-full flex items-center justify-between p-6 shadow-sm">
        <span className="t text-xl font-bold">Platform Launch</span>
        <div className="flex gap-4">
          <button className="flex gap-2  items-center py-2 px-4 rounded-3xl bg-violet-300">
            <img src={crossIcon} alt="cross icon" width={8} height={8} />
            <span className="text-sm font-medium text-white">Add New Task</span>
          </button>
          <button>
            <img src={verticalElipsisIcon} alt="vertical elipsis icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
