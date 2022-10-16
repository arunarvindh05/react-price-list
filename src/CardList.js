export default function CardList({ details }) {
  console.log(details);
  return (
    <div>
      <h5 class="card-title text-muted text-uppercase text-center">
        {details.name}
      </h5>
      <h6 class="card-price text-center">
        ${details.price}
        <span class="period">/month</span>
      </h6>

      <ul class="fa-ul">
        {details.features.map((data, i) => (
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {data !== "5 User" ? (
              data !== "Unlimited User" ? (
                data
              ) : (
                <strong>{data}</strong>
              )
            ) : (
              <strong>{data}</strong>
            )}
          </li>
        ))}
        {details.nonFeatures.map((data, i) => (
          <li className="text-muted">
            <span className="fa-li">
              <i className="fas fa-times"></i>
            </span>
            {data}
          </li>
        ))}
      </ul>
      <div class="d-grid">
        <a href="/" className="btn btn-primary text-uppercase">
          Button
        </a>
      </div>
    </div>
  );
}
