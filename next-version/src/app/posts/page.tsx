import { DATABASE_URL } from "@/config";
import { Post } from "@/global";
import { Divider, Paper, Typography } from "@mui/material";

export default async function PostsPage() {
  const response = await fetch(DATABASE_URL + "/posts");
  const posts: Post[] = await response.json();
  return posts.slice(0, 10).map((post) => (
    <Paper key={post.id} elevation={4} sx={{ my: 1, p: 1 }}>
      <Typography variant="h5">{post.title}</Typography>
      <Divider />
      <Typography variant="body1">{post.body}</Typography>
    </Paper>
  ));
}
