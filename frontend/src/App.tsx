import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-secondary py-3">PROFIT DASHBOARD</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">SUCESS RATE (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">KILL RATE (%)</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-secondary">All Baskar Profit ($)</h2>
        </div>
        
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
