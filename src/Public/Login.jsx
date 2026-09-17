import React, { useState } from "react";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdSchool,
  MdQrCodeScanner,
} from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const signIn = () => {
    console.log("Sign in clicked");
  };

  const institutionLogin = () => {
    console.log("Institution login clicked");
  };

  const scanQR = () => {
    console.log("Scan QR clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl text-center">
        
        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-green-700 mb-2 sm:mb-3">
            Learnity
          </h1>

          <p className="text-sm sm:text-base font-bold text-gray-500">
            Academic Gateway
          </p>
        </header>

        {/* Login Card */}
        <section className="w-full rounded-2xl border hover:border-gray-400 border-gray-200 bg-white px-5 py-6 hover:shadow-xl sm:px-8 sm:py-7 md:px-10">
          
          {/* Email */}
          <div className="mb-6 sm:mb-7 text-left">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-800"
            >
              Email / College ID
            </label>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

              <input
                type="text"
                id="email"
                defaultValue=""
                placeholder="Email / College ID"
                className="h-12 w-full rounded-xl border border-gray-400
                hover:shadow-md bg-transparent pl-10 pr-4 text-sm sm:text-base text-gray-900 outline-none transition-all duration-200 focus:border-green-700 focus:ring-2 focus:ring-blue-700/10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6 sm:mb-7 text-left">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-800"
            >
              Password
            </label>

            <div className="relative">
              <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                defaultValue=""
                placeholder="Password"
                className="h-12 w-full rounded-xl border border-gray-400 bg-transparent pl-10 pr-11 text-sm sm:text-base text-gray-900 outline-none transition-all duration-200 focus:border-green-700 focus:ring-2 focus:ring-blue-700/10"
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 transition-colors duration-200 hover:text-gray-600"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="mb-7 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-gray-500">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-green-700"
              />

              <span>Remember me</span>
            </label>

            <a
              href="#"
              className="font-medium text-green-800 transition-colors duration-200 hover:text-green-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In */}
          <button
            type="button"
            onClick={signIn}
            className="w-full rounded-lg bg-green-700 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-800 active:scale-[0.98]"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3 text-sm text-gray-500 sm:my-8">
            <span className="h-px flex-1 bg-gray-200"></span>

            <span className="whitespace-nowrap">
              Or continue with
            </span>

            <span className="h-px flex-1 bg-gray-200"></span>
          </div>

          {/* Alternative Login */}
          <div className=" sm:grid sm:grid-cols-1">
            
            <button
              type="button"
              onClick={institutionLogin}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm"
            >
              <MdSchool className="text-lg text-gray-600" />
              <span>Institution</span>
            </button>

            {/* <button
              type="button"
              onClick={scanQR}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
            >
              <MdQrCodeScanner className="text-lg text-gray-600" />
              <span>Scan QR</span>
            </button> */}

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-xs text-gray-500 sm:mt-10 sm:text-sm">
          Need help?{" "}
          <a
            href="#"
            className="text-green-700 transition-colors duration-200 hover:text-green-800 hover:underline"
          >
            Contact Support
          </a>
        </footer>

      </div>
    </div>
  );
};

export default Login;


