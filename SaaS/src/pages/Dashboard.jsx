function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 SaaS Dashboard</h1>

      <div className="card">
        <h2>Users</h2>
        <p>1200 Active Users</p>
      </div>

      <div className="card">
        <h2>Revenue</h2>
        <p>$5000</p>
      </div>

      <div className="card">
        <h2>Sales</h2>
        <p>320 Orders</p>
      </div>
    </div>
  );
}

export default Dashboard;