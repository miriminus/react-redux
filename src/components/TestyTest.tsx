import React from "react"
import { useSelector } from "react-redux"
import MySelectComponent from "./Select"
import { RootState } from "../app/store"

const TestyComponent = () => {
  const selectedOptions = useSelector(
    (state: RootState) => state.selection.selectedOptions,
  )

  const doSomething = () => {
    console.log(JSON.stringify(selectedOptions))
  }

  const isButtonDisabled = () => {
    return !Object.values(selectedOptions).some((value) => value > 0)
  }

  return (
    <div className="text-black p-4 w-56">
      <MySelectComponent />
      <button
        className="bg-green-500 hover:bg-green-700 active:bg-green-800 disabled:bg-pink-400 px-2 py-1 rounded-md text-white"
        name="click"
        onClick={doSomething}
        disabled={isButtonDisabled()}
      >
        Save Changes
      </button>
    </div>
  )
}

export default TestyComponent
