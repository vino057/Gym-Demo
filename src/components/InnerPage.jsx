function InnerPage({ label, title, description }) {
  return (
    <main className="page-content">
      <div className="container">
        <p className="section-label">{label}</p>
        <h1 className="page-title">
          {title}
        </h1>
        <p className="page-description">
          {description}
        </p>
      </div>
    </main>
  );
}

export default InnerPage;