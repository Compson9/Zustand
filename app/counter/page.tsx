"use client";

import { Button } from "@/components/ui/button";
import useCounterStore from "@/store/counterStore";

export default function CounterPage() {



const count = useCounterStore((state)=> state.count);
const increment = useCounterStore((state)=> state.increment);
const decrement = useCounterStore((state)=> state.decrement);
const reset = useCounterStore((state)=> state.reset);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-green-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          Cool Counter
        </h1>
        <div className="flex flex-col items-center">
          <div className="text-9xl font-bold text-yellow-500 mb-8">{count}</div>
          <div className="flex space-x-4">
            <Button
            onClick={decrement}
              className="bg-gray-200 hover:bg-gray-300 text-green-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200"
            >
              -
            </Button>
            <Button
            onClick={increment}
              className="bg-gray-200 hover:bg-gray-300 text-green-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200"
            >
              +
            </Button>
          </div>
          <Button
          onClick={reset}
            className="mt-6 bg-white hover:bg-green-800 hover:text-white text-green-800 font-bold py-4 px-4 rounded-full text-xl transition-colors duration-200"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}