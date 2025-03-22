import { useState } from "react";

const Anecdotes = ({ anecdote, vote }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {vote} votes</p>
    </div>
  );
};

const MaxVotes = ({ anecdotes, votes }) => {
  const maxVote = Math.max(...votes);
  const maxVoteIdx = votes.indexOf(maxVote);

  return (
    <div>
      <p>{anecdotes[maxVoteIdx]}</p>
      <p>Has {votes[maxVoteIdx]} votes</p>
    </div>
  );
};

const Button = ({ handleOnClick, text }) => (
  <button onClick={handleOnClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const onSelectClick = () => {
    const randomIdx = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIdx);
  };

  const OnVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button handleOnClick={OnVoteClick} text={"Vote"} />
      <Button handleOnClick={onSelectClick} text={"Next Anecdote"} />
      <h1>Anecdote with most votes</h1>
      <MaxVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
