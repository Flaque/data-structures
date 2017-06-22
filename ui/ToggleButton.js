/**
 * This React Component acts as a regular button, except
 * it can be toggled on/off by adding the "on" property.
 *
 * Example usage:
 * ```
 * <ToggleButton on> Cats </ToggleButton> // This is on
 * <ToggleButton> Dogs </ToggleButton>    // This is off
 * ```
 */
export default ({
  on,
  children,
  ...restProps
}) => {

  // If "on", activate the button!
  const toggle = (on) ? "active" : "";
  const classes = `btn ${toggle}`;

  return (
    <button
      className={classes}
      {...restProps}>
      {children}
    </button>
  )
}
