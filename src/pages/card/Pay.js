import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopNavbar from "../../components/TopNavbar";
import axios from "axios";
import appStyle from "../../App.module.css";
import Receipt from "../../components/Receipt";

function Pay(props) {
  const navi = useNavigate();
  const location = useLocation();
  const { storeNo, storeName } = location.state;
  const [payData, setPayData] = useState({ storeNo: storeNo });
  const [accBal, setAccBal] = useState(0);
  const [poBal, setPoBal] = useState(0);

  const handleChange = (e) => {
    const { name, value, max } = e.target;
    console.log(max);
    setPayData({ ...payData, [name]: value });
  };

  useEffect(() => {
    axios({
      url: "/home/pay",
      method: "get",
      params: { userNo: "110" },
    })
      .then((response) => {
        console.log(response.data);
        setAccBal(response.data.accountBalance);
        setPoBal(response.data.pointBalance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePay = () => {
    axios({
      url: "/home/pay",
      method: "post",
      data: payData,
    })
      .then((response) => {
        navi("/home/pay/complete", {
          state: {
            data: response.data,
            payData: payData,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const useMaxPoint = () => {
    if (payData.amount) {
      let usePoint = poBal > payData.amount ? payData.amount : poBal;
      document.getElementById("point").value = usePoint;
      setPayData({ ...payData, point: usePoint });
    }
    console.log("payData", payData);
  };

  return (
    <Box className={appStyle.gradient} p={3}>
      <Box>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ m: "24px auto 12px" }}
        >
          결제 페이지
        </Typography>
        <form
          style={{
            height: "auto",
            backgroundColor: "#eee",
            padding: "24px",
            textAlign: "center",
            borderRadius: "12px",
          }}
        >
          <Grid container spacing={2}>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                align="center"
                sx={{ m: "24px auto 12px" }}
              >
                {storeName}
              </Typography>
            </Box>
            <Grid item xs={12}>
              <TextField
                label="결제 금액"
                required
                fullWidth
                type="number"
                id="amount"
                name="amount"
                onChange={handleChange}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  max: accBal,
                  style: { textAlign: "right" },
                }}
                helperText="결제할 금액을 가맹점에 여쭤보삼"
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2" align="left" pl={1}>
                카드 잔액
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" align="right" pr={1}>
                {accBal}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: "12px" }}>
              <TextField
                label="포인트"
                fullWidth
                type="number"
                id="point"
                name="point"
                onChange={handleChange}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  min: "100",
                  max: poBal,
                  style: { textAlign: "right" },
                }}
                helperText="100 포인트 이상 보유시 사용 가능"
              />
              {/* <FormHelperText>100 포인트 이상 보유시 사용 가능</FormHelperText> */}
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2" align="left" pl={1}>
                보유 포인트
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                variant="body2"
                align="right"
                pr={1}
                sx={{ textDecoration: "underline" }}
                onClick={useMaxPoint}
              >
                {poBal}
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              backgroundColor: "lightgray",
              padding: "16px 12px 8px",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              mt: "32px",
              mb: "-4px",
            }}
          >
            <Receipt payData={payData} flag={true} />
          </Box>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mb: 1 }}
            size="large"
            onClick={handlePay}
          >
            결제
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Pay;
