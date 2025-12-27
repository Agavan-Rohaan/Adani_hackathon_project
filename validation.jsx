import { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | signup
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (mode === "signup" && !form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (mode === "signup") {
      if (!form.confirmPassword) {
        newErrors.confirmPassword = "Please re-enter password";
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (mode === "login") {
      console.log("Login payload", {
        email: form.email,
        password: form.password,
      });
    } else {
      console.log("Signup payload", form);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          GearGuard
        </h1>
        <p className="text-center text-slate-400 mb-8">
          {mode === "login"
            ? "Securely sign in to track maintenance"
            : "Create your GearGuard account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {mode === "signup" && (
            <div>
              <input
                type="password"
                placeholder="Re-enter Password"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition font-semibold"
          >
            {mode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-slate-400">
          {mode === "login" ? (
            <>
              <button className="hover:underline">Forgot password?</button>
              <span className="mx-2">|</span>
              <button
                onClick={() => setMode("signup")}
                className="text-emerald-400 hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-emerald-400 hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
