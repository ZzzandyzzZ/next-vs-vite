import { Paper, Typography } from "@mui/material";

export default function PrivatePage() {
  const auth = false;
  if (auth) {
    return <>La contraseña es Andy123</>;
  }
  return (
    <Paper sx={{ height: "400px", mt: 2, width: "100%", p: 2 }}>
      <Typography variant="h4" textAlign="center">
        No tienes accesso
      </Typography>
    </Paper>
  );
}
