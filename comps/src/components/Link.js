import useNavi from "../hooks/use-navi";
import classNames from "classnames";

function Link({ to, children, className, activeclassName }) {
  const { navigate, currentPath } = useNavi();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeclassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
