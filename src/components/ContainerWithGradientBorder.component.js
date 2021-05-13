import { makeStyles, useTheme, Grid, useMediaQuery } from "@material-ui/core";

const ContainerWithGradientBorder = ({
  width,
  height,
  borderGadient,
  borderWidth,
  borderRadius,
  backgroundColor,
  color,
  ...otherProps
}) => {
  const useStyles = makeStyles((theme) => ({
    borderRadiusGradient: {
      position: "relative",
      border: `${borderWidth} solid transparent`,
      backgroundColor: backgroundColor ? backgroundColor : "white",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      // borderRadius: borderRadius ? borderRadius : "5px",
      "&::before": {
        display: "block",
        content: '""',
        position: "absolute",
        inset: 0,
        background: borderGadient
          ? borderGadient
          : "linear-gradient(135deg, rgba(90,206,97,1) 0%, rgba(74,228,184,1) 100%)",
        zIndex: -1,
        margin: `-${borderWidth}`, // make sure it is equal to the border width preserve the actual dimension of the element
        borderRadius: "inherit",
        // opacity: "inherit",
        opacity: 0.7,
        transform: "skew(1.15deg,1deg)",
        // transform: "skew(358deg,2deg)",
      },
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      component="div"
      {...otherProps}
      className={classes.borderRadiusGradient}
    >
      {otherProps.children}
    </Grid>
  );
};

export default ContainerWithGradientBorder;
