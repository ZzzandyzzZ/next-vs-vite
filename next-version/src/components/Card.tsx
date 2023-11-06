import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, Divider } from "@mui/material";
import { User } from "@/global";
import { ActionCard } from ".";

type Props = Pick<User, "name" | "username" | "email" | "website" | "id">;

export function ActionAreaCard({ id, name, username, email, website }: Props) {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <ActionCard userId={id}>
        <Box display="flex" pt={2} justifyContent="center">
          <Avatar aria-label="recipe" sx={{ width: 80, height: 80, fontSize: 50 }}>
            {name.charAt(0)}
          </Avatar>
        </Box>
        <CardContent>
          <Divider />
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            @{username}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" textAlign="center">
            {email}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" textAlign="center">
            {website}
          </Typography>
        </CardContent>
      </ActionCard>
    </Card>
  );
}
