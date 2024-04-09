import React from "react";
import "@/assets/styles/global.css";

export const metadata = {
  title: "PropertyPulse | Find The PerfectRental",
  description: "Find your dream rental property",
  keywords: "rental,find rentals, find properties",
};

export const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
