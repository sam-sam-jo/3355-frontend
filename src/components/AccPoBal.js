import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/MainCSS/AccPoBal.css";
import axios from "axios";

const AccPoBal = () => {
  const [cardBalance, setCardBalance] = useState(0);
  const [pointBalance, setPointBalance] = useState(0);

  useEffect(() => {
    axios({
      url: "/home",
      method: "get",
      params: { userNo: "110" },
    })
      .then((response) => {
        console.log(response);
        setCardBalance(response.data.accountBalance);
        setPointBalance(response.data.pointBalance);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Box className="root1">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="payment" className="linked">
          <Card className="card1">
            <CardContent>
              <Typography className="title" variant="h5" component="h2">
                카드 잔액
              </Typography>
              <Typography className="balance" variant="body1" component="p">
                {cardBalance} 원
              </Typography>
            </CardContent>
          </Card>
        </Link>

        <Link to="point" className="linked">
          <Card className="card1">
            <CardContent>
              <Typography className="title" variant="h5" component="h2">
                포인트 잔액
              </Typography>
              <Typography className="balance" variant="body1" component="p">
                {pointBalance} 원
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Stack>
    </Box>
  );
};

export default AccPoBal;
