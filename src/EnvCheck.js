import React from "react";

function EnvCheck() {
  return (
    <div>Environment variable: {process.env.REACT_APP_API_URL}</div>
  )
}

export default EnvCheck;