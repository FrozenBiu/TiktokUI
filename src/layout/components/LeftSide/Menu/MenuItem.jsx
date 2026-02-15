import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function MenuItem({
  title,
  image,
  to,
  show,
  ref,
  onClick,
  ...props
}) {
  return (
    <NavLink
      onClick={onClick}
      ref={ref}
      to={to}
      className="cursor-pointer"
      {...props}
    >
      <div
        className={`flex items-center gap-[0.75rem] ${show ? "" : "lg:ms-1"}`}
      >
        <div
          className={`size-[32px] text-[28px] shrink-0 flex items-center justify-center`}
        >
          {image}
        </div>
        <h2
          className={`font-semibold ml-1 hidden ${
            !show ? "lg:block lg:opacity-100" : "lg:opacity-0"
          } transition-all ease-in-out duration-300`}
        >
          {title}
        </h2>
      </div>
    </NavLink>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
