import React, { useState } from "react";
import axios from "axios";
import PageContainer from "../components/PageContainer.component";
import { HeaderWave, FooterWave } from "../components/ShapeDivider.component";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  Snackbar,
  CircularProgress,
  Hidden,
} from "@material-ui/core";

import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as Airplane } from "../assets/send.svg";
import { ReactComponent as BusinessDeal } from "../assets/businessDeal.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.primary.main,

    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(20),
    },
    // marginBottom: theme.spacing(matchesXS ? 20 : 10),
    zIndex: 0,
  },

  messageBox: {
    border: `1px solid ${theme.palette.secondary.main}`,
    marginTop: "5em",
    paddingLeft: theme.spacing(1),
    borderRadius: 5,
    backgroundColor: theme.palette.common.messageBox,
  },

  sendButton: {
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.accent.main,
    opacity: 0.9,

    "&:hover": {
      backgroundColor: theme.palette.accent.main,
      opacity: 1,
    },

    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },

  buttonRoot: {
    "&$disabled": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },

  textfieldInputLabelRoot: {
    color: theme.palette.secondary.main,
    "&.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  textfieldInputRoot: {
    color: theme.palette.secondary.main,
    "&:before": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderColor: theme.palette.secondary.main, //hovered #DCDCDC
    },
    "&:after": {
      borderColor: theme.palette.accent.main,
    },
  },

  focused: {},
  disabled: {},
}));

