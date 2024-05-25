import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Reports() {
  return (
    <Link to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fKnitting+Incentive+Summary+Report&rs:Command=Render">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/w1200-h630-p-k-no-nu/status-report.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              Daily Section Wise Wastage Rejection Details
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default Reports;
