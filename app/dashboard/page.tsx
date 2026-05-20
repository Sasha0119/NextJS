import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl">
        
        {/* LEFT SIDE */}
        <div className="p-12 flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-blue-700">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Welcome Back
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Secure authentication dashboard built with Next.js App Router.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-16">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <h3 className="text-xl font-semibold">Fast</h3>
              <p className="mt-2 text-sm text-blue-100">
                Optimized server-side rendering.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <h3 className="text-xl font-semibold">Secure</h3>
              <p className="mt-2 text-sm text-blue-100">
                Authentication-ready structure.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 lg:p-14 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-4xl font-bold">
              Dashboard
            </h2>

            <p className="mt-3 text-gray-400">
              Login or create your account.
            </p>

            <div className="mt-10 space-y-5">
              
              {/* LOGIN */}
              <Link
                href="/login"
                className="group block rounded-2xl border border-white/10 bg-[#1e293b] p-6 transition hover:border-indigo-500 hover:bg-[#273449]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">Log In</h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Access your existing account.
                    </p>
                  </div>

                  <div className="text-3xl transition group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </Link>

              {/* REGISTER */}
              <Link
                href="/register"
                className="group block rounded-2xl border border-white/10 bg-[#1e293b] p-6 transition hover:border-blue-500 hover:bg-[#273449]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">Register</h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Create a brand new account.
                    </p>
                  </div>

                  <div className="text-3xl transition group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </Link>
            </div>

            {/* FOOTER */}
            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-500">
              <span>Next.js Backend Page</span>
              <span>Server Component</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}