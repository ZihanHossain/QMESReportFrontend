import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Css/EditReport.module.css";
import { Button, Drawer } from "@mui/material";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DrawerList from "../component/DrawerList";

const EditReport = () => {
  const [deleteStartDate, setDeleteStartDate] = useState(new Date());
  const [deleteEndDate, setDeleteEndDate] = useState(new Date());
  const [pullStartDate, setPullStartDate] = useState(new Date());
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  async function onDelete() {
    try {
      fetch(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/deleteKnittingDataByDate`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            startDate: formatDate(deleteStartDate),
            endDate: formatDate(deleteEndDate),
          }),
        }
      )
        .then(async (response) => {
          const res = await response.json();

          if (res && res[0] > 0) {
            NotificationManager.success(
              `Data deleted from ${formatDate(deleteStartDate)} to ${formatDate(
                deleteEndDate
              )}. \n
              Number of data deleted: ${res[0]}`,
              "Delete Data"
            );
          } else {
            NotificationManager.warning("No data was affected.", "Delete Data");
          }
        })
        .catch((error) => {
          NotificationManager.error(
            "An error occurred during deletion.",
            "Delete Data"
          );
          console.error("Error:", error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function onPull() {
    try {
      fetch(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/pullKnittingDataByDate`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: formatDate(pullStartDate),
          }),
        }
      )
        .then(async (response) => {
          const res = await response.json();

          if (res && res.status == "success") {
            NotificationManager.success(
              `Data pulled for ${formatDate(pullStartDate)}
              )}. \n
              Number of data deleted: ${res.rowsAffected}`,
              "Pull Data"
            );
          } else {
            NotificationManager.warning("No data was affected.", "Pull Data");
          }
        })
        .catch((error) => {
          NotificationManager.error(
            "An error occurred during deletion.",
            "Pull Data"
          );
          console.error("Error:", error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    const startDate = new Date(date);
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(startDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className={styles.container}>
      <div>
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>

      <div className={styles.drawerButton}>
        <Button variant="text" onClick={toggleDrawer(true)}>
          <ArrowForwardIosIcon />
        </Button>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.dataBar}>
          <div className={styles.row}>
            <div className={styles.dataBarText}>Start Date: </div>
            <div className={styles.datePicker}>
              <DatePicker
                selected={deleteStartDate}
                onChange={(date) => setDeleteStartDate(date)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.dataBarText}>End Date: </div>
            <div className={styles.datePicker}>
              <DatePicker
                selected={deleteEndDate}
                onChange={(date) => setDeleteEndDate(date)}
              />
            </div>
          </div>

          <Button variant="contained" onClick={() => onDelete()}>
            Delete
          </Button>
        </div>
        <div className={styles.dataBar}>
          <div className={styles.row}>
            <div className={styles.dataBarText}>Date: </div>
            <div className={styles.datePicker}>
              <DatePicker
                selected={pullStartDate}
                onChange={(date) => setPullStartDate(date)}
              />
            </div>
          </div>

          <Button variant="contained" onClick={() => onPull()}>
            Pull Data
          </Button>
        </div>
        <NotificationContainer />
      </div>
    </div>
  );
};

export default EditReport;
