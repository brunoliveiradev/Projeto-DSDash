import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-secondary py-3">MISSION DASHBOARD</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> MISSION SUCESS RATE (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">KILL RATE (%)</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="d-flex justify-content-center text-secondary ">JEDI Mission History</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;