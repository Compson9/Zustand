
import {create} from "zustand"

// set the types
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

// create the store instance and intialize the counter 
const useCounterState = create<CounterState>((set)=> ({
    count: 0,
    increment: () => set((state)=> ({count: state.count +1})),
    decrement: () => set((state)=> ({count: state.count -1})),
    reset: ()=> set({count: 0})
}));

export default useCounterState; 
