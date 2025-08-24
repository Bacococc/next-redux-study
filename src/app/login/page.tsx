import React from "react";

function Login() {

  return(
    <main className="grid place-items-center">
      <div className=" border-1 border-gray-500 m-20 p-8 rounded-lg">
        <h1 className="text-center text-lg">Login to </h1>
        <form className="flex flex-col">
          <input className="mt-6 p-4 rounded-lg" placeholder="ID"/>
          <input className="mt-6 p-4 rounded-lg" placeholder="PW"/>
        </form>
        <button className="mt-6 border rounded-lg p-2 item-center" >Click to login</button>
      </div>
    </main>
  )
};

export default Login;