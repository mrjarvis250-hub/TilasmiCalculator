import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, substract, multiply, reset } from "../state/action-creaters/calculateSlice"; // adjust path

const Home = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
    setNum1("");     // optional but recommended
    setNum2("");
  };

  const handleAdd = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      dispatch(add(n1 + n2));
    }
  };

  const handleSubtract = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      dispatch(substract(n1 - n2));
    }
  };

  const handleMultiply = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      dispatch(multiply(n1 * n2));
    }
  };

  return (
    <div className="container mt-5">
      <h1>Calculate your values</h1>

      <div className="row g-3 align-items-end">
        <div className="col-md-4">
          <label htmlFor="number1" className="form-label">
            Number 1
          </label>
          <input
            type="number"
            className="form-control"
            id="number1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="number2" className="form-label">
            Number 2
          </label>
          <input
            type="number"
            className="form-control"
            id="number2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>

        <div className="col-md-4 d-flex gap-2">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
          <button className="btn btn-warning" onClick={handleSubtract}>
            Subtract
          </button>
          <button className="btn btn-success" onClick={handleMultiply}>
            Multiply
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Clear
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className={result !== 0 ? "text-primary" : ""}>
          Result: <strong>{result}</strong>
        </h3>
      </div>
    </div>
  );
};

export default Home;