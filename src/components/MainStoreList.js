import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../styles/MainCSS/StoreList.css";
import health1 from "../images/ListImg/ablegym.png";
import health2 from "../images/ListImg/fitnesspeople.png";
import health3 from "../images/ListImg/spogym.png";
import health4 from "../images/ListImg/bodystargym.png";
import trainer1 from "../images/ListImg/김성욱트레이너.png";
import trainer2 from "../images/ListImg/김성준트레이너.png";
import trainer3 from "../images/ListImg/안재훈트레이너.png";
import trainer4 from "../images/ListImg/조성무트레이너.png";
import { Divider } from "@mui/material";

function MainStoreList({ children, value, index }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ p: 2 }}
    >
      {value === index && children}
    </Box>
  );
}

MainStoreList.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ListTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="storeList">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="헬스장" {...a11yProps(0)} />
        <Tab label="트레이너" {...a11yProps(1)} />
      </Tabs>

      {/* 헬스장 목록 */}
      <MainStoreList value={value} index={0}>
        <Grid container spacing={2} className="gridList">
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pb: "16px",
            }}
          >
            <img
              src={health1}
              style={{
                objectFit: "cover",

                height: "30%",
                width: "100%",
              }}
              alt="헬스장이미지"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center", pb: "12px" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              AbleGYM
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pb: "16px",
            }}
          >
            <img
              src={health2}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
              alt="헬스장이미지"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center", pb: "12px" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              FITNESS PEOPLE
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pb: "16px",
            }}
          >
            <img
              src={health3}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
              alt="헬스장이미지"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center", pb: "12px" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                alignItems: "center",
                margin: "0 auto",
              }}
              align="center"
            >
              SPOGYM
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={health4}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt="헬스장이미지"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                alignItems: "center",
                margin: "0 auto",
              }}
              align="center"
            >
              BodyStarGYM
            </Typography>
          </Grid>
        </Grid>
      </MainStoreList>

      {/* 트레이너 목록 */}
      <MainStoreList value={value} index={1}>
        <Grid container spacing={2} className="gridList">
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={trainer1}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                marginBottom: "10px",
              }}
              alt="김성욱트레이너"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "18px",
                alignItems: "center",
                margin: "0 auto",
              }}
              align="center"
            >
              김성욱 트레이너
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={trainer2}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                paddingBottom: "16px",
              }}
              alt="김성준 트레이너"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "18px",
                alignItems: "center",
                margin: "0 auto",
              }}
              align="center"
            >
              김성준 트레이너
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={trainer3}
              style={{
                objectFit: "cover",
                paddingBottom: "16px",
                height: "100%",
                width: "100%",
              }}
              alt="안재훈 트레이너"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "18px",
                alignItems: "center",
                margin: "0 auto",
              }}
              align="center"
            >
              안재훈 트레이너
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={trainer4}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt="조성무 트레이너"
            />
          </Grid>
          <Grid
            item
            xs={7}
            className="benefit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "18px",
                alignItems: "center",
                margin: "0 auto",
              }}
              align="center"
            >
              조성무 트레이너
            </Typography>
          </Grid>
        </Grid>
      </MainStoreList>
    </Box>
  );
}

export default ListTabs;
