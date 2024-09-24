import React from "react";

function LoginSignup() {
  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-sky-500 to-purple-600">
      <div className=" px-20 m-32 py-10 flex-col flex gap-3 rounded-md  bg-[#fcfcfc65]">
        <h1 className="text-2xl text-center font-semibold">Sign Up</h1>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Your Username" className="border-slate-600 py-2 px-2 rounded-md border-2 w-96" />
          <input type="text" placeholder="Your Email ID" className="border-slate-600 py-2 px-2 rounded-md border-2 w-96" />
          <input type="password" placeholder="Your Password" className="border-slate-600 py-2 px-2 rounded-md border-2 w-96" />
        </div>
        <button className="bg-red-500 py-2 rounded-md  w-96">Continue</button>
        <p className="text-sm">
          Already have an account? <span className="text-red-500 font-bold">Login Here</span>
        </p>
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-sm">
            I have read <span className="text-blue-600">Terms & Conditions</span> and agree
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
