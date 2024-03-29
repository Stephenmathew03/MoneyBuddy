import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Financiallimit = () => {
  const [totalIncome, setTotalIncome] = useState("");
  const [currentMonthExpenses, setCurrentMonthExpenses] = useState("");
  const [lastMonthExpenses, setLastMonthExpenses] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  const calculateRemainingBudget = () => {
    const remainingBudget = budget - currentMonthExpenses;
    return remainingBudget;
  };

  return (
    <>
      <div className="gradient-background">
        <div className="px-4 pt-5 text-center border-bottom">
          <h1 className="display-4 fw-bold " id="header" style={{ color: "white" }}>
          Financial Limit
          </h1>
          <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" id="gg" style={{ color: "white" }}>
              Users can define short-term and long-term financial goals, such as
              saving for a vacation or reducing debt. The system tracks users'
              progress toward their goals and provides actionable steps to stay
              on track.
            </p>
          </div>
          <div className="overflow-hidden">
            <div
              className="container px-5"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid border shadow-lg mb-4"
                alt="Example image"
                width={700}
                height={500}
                loading="lazy"
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "white" }}>Total Income (Monthly):</label>
              <div className="input-group mb-3">
                <span className="input-group-text">₹</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Total Income"
                  value={totalIncome}
                  onChange={(e) => setTotalIncome(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "white" }}>Current Month Expenses:</label>
              <div className="input-group mb-3">
                <span className="input-group-text">₹</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Current Month Expenses"
                  value={currentMonthExpenses}
                  onChange={(e) => setCurrentMonthExpenses(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "white" }}>Last Month Expenses:</label>
              <div className="input-group mb-3">
                <span className="input-group-text">₹</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Last Month Expenses"
                  value={lastMonthExpenses}
                  onChange={(e) => setLastMonthExpenses(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "white" }}>Set Budget:</label>
              <div className="input-group mb-3">
                <span className="input-group-text">₹</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Set Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="container px-5"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              {/* Your existing image */}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="mb-3" style={{ color: "white" }}>Budget Status</h2>
            {currentMonthExpenses > budget ? (
              <p className="fw-bold" style={{ color: "red" }}>
                Exceeded Budget: ₹{Math.max(currentMonthExpenses - budget, 0).toFixed(2)}
              </p>
            ) : (
              <p className="fw-bold" style={{ color: "green" }}>
                Remaining Budget: ₹{Math.max(calculateRemainingBudget(), 0).toFixed(2)}
              </p>
            )}
          </div>
          {/* Display the remaining amount */}
          <div className="mt-4">
            <h2 className="mb-3" style={{ color: "white" }}>Remaining Amount</h2>
            <p className="fw-bold" style={{ color: "blue" }}>
              Remaining Amount: ₹{Math.max(totalIncome - currentMonthExpenses, 0).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financiallimit;


