import React from "react";

const Container = ({ children }) => {
  return (
    <main className="max-w-7xl mx-auto p-3 min-h-screen bg-background">
      {children}
    </main>
  );
};

export default Container;
