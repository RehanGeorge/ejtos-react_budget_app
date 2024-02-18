import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert("The maximum budget is £20,000");
      return;
    }
    setNewBudget(event.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  }, [newBudget, dispatch]);

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        step="10"
        min="0"
        max="20000"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
