import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  return <button> {children} </button>;
}

Button.propTypes = {
  checkvariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of the primary, secondary, success, warning, danger can be true. "
      );
    }
  },
};

export default Button;
