import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import event1 from "../../images/EventImg/1.jpg";
import event2 from "../../images/EventImg/2.png";
import event3 from "../../images/EventImg/3.png";
import event4 from "../../images/EventImg/4.png";

const EventPage = () => {
  const userNo = useSelector((state) => state.userNo);
  const navi = useNavigate({});
  //로그인이 안되있으면 메인페이지로 돌아감
  useEffect(() => {
    if (userNo === 0) {
      navi("/");
    }
  });
  return (
    <Box p={3} pb={8}>
      <Typography
        variant="h5"
        align="center"
        color="black"
        sx={{ m: "16px auto 8px" }}
      >
        이벤트
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card sx={{ my: "16px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={event1}
                alt="coming soon"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  오운완 챌린지!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  챌린지에 참여하고 다양한 혜택을 누리세요!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ my: "16px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={event2}
                alt="coming soon"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  스타칼리휘트니스 연희점
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  오픈 이벤트! 전종목 회원권 초초특가
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ my: "16px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={event3}
                alt="coming soon"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  더스토리짐 전지점
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  방문상담만 해도 선물이? 뽑기 EVENT!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ my: "16px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={event4}
                alt="coming soon"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  에이블짐 강남점
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  PT 공동구매 이벤트!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventPage;