export default function HireMe() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const [loading, setLoading] = useState(false);

  // shortening to single change handler for multiple inputs
  const handleChange = (event) => {
    event.preventDefault();
    let valid;

    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        valid = /^[a-zA-Z ]+[a-zA-Z]+$/.test(event.target.value);
        if (!valid) {
          setNameHelper("Invalid Name");
        } else {
          setNameHelper("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        valid =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            event.target.value
          );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^[0-9+]{10,14}$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onSendConfirm = () => {
    setLoading(true);
    axios
      .get("https://1dlj1msj26.execute-api.us-east-1.amazonaws.com/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message Sent Successfully",
          backgroundColor: "#4BB543",
        });
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
        console.log(err);
      });
  };

  const sendButton = (
    <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
      <Button
        variant="contained"
        className={classes.sendButton}
        disabled={
          name.length === 0 ||
          nameHelper.length !== 0 ||
          email.length === 0 ||
          emailHelper.length !== 0 ||
          phone.length === 0 ||
          phoneHelper.length !== 0 ||
          message.length === 0
        }
        onClick={() => setOpen(true)}
        classes={{
          root: classes.buttonRoot,
          disabled: classes.disabled,
        }}
      >
        Send Message
        <Airplane
          style={{ marginLeft: "1em", fill: theme.palette.primary.main }}
        />
      </Button>
    </Grid>
  );

  const snackbar = (
    <Snackbar
      open={alert.open}
      message={alert.message}
      ContentProps={{
        style: {
          backgroundColor: theme.palette.accent.main,
        },
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => setAlert({ ...alert, open: false })}
      autoHideDuration={4000}
    />
  );

  const dialog = (
    // It doesn't matter where we place this  component
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      style={{ zIndex: 1302 }}
      fullScreen={matchesSM}
      PaperProps={{
        style: {
          paddingTop: matchesXS ? "1em" : "5em",
          paddingBottom: matchesXS ? "1em" : "5em",
          paddingLeft: matchesXS
            ? 0
            : matchesSM
            ? "5em"
            : matchesMD
            ? "15em"
            : "25em",
          paddingRight: matchesXS
            ? 0
            : matchesSM
            ? "5em"
            : matchesMD
            ? "15em"
            : "25em",
        },
      }}
    >
      <DialogContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Confirm Message
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              fullWidth
              error={nameHelper.length !== 0}
              helperText={nameHelper}
              label="Name"
              id="name"
              type="name"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              fullWidth
              error={emailHelper.length !== 0}
              helperText={emailHelper}
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              fullWidth
              error={phoneHelper.length !== 0}
              helperText={phoneHelper}
              label="Phone"
              id="phone"
              type="phone"
              value={phone}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
          <TextField
            fullWidth
            InputProps={{ disableUnderline: true }}
            value={message}
            className={classes.message}
            id="message"
            multiline
            rows={10}
            onChange={(event) => setMessage(event.target.value)}
          />
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "2em" }}
          alignItems="center"
        >
          <Grid item>
            <Button
              color="primary"
              onClick={() => setOpen(false)}
              style={{ fontWeight: 300 }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.sendButton}
              disabled={
                name.length === 0 ||
                nameHelper.length !== 0 ||
                email.length === 0 ||
                emailHelper.length !== 0 ||
                phone.length === 0 ||
                phoneHelper.length !== 0 ||
                message.length === 0
              }
              onClick={onSendConfirm}
            >
              {loading ? (
                <CircularProgress size={30} />
              ) : (
                <React.Fragment>
                  Send Message
                  <Airplane
                    style={{
                      marginLeft: "1em",
                      fill: theme.palette.primary.main,
                    }}
                  />
                </React.Fragment>
              )}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );

  const form = (
    <React.Fragment>
      <Grid item container direction="column" style={{ marginTop: "2em" }}>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            fullWidth
            error={nameHelper.length !== 0}
            helperText={nameHelper}
            label="Name"
            id="name"
            type="name"
            value={name}
            onChange={handleChange}
            InputLabelProps={{
              classes: {
                root: classes.textfieldInputLabelRoot,
                focused: classes.focused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.textfieldInputRoot,
                focused: classes.focused,
              },
            }}
          />
        </Grid>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            fullWidth
            error={emailHelper.length !== 0}
            helperText={emailHelper}
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={handleChange}
            InputLabelProps={{
              classes: {
                root: classes.textfieldInputLabelRoot,
                focused: classes.focused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.textfieldInputRoot,
                focused: classes.focused,
              },
            }}
          />
        </Grid>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            fullWidth
            error={phoneHelper.length !== 0}
            helperText={phoneHelper}
            label="Phone"
            id="phone"
            type="phone"
            value={phone}
            onChange={handleChange}
            InputLabelProps={{
              classes: {
                root: classes.textfieldInputLabelRoot,
                focused: classes.focused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.textfieldInputRoot,
                focused: classes.focused,
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          placeholder="How can I help you ?"
          value={message}
          className={classes.messageBox}
          id="message"
          multiline
          rows={10}
          onChange={(event) => setMessage(event.target.value)}
          inputProps={{ style: { color: theme.palette.secondary.main } }}
        />
      </Grid>
    </React.Fragment>
  );

  const contactDetails = (
    <Grid
      item
      style={{ marginTop: "2em", color: theme.palette.secondary.main }}
    >
      <Grid item container>
        <Grid item>
          <PhoneIcon
            style={{
              fill: theme.palette.accent.main,
              marginRight: "0.5em",
              opacity: 0.8,
              marginBottom: "0.25em",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
          >
            <a
              href="tel:+9779847064013"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              (+977) 9847064013
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid item container>
        <Grid item>
          <EmailIcon
            style={{
              fill: theme.palette.accent.main,
              marginRight: "0.5em",
              opacity: 0.8,
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
          >
            <a
              href="mailto:firoj.is.available@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              firoj.is.available@gmail.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <PageContainer>
      <Paper elevation={5} className={classes.paper}>
        <HeaderWave
          marginLeft={-theme.spacing(2)}
          marginRight={-theme.spacing(2)}
        />

        <Grid container justify="flex-start" direction="row">
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={matchesSM ? "center" : "flex-start"}
            lg={4}
            xl={3}
            style={{
              margingBottom: matchesMD ? "5em" : 0,
            }}
          >
            <Grid item style={{ maxWidth: "20em" }}>
              <Grid item style={{ marginTop: "2em" }}>
                <Typography
                  variant="h2"
                  style={{
                    lineHeight: 1,
                    color: theme.palette.common.offWhite,
                  }}
                  align={matchesMD ? "center" : undefined}
                >
                  Let's get into business
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.secondary.main }}
                  align={matchesMD ? "center" : undefined}
                >
                  I'm waiting.
                </Typography>
              </Grid>
              <Hidden smDown>
                <BusinessDeal
                  style={{
                    width: matchesMD ? "60%" : "70%",
                    height: "auto",
                    position: "absolute",
                    right: 0,
                    top: theme.spacing(15),
                    fill: theme.palette.accent.main,
                  }}
                />
              </Hidden>
              {contactDetails}
              {form}
              {sendButton}
            </Grid>
          </Grid>
          {dialog}
          {snackbar}
        </Grid>
        <FooterWave
          marginLeft={-theme.spacing(2)}
          marginRight={-theme.spacing(2)}
        />
      </Paper>
    </PageContainer>
  );
}
