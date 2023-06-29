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
import event1 from "../../images/EventImg/chicken.jpg";
import event2 from "../../images/EventImg/happy.jpg";
import event3 from "../../images/EventImg/oh.jpg";

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
    <Box p={3}>
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
                src={event3}
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
                  만원의 행복
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  부담 없는 식단 쇼핑
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
                src={event1}
                alt="coming soon"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  훈제 닭가슴살 이벤트!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  참나무 훈연으로 담백한 풍미 가득
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
