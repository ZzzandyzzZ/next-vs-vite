import type { Metadata } from "next";
import { Box, Container, CssBaseline } from "@mui/material";

import "@fontsource/roboto/700.css";
import { ResponsiveAppBar } from "@/components";

export const metadata: Metadata = {
  title: "Next App",
  description: "Creado por Andy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Container disableGutters>
          <Box
            component="main"
            px={2}
            width="100%"
            alignItems="center"
            display="flex"
            bgcolor="#C7CAFC"
            flexDirection="column"
            justifyContent="center"
            minHeight="100vh"
          >
            <ResponsiveAppBar />
            {children}
          </Box>
        </Container>
      </body>
    </html>
  );
}
