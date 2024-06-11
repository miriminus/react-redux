import React from "react"
import TestyTest from "./components/TestyTest"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-lightgrey md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Simple
          </span>{" "}
          React Redux State Management
        </h1>

        <TestyTest />
      </div>
    )
  }
}

export default App
