import { ReactNode } from "react";

export const metadata = {
  title: "Key Press",
  description: "Use of custom hook",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
