"use client";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/navigation";

export const ActionCard = ({ userId, children }: { userId: number; children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <CardActionArea
      onClick={() => {
        router.push("/posts/" + userId.toString());
      }}
    >
      {children}
    </CardActionArea>
  );
};
