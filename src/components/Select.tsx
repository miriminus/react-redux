import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { incrementByAmount } from "../state/selection/selectionSlice"
import { RootState } from "../state/store"

interface MyObjectItem {
  name: string
  value: number
  mandatory: boolean
  maxValue: number
}

const MySelectComponent = () => {
  const dispatch = useDispatch()
  const selectedOptions =
    useSelector((state: RootState) => state.selection.selectedOptions) || {}

  const myObject: MyObjectItem[] = [
    { name: "First", value: 0, mandatory: true, maxValue: 3 },
    { name: "Second", value: 0, mandatory: true, maxValue: 2 },
    { name: "Third", value: 0, mandatory: true, maxValue: 1 },
    { name: "Fourth", value: 0, mandatory: true, maxValue: 5 },
    { name: "Fifth", value: 0, mandatory: true, maxValue: 4 },
    { name: "Sixth", value: 0, mandatory: true, maxValue: 6 },
  ]

  const handleSelectChange = (name: string, selectedValue: any) => {
    dispatch(incrementByAmount({ name, value: selectedValue }))
  }

  return (
    <ul className="flex-wrap">
      {myObject.map((item) => (
        <li
          key={item.name}
          className="list-none flex justify-between p-0.5 m-3"
        >
          {item.name}:
          <select
            className="border border-gray-300 rounded-md"
            value={selectedOptions[item.name] || 0} // Fallback to 0 if not gesetzt
            onChange={(e) =>
              handleSelectChange(item.name, parseInt(e.target.value))
            }
          >
            {[...Array(item.maxValue + 1)].map((_, optionIndex) => (
              <option key={optionIndex} value={optionIndex}>
                {optionIndex}
              </option>
            ))}
          </select>
        </li>
      ))}
    </ul>
  )
}

export default MySelectComponent
