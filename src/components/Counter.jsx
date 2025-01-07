import { increment, decrement } from "../state/CounterSlice"
import { useSelector, useDispatch } from "react-redux"

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  
  return (
    <div className='counter'>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}