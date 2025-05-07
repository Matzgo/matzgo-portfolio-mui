import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function AssetItem({ title, description, imageUrl, link }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "background.secondary",
      }}
    >
      <CardActionArea component={Link} to={link}>
        <CardMedia component="img" height="260" image={imageUrl} alt={title} />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
