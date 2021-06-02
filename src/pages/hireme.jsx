import React, { useState, useEffect } from "react";
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
    borderRadius: theme.spacing(1),
    zIndex: 0,
  },

  messageBox: {
    border: `1px solid ${theme.palette.primary.light}`,
    marginTop: "5em",
    paddingLeft: theme.spacing(1),
    borderRadius: 5,
    backgroundColor: theme.palette.background.messageBox,
  },

  sendButton: {
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.9,

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      opacity: 1,
    },

    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },

  buttonRoot: {
    "&$disabled": {
      backgroundColor: theme.palette.background.messageBox,
      color: theme.palette.text.disabled,
    },
  },

  textfieldInputLabelRoot: {
    color: theme.palette.text.secondary,
    "&.Mui-focused": {
      color: theme.palette.text.tertiary,
    },
  },

  textfieldInputRoot: {
    color: theme.palette.text.secondary,
    // modifying the input underline
    "&:before": {
      borderColor: theme.palette.text.disabled,
    },
    "&:after": {
      borderColor: theme.palette.text.primary,
    },

    "&:hover:not($disabled):not($focused):not($error):before": {
      borderColor: theme.palette.text.disabled, //hovered #DCDCDC
    },

    // ThIS ALSO WOKRS
    // "&.MuiInput-underline:before": {
    //   borderBottom: `2px solid blue`,
    // },
    // "&.MuiInput-underline:after": {
    //   borderBottom: `2px solid red`,
    // },
    // "&.MuiInput-underline:hover:before": {
    //   borderBottom: `2px solid yellow`,
    // },
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
    openSnackbar: false,
    message: "",
    backgroundColor: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name.length === 0) setNameHelper("");
    if (email.length === 0) setEmailHelper("");
    if (phone.length === 0) setPhoneHelper("");
  }, [name, email, phone]);

  // shortening to single change handler for multiple inputs
  const handleChange = (event) => {
    event.preventDefault();
    let valid;

    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        valid = /^[a-zA-Z ]+[a-zA-Z]+$/.test(event.target.value);
        if (valid) {
          setNameHelper("");
        } else {
          if (nameHelper.length > 0) return;
          setNameHelper("Invalid Name");
        }
        break;

      case "email":
        setEmail(event.target.value);
        valid =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            event.target.value
          );
        if (valid) {
          setEmailHelper("");
        } else {
          if (emailHelper.length > 0) return;
          setEmailHelper("Invalid Email");
        }

        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^[0-9+]{10,14}$/.test(event.target.value);
        if (valid) {
          setPhoneHelper("");
        } else {
          if (phoneHelper.length > 0) return;
          setPhoneHelper("Invalid Email");
        }
        break;

      default:
        break;
    }
  };

  const onSendConfirm = () => {
    setLoading(true);
    axios
      .get(
        "https://jsgluv2tt4.execute-api.ap-south-1.amazonaws.com/sendMailfromPortfolio",
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setAlert({
          openSnackbar: true,
          message: "Message Sent Successfully",
          backgroundColor: theme.palette.success.main,
        });

        // so that dialog remains open and success message could show
        setTimeout(() => {
          setOpen(false);
          setAlert({
            openSnackbar: false,
            message: "",
            backgroundColor: "",
          });
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }, 2500);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          openSnackbar: true,
          message: `${err.message}! Check your internet connection.`,
          backgroundColor: theme.palette.error.main,
        });
        console.log("Messege Sending Failed. The detailed error is", err);
      });
  };

  const SendButton = () => {
    let isDisabled = false;
    isDisabled =
      name.length === 0 ||
      nameHelper.length !== 0 ||
      email.length === 0 ||
      emailHelper.length !== 0 ||
      phone.length === 0 ||
      phoneHelper.length !== 0 ||
      message.length === 0;
    return (
      <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Button
          variant="contained"
          className={classes.sendButton}
          disabled={isDisabled}
          onClick={() => setOpen(true)}
          classes={{
            root: classes.buttonRoot,
            disabled: classes.disabled,
          }}
        >
          Send Message
          <Airplane
            style={{
              marginLeft: "1em",
              fill: isDisabled ? theme.palette.text.disabled : "inherit",
            }}
          />
        </Button>
      </Grid>
    );
  };

  const snackbar = (
    <Snackbar
      open={alert.openSnackbar}
      message={alert.message}
      ContentProps={{
        style: {
          backgroundColor: alert.backgroundColor,
        },
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
          paddingLeft: matchesXS ? "" : theme.spacing(matchesMD ? 15 : 10),
          paddingRight: matchesXS ? "" : theme.spacing(matchesMD ? 15 : 10),
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
              disabled
              // onChange={handleChange}
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
              disabled
              // onChange={handleChange}
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
              disabled
              // onChange={handleChange}
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
            disabled
            onChange={(event) => setMessage(event.target.value)}
            style={{
              border: `1px solid ${theme.palette.primary.light}`,
              borderRadius: 5,
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1),
            }}
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
                message.length === 0 ||
                loading === true
              }
              onClick={onSendConfirm}
              style={{
                backgroundColor: loading
                  ? theme.palette.primary.light
                  : undefined,
              }}
            >
              Send Message
              {loading ? (
                <CircularProgress
                  color="secondary"
                  size={25}
                  style={{
                    marginLeft: "1em",
                  }}
                />
              ) : (
                <Airplane
                  style={{
                    marginLeft: "1em",
                    fill: theme.palette.primary.main,
                  }}
                />
              )}
            </Button>
          </Grid>
        </Grid>
        {snackbar}
      </DialogContent>
    </Dialog>
  );

  const form = (
    <React.Fragment>
      <Grid item container direction="column" style={{ marginTop: "2em" }}>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            fullWidth
            error={!!nameHelper.length}
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
            error={!!emailHelper.length}
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
            error={!!phoneHelper.length}
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
          InputProps={{ disableUnderline: true }}
          placeholder="How can I help you ?"
          value={message}
          className={classes.messageBox}
          id="message"
          multiline
          rows={10}
          onChange={(event) => setMessage(event.target.value)}
          inputProps={{ style: { color: theme.palette.text.secondary } }}
        />
      </Grid>
    </React.Fragment>
  );

  const contactDetails = (
    <Grid item style={{ marginTop: "2em", color: theme.palette.text.primary }}>
      <Grid item container>
        <Grid item>
          <PhoneIcon
            style={{
              fill: theme.palette.secondary.main,
              marginRight: "0.5em",
              opacity: 0.8,
              marginBottom: "0.25em",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ color: theme.palette.text.secondary, fontSize: "1rem" }}
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
              fill: theme.palette.secondary.main,
              marginRight: "0.5em",
              opacity: 0.8,
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ color: theme.palette.text.secondary, fontSize: "1rem" }}
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
      <Paper
        elevation={5}
        className={classes.paper}
        style={{
          // placing here for high specificity
          overflow: "hidden",
        }}
      >
        <HeaderWave />

        <Grid
          container
          justify="flex-start"
          direction="row"
          style={{
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          }}
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={matchesSM ? "center" : "flex-start"}
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
                    color: theme.palette.text.secondary,
                  }}
                  align={matchesMD ? "center" : undefined}
                >
                  Let's get into business
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.text.tertiary }}
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
                    fill: theme.palette.secondary.main,
                  }}
                />
              </Hidden>
              {contactDetails}
              {form}
              <SendButton />
            </Grid>
          </Grid>
          {dialog}
        </Grid>
        <FooterWave />
      </Paper>
    </PageContainer>
  );
}
