function StatCard({ label, value }) {
  return (
    <div className="card">
      <h4>{label}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;