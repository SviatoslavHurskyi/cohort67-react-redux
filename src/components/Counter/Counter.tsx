import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counterSlice/counterSlice"

import Button from "components/Button/Button"

import "./styles.css"

function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    const action = counterSliceActions.plus()
    dispatch(action)
  }

  const onDivide =() =>{dispatch(counterSliceActions.divide(3))
   
  }

  const onMultiply = () =>{ dispatch(counterSliceActions.multiply(3))}

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="/" onClick={onDivide} />
      </div>
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
      <div className="button_control">
        <Button name="*" onClick={onMultiply} />
      </div>
    </div>
  )
}

export default Counter
