import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState("");

  useEffect(() => {
    async function getMeals() {
      fetch("http://localhost:3000/meals")
        .then((res) => res.json())
        .then((data) => setMeals(data));
    }

    getMeals();
  }, []);

  console.log(meals);
  return (
    <>
      <h1 id="main-header">TEST</h1>
    </>
  );
}

export default App;
