import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Reports.css";

function Reports() {
  return (
    <div className="container">
      <div className="row">
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fKnitting+Incentive+Summary+Report&rs:Command=Render"
          className="card"
        >
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
                  Knitting Incentive Summary Report
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fKnitting+Production+Report+New&rs:Command=Render"
          className="card"
        >
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
                  Knitting Production Report
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fLinking+Production+Report&rs:Command=Render"
          className="card"
        >
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
                  Linking AQC Production Report
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fLinking+Incentive+Report+(Cup+Sim+and+Linking)&rs:Command=Render"
          className="card"
        >
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
                  Linking Incentive Report (Cup Sim and Linking)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
      <div className="row">
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fLinking+Incentive+Report+(HS+and+T)&rs:Command=Render"
          className="card"
        >
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
                  Linking Incentive Report (HS & T)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fDay+Operation+Report+-+Linking&rs:Command=Render"
          className="card"
        >
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
                  Day Operation Report - Linking
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fDay+Operation+Report+-+Knitting&rs:Command=Render"
          className="card"
        >
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
                  Day Operation Report - Knitting
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fAQL&rs:Command=Render"
          className="card"
        >
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
                  AQL Report
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
      <div className="row">
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fDetails+QMES+Report+(Celsius+1)&rs:Command=Render"
          className="card"
        >
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
                  Details QMES Report (Celsius 1)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fKQC+Wise+Production&rs:Command=Render"
          className="card"
        >
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
                  KQC Wise Production
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link
          to="http://administrator:masterpass@10.12.3.182/ReportServer/Pages/ReportViewer.aspx?%2fQMES+Celcius+1%2fKnitting+Endline+Report+(Celsius+1)&rs:Command=Render"
          className="card"
        >
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
                  Knitting Endline Report (Celsius 1)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Reports;
