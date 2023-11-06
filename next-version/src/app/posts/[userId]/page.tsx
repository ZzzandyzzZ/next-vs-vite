import { DATABASE_URL } from "@/config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Post, User } from "@/global";

interface Props {
  params: {
    userId: string;
  };
}

export default async function UserPosts({ params }: Props) {
  console.log(params.userId);
  const response = await fetch(`${DATABASE_URL}/posts?userId=${params.userId}`);
  const posts: Post[] = await response.json();

  const userResponse = await fetch(`${DATABASE_URL}/users/${params.userId}`);
  const user: User = await userResponse.json();

  return (
    <>
      <Typography variant="h5" textAlign="center" py={4}>
        Autor: {user.name}
      </Typography>
      {posts.slice(0, 5).map(({ title, body, id }) => (
        <Accordion key={id} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{body}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
