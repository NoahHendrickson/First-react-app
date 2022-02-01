import React from "react";

function Body() {
  return (
    <div className="body">
      <Wallet />
      <PortfolioContent />
    </div>
  );
}

export default Body;

function Wallet() {
  return (
    <div className="wallet">
      <h1 className="wallet__title">Wallet</h1>
    </div>
  );
}

function PortfolioContent() {
  return (
    <div className="portfolioContent">
      <h1 className="portfolioContent__title">Portfolio</h1>
    </div>
  );
}
