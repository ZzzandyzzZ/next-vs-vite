import { ActionAreaCard } from "@/components/Card";
import { DATABASE_URL } from "@/config";
import { User } from "@/global";
import { Grid } from "@mui/material";

export default async function BlogPage() {
  const response = await fetch(DATABASE_URL + "/users");
  const users: User[] = await response.json();
  return (
    <>
      {/* <Box display="flex" gap={2} pt={3} flexWrap={"wrap"}> */}
      <Grid container spacing={2} pt={3}>
        {users.slice(0, 6).map((user) => (
          <Grid item key={user.id} xs={4}>
            <ActionAreaCard {...user} />
          </Grid>
        ))}
      </Grid>
      {/* </Box> */}
    </>
  );
}
