import React, { useEffect, useState } from "react";
import logo from "../../images/Logo_3355.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router";

import axios from "axios";
import BackNavbar from "../../components/BackNavbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";

const auththeme = createTheme({
  typography: {
    fontFamily: "GmarketSans",
  },
  palette: {
    primary: {
      main: "#FFFFFF", //배경색
      contrastText: "#17B7BD", //글자색FFFFFF
    },
    secondary: {
      main: "#17B7BD", //배경색
      contrastText: "#FFFFFF", //글자색
    },
  },
});
const Singup = () => {
  //유저 변수들
  const navi = useNavigate({});
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();
  const [userBirth, setUserBirth] = useState();
  const [userGender, setUserGender] = useState(1);
  const [userNickname, setUserNickname] = useState();
  const [user, setUser] = useState({});

  //조건들 정규식
  const emailRegEx =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passRegEx = /^[A-Za-z0-9_]+[A-Za-z0-9]{4,7}$/;
  const birthRegEx = /^[0-9]{6}$/;
  const genderRegEx = /^[0-9]{1}$/;
  const nickRegEx = /^[A-Za-z0-9_ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,5}$/;

  //성공여부확인
  const [userEmailBoo, setUserEmailBoo] = useState(false);
  const [userPassBoo, setUserPassBoo] = useState(false);
  const [userBirthBoo, setUserBirthBoo] = useState(false);
  const [userGenderBoo, setUserGenderBoo] = useState(false);
  const [userNicknameBoo, setUserNicknameBoo] = useState(false);

  //버튼잠금
  const [emaildisable, setEmailDisable] = useState(true);
  const [nickdisable, setNickDisable] = useState(true);
  const [userdisable, setUserDisable] = useState(true);

  useEffect(() => {
    if (
      //유저정보 합격이 한개라도 없으면
      userEmailBoo === true &&
      userPassBoo === true &&
      userBirthBoo === true &&
      userGenderBoo === true &&
      userNicknameBoo === true
    ) {
      setUserDisable(false);
    } else {
      setUserDisable(true);
    }
  }, [userEmailBoo, userPassBoo, userBirthBoo, userGenderBoo, userNicknameBoo]);

  //이메일 체크
  const handleEmail = (e) => {
    if (emailRegEx.test(e.target.value)) {
      setUserEmail(e.target.value);
      const el = document.getElementById("emailmessage");
      el.innerHTML = "중복체크를 진행해주세요.";
      setEmailDisable(false);
      setUserEmailBoo(true);
    } else {
      const el = document.getElementById("emailmessage");
      el.innerHTML = "이메일의 형식이 올바르지 않습니다.";
      setEmailDisable(true);
      setUserEmailBoo(false);
    }
  };

  const emailCheck = () => {
    axios({
      url: `/user/emailDup.sam/${userEmail}`,
      method: "get",
    })
      .then((res) => {
        console.log(res.data);
        const el = document.getElementById("emailmessage");
        el.innerHTML = res.data;

        setUser({ userEmail, userPass, userBirth, userGender, userNickname });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //비밀번호 체크
  const handlePass = (e) => {
    if (passRegEx.test(e.target.value)) {
      const el = document.getElementById("passmessage");
      el.innerHTML = "사용 가능한 비밀번호입니다.";
      setUserPass(e.target.value);
    } else {
      const el = document.getElementById("passmessage");
      el.innerHTML = "비밀번호는 영문 숫자만 가능하며 5~8자리입니다.";
    }
  };

  //비밀번호 텍스트-비밀전환
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //비밀번호 2차체크
  const handlePassDup = (e) => {
    if (userPass === e.target.value) {
      const el = document.getElementById("passDupmessage");
      el.innerHTML = "비밀번호가 일치합니다.";

      setUser({ userEmail, userPass, userBirth, userGender, userNickname });
      setUserPassBoo(true);
    } else {
      const el = document.getElementById("passDupmessage");
      el.innerHTML = "비밀번호가 일치하지 않습니다.";
      setUserPassBoo(false);
    }
  };

  //생년월일 체크
  const handleBirth = (e) => {
    if (birthRegEx.test(e.target.value)) {
      const el = document.getElementById("birthmessage");
      el.innerHTML = "생년월일이 확인되었습니다.";
      setUserBirth(e.target.value);

      setUser({ userEmail, userPass, userBirth, userGender, userNickname });
      setUserBirthBoo(true);
    } else {
      const el = document.getElementById("birthmessage");
      el.innerHTML = "생년월일 6자리를 입력해주세요.";
      setUserBirthBoo(false);
    }
  };

  //성별체크
  const handleGender = (e) => {
    if (genderRegEx.test(e.target.value)) {
      setUserGender(e.target.value);
      setUserGenderBoo(true);

      setUser({ userEmail, userPass, userBirth, userGender, userNickname });
    } else {
      setUserGenderBoo(false);
    }
  };

  //별명체크
  const handleNickname = (e) => {
    if (nickRegEx.test(e.target.value)) {
      setUserNickname(e.target.value);

      const el = document.getElementById("nickmessage");
      el.innerHTML = "중복체크를 진행해주세요";

      setNickDisable(false);
      setUserNicknameBoo(true);
    } else {
      const el = document.getElementById("nickmessage");
      el.innerHTML = "영문 숫자 한글 2~5자를 입력해주세요.";

      setNickDisable(true);
      setUserNicknameBoo(false);
    }
  };

  const nickCheck = () => {
    axios({
      url: `/user/nicknameDup.sam/${userNickname}`,
      method: "get",
    })
      .then((res) => {
        console.log(res.data);
        const el = document.getElementById("nickmessage");
        el.innerHTML = res.data;
        setUser({ userEmail, userPass, userBirth, userGender, userNickname });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //유저정보 값 보내기
  const handleInsert = () => {
    axios({
      url: `/user/insert.sam`,
      method: "post",
      data: user,
    })
      .then((res) => {
        console.log(res.data);
        navi("/auth/cardCreate", { state: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={auththeme}>
      {/* 상단 뒤로가기 nav바 */}
      <BackNavbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: 3,
          fontFamily: "GmarketSans",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "15%",
            mb: "15%",
            minHeight: "200px",
          }}
        >
          <img src={logo} alt="logo" width="80px" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: "10%",
            minHeight: "150px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              borderBottom: "2px solid white",
            }}
          >
            <MailOutlineIcon sx={{ color: "white", mt: 2.3 }} />
            <TextField
              id="standard-basic"
              label="E-mail"
              variant="standard"
              onChange={handleEmail}
              name="userEmail"
              color="primary"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  color: "white", // 원하는 색상으로 변경
                },
              }}
              sx={{
                ml: 2,
                flex: 8,
              }}
            />
            <Button
              variant="outlined"
              id="userBtn"
              type="button"
              className="btn btn-default"
              onClick={emailCheck}
              disabled={emaildisable}
              sx={{
                flex: 2,
                border: "2px solid white",
                borderRadius: "50px",
                "&:hover": {
                  border: "2px solid white", // 원하는 효과로 수정해주세요
                },
              }}
            >
              중복확인
            </Button>
          </Box>
          <p id="emailmessage" style={{ color: "#136162", marginTop: "10px" }}>
            이메일 형식에 맞게 입력해주세요
          </p>
          <br></br>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              borderBottom: "2px solid white",
            }}
          >
            <PersonOutlineIcon sx={{ color: "white", mt: 2.3 }} />
            <TextField
              id="standard-basic"
              label="NickName"
              variant="standard"
              onChange={handleNickname}
              name="userNickname"
              color="primary"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  color: "white", // 원하는 색상으로 변경
                },
              }}
              sx={{
                ml: 2,
                flex: 8,
              }}
            />
            <Button
              variant="outlined"
              id="userBtn"
              type="button"
              className="btn btn-default"
              onClick={nickCheck}
              disabled={nickdisable}
              sx={{
                flex: 2,
                border: "2px solid white",
                borderRadius: "50px",
                "&:hover": {
                  border: "2px solid white", // 원하는 효과로 수정해주세요
                },
              }}
            >
              중복확인
            </Button>
          </Box>
          <p id="nickmessage" style={{ color: "#136162", marginTop: "10px" }}>
            영문 한글 2~5자리입니다
          </p>
          <br></br>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              borderBottom: "2px solid white",
            }}
          >
            <LockOpenIcon sx={{ color: "white", mt: 2.3 }} />
            <TextField
              id="standard-basic"
              label="PassWord"
              variant="standard"
              type={showPassword ? "text" : "password"}
              onChange={handlePass}
              name="userPass"
              color="primary"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  color: "white", // 원하는 색상으로 변경
                },
              }}
              sx={{
                ml: 2,
                flex: 7.5,
              }}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{
                flex: 2.5,
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <p id="passmessage" style={{ color: "#136162", marginTop: "10px" }}>
            패스워드는 영문 숫자 8자리입니다
          </p>
          <br></br>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              borderBottom: "2px solid white",
            }}
          >
            <LockOpenIcon sx={{ color: "white", mt: 2.3 }} />
            <TextField
              id="standard-basic"
              label="Confirm PassWord"
              variant="standard"
              type={showPassword ? "text" : "password"}
              onChange={handlePassDup}
              name="userPassDup"
              color="primary"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  color: "white", // 원하는 색상으로 변경
                },
              }}
              sx={{
                ml: 2,
                flex: 7.5,
              }}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{
                flex: 2.5,
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <p
            id="passDupmessage"
            style={{ color: "#136162", marginTop: "10px" }}
          >
            패스워드 2차체크
          </p>
          <br></br>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              borderBottom: "2px solid white",
            }}
          >
            <CakeOutlinedIcon sx={{ color: "white", mt: 2.3 }} />
            <TextField
              id="standard-basic"
              label="Birth"
              variant="standard"
              onChange={handleBirth}
              name="userBirth"
              color="primary"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  color: "white", // 원하는 색상으로 변경
                },
              }}
              sx={{
                ml: 2,
                flex: 7.5,
              }}
            />
            <FormControl
              sx={{
                ml: 2,
                flex: 7.5,
              }}
            >
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ color: "white" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={1}
                onChange={handleGender}
              >
                <FormControlLabel value="1" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <p id="birthmessage" style={{ color: "#136162", marginTop: "10px" }}>
            생년월일 6자리를 입력해주세요
          </p>
          <br></br>
          <Button
            variant="outlined"
            onClick={handleInsert}
            disabled={userdisable}
            sx={{
              fontWeight: "bold",
              pt: "15px",
              pb: "15px",
              width: "100%",
              border: "2px solid white",
              "&:hover": {
                border: "2px solid white", // 원하는 효과로 수정해주세요
              },
            }}
          >
            Register
          </Button>

          <Box sx={{ mt: "30px" }}>
            <Typography variant="body2" align="center" color="#E4F7F7">
              신한DS금융SW아카데미_2차프로젝트_삼삼조
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Singup;
