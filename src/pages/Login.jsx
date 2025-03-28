import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { server } from "../constants/config";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userExists, userNotExists } from "../redux/reducers/auth";

const Login = () => {
  const [isLogin, setIsLogin] = useState();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Welcome!");
      dispatch(userExists(data.token));
      localStorage.setItem("token", data.token);
    } catch (err) {
      toast.error(err.response.data.error);
      dispatch(userNotExists(null));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/register`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Welcome!");
      dispatch(userExists(data.token));
      localStorage.setItem("token", data.token);
    } catch (err) {
      toast.error(err.response.data.error);
      dispatch(userNotExists(null));
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", padding: 4 }}
      >
        {isLogin ? (
          <>
            <Typography variant="h4" textAlign={"center"}>
              Login
            </Typography>
            <form
              onSubmit={handleLogin}
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                variant="outlined"
                type="email"
                label="Email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                variant="outlined"
                type="password"
                label="Password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                fullWidth
                onClick={() => setIsLogin((prev) => !prev)}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h4" textAlign={"center"}>
              Sign Up
            </Typography>
            <form
              onSubmit={handleSignUp}
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                variant="outlined"
                type="email"
                label="Email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                variant="outlined"
                type="password"
                label="Password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                fullWidth
                onClick={() => setIsLogin((prev) => !prev)}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
