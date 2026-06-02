import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/TableForm";
import UserInputForm from "./components/UserInputForm";
import { DATA_HEADER, DATA_SAMPLE } from "./SAMPLEDATA";
import { calculateInvestmentResults } from "./util/investment";

const userInvestmentInputData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentData, setInvestmentData] = useState({
    ...userInvestmentInputData,
  });


  const sampleData = calculateInvestmentResults({
    initialInvestment: 15000,
    annualInvestment: 9000,
    expectedReturn: 5.5,
    duration:2
  });
  return (
    <>
      <Header />
      <UserInputForm editInvestment={setInvestmentData} />
      <Table headers={DATA_HEADER} data={DATA_SAMPLE} />
    </>
  );
}

export default App;
