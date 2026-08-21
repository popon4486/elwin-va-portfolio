import './ProjectCard.css'

function ProjectCard({ category, title, description, tags, link }) {
  return (
    <div className="project-card">
      {category && <span className="project-card__category">{category}</span>}

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>

      {tags?.length > 0 && (
        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      {link && (
        <a href={link} className="project-card__link" target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </div>
  )
}

export default ProjectCard
