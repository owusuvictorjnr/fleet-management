import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-md bg-white rounded-lg  p-6">
      {/* Header */}
      <SwitchLink />

      {/* auth page content */}
      <main>{children}</main>
    </div>
  );
}

function SwitchLink() {
  // detect current pathname
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.includes("login")) {
      return (
        <Link
          href="/signup"
          className="text-sm text-blue-500 flex justify-center mb-6 hover:underline"
        >
          Don&apos;t have an account? Sign up
        </Link>
      );
    }
    if (path.includes("signup")) {
      return (
        <Link
          href="/login"
          className="text-sm text-blue-500 flex justify-center mb-6 hover:underline"
        >
          Already have an account? Log in
        </Link>
      );
    }
  }
  return null;
}
