import { Container } from "@mui/material";
import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="p-all-2">
      <Container maxWidth="md">{children}</Container>
    </main>
  );
};

export default Layout;
