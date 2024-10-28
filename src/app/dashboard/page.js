const Dashboard = async () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-8 mt-8 ">
      <div className="col-span-1">
        <h1 className="text-3xl font-semibold mb-2">Welcome, John Doe</h1>
        <p className="text-base">
          We’re glad to have you back on your dashboard
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
