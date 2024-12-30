
import {create} from "zustand"
import {persist} from "zustand/middleware"



// set the types
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

// create the store instance and intialize the counter 
const useCounterState = create<CounterState>()(
    persist(
        (set)=> ({
    count: 0,
    increment: () => set((state)=> ({count: state.count +1})),
    decrement: () => set((state)=> (
        {count: state.count > 0 ? state.count -1 : 0})),
    reset: ()=> set({count: 0}),
}), 
{name: "counter-storage"}
    ));

export default useCounterState; 

