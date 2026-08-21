import './ServiceCard.css'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <span className="service-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  )
}

export default ServiceCard
