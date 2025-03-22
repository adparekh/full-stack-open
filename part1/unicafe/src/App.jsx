import { useState } from "react";

const Button = ({ handleOnClick, text }) => (
  <button onClick={handleOnClick}>{text}</button>
);

const StatisticLine = ({ type, value }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total == 0) {
    return <p>No Feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine type={"good"} value={good} />
        <StatisticLine type={"neutral"} value={neutral} />
        <StatisticLine type={"bad"} value={bad} />
        <StatisticLine type={"total"} value={total} />
        <StatisticLine type={"average"} value={total / 3} />
        <StatisticLine type={"positive"} value={`${(good / total) * 100} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setTotal(newGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setTotal(good + newNeutral + bad);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setTotal(good + neutral + newBad);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleOnClick={handleGoodClick} text={"good"} />
      <Button handleOnClick={handleNeutralClick} text={"neutral"} />
      <Button handleOnClick={handleBadClick} text={"bad"} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
