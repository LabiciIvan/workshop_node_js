import { handleInputValue, resetInput } from "../state/InputSlice"
import { useSelector, useDispatch } from "react-redux"

export default function Input() {

  const input = useSelector((state) => state.input.value)
  const dispatch = useDispatch();
  
  return (
    <>
      <input
        placeholder="Write something..."
        onChange={(e) => dispatch(handleInputValue(e.target.value))}
        value={input}
      />
      <h3>{input}</h3>
      <button onClick={() => dispatch(resetInput())}>Reset Input</button>
    </>
  )
}