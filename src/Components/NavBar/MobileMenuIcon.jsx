import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const MobileMenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <XMarkIcon className="border-2 h-6 w-6 text-slate-900 absolute right-2" />
      ) : (
        <Bars3Icon className="border-2 h-6 w-6 text-slate-900 " />
      )}
    </button>
  );
};

MobileMenuIcon.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default MobileMenuIcon;
