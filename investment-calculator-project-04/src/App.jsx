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

  function handleInputForm(e) {
    const { name, value } = e.target;
    let inputValue = value;
    if (value.length) {
      inputValue =
        name === "expectedReturn" ? parseFloat(value) : parseInt(value);
    }

    setInvestmentData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  }
  const results = calculateInvestmentResults(investmentData);
  return (
    <>
      <Header />
      <UserInputForm handleForm={handleInputForm} formData={investmentData} />
      {investmentData.duration < 0 ? (
        <p className="center">
          Please enter a duration that is greater than zero
        </p>
      ) : (
        <Table headers={DATA_HEADER} data={results} />
      )}
    </>
  );
}

export default App;
