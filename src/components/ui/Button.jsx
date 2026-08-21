import './Button.css'

/**
 * variant: 'primary' (solid) | 'secondary' (outline)
 * Renders as an <a> when href is provided, otherwise a <button>.
 */
function Button({ children, href, variant = 'primary', onClick, className = '', ...rest }) {
  const classes = `btn btn--${variant} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
