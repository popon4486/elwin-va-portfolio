import './Container.css'

/**
 * Wraps section content at a consistent max-width with side padding.
 * Every section uses this instead of repeating the same wrapper styles.
 */
function Container({ children, className = '' }) {
  return <div className={`container ${className}`}>{children}</div>
}

export default Container
