import React from "react";

const Body = () => {
  return (
    <div className="body">
      <Wallet />
      <PortfolioContent />
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="wallet">
      <h1 className="wallet__title">Wallet</h1>
    </div>
  );
};

const PortfolioContent = () => {
  return (
    <div className="portfolioContent">
      <h1 className="portfolioContent__title">Portfolio</h1>
    </div>
  );
};

export default Body;
