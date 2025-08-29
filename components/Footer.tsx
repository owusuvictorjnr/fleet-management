import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-8 mb-4">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Battery Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
