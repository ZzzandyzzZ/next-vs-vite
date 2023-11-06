import { Typography } from "@mui/material";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Typography variant="h4" textAlign="center" py={4}>
        Listado de posts
      </Typography>
      {children}
    </>
  );
}
