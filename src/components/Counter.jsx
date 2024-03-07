import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../app/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.counters;
  });

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  //   console.log(data);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-5">
        <h1 className="text-red-400 text-5xl">Value: {data.value}</h1>
      </div>

      <div className="my-7 p-4">
        <button
          className="bg-green-400 rounded-sm p-2 text-white mx-2"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          className="bg-red-400 rounded-sm p-2 text-white mx-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
