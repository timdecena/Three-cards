import React from 'react';
import { Card, CardMedia } from "@mui/material";

const CardItem = ({ card }) => (
  <Card sx={{ width: 100, height: 150 }}>
    {card && <CardMedia component="img" image={card} alt="Playing card" />}
  </Card>
);

export default CardItem;
