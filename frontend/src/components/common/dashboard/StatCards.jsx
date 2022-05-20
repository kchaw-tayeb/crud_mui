import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
const StatCards = () => {
  return (
    // <Paper>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} columnSpacing={{ xs: 3.5, md: 3.5 }}>
        <Grid item xs={3} md={3}>
          <Card elevation={0}>
            <CardContent
              sx={{
                "&:last-child": {
                  paddingBottom: "16px",
                },
              }}
            >
              <Typography
                component="span"
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: " 1rem",
                  lineHeight: 1.25,
                  color: "rgba(0, 0, 0, 0.87)",
                  //   margin: "0px 0px 16px",
                }}
              >
                Sales Today
              </Typography>
              <span>
                <Chip
                  label="Today"
                  size="small"
                  sx={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(71, 130, 218)",
                    fontSize: "85%",

                    borderRadius: "6px",
                    marginLeft: "57px",

                    "& .MuiChip-label": {
                      pl: 1,
                      pr: 1,
                    },
                    "& .MuiChip-sizeSmall": {
                      height: "20x",
                    },
                  }}
                />
              </span>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  lineHeight: 1.25,
                  color: "rgba(0, 0, 0, 0.87)",
                  margin: "12px 0px 12px",
                }}
              >
                2.532
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  lineHeight: 1.57,
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    color: "rgb(76, 175, 80)",

                    background: "rgba(76, 175, 80, 0.1)",
                    padding: "2px",
                    borderRadius: "3px",
                    marginRight: "11px",
                  }}
                >
                  +26%
                </span>
                Since last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={3}>
          <Card sx={{ maxWidth: 230 }} elevation={0}>
            <CardContent
              sx={{
                "&:last-child": {
                  paddingBottom: "16px",
                },
              }}
            >
              <Typography
                component="span"
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: " 1rem",
                  lineHeight: 1.25,
                  color: "rgba(0, 0, 0, 0.87)",
                  //   margin: "0px 0px 16px",
                }}
              >
                Visitors
              </Typography>
              <span>
                <Chip
                  label="Annual"
                  size="small"
                  sx={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(71, 130, 218)",
                    fontSize: "85%",

                    borderRadius: "6px",
                    marginLeft: "88px",
                    height: "20x",

                    "& .MuiChip-label": {
                      pl: 1,
                      pr: 1,
                    },
                    "& .MuiChip-root": {
                      height: "20x",
                    },
                  }}
                />
              </span>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  lineHeight: 1.25,
                  color: "rgba(0, 0, 0, 0.87)",
                  margin: "12px 0px 12px",
                }}
              >
                170.212
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  lineHeight: 1.57,
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span
                  style={{
                    color: "rgb(244, 67, 54)",
                    fontWeight: 600,
                    background: "rgba(244, 67, 54, 0.1)",
                    padding: "2px",
                    borderRadius: "3px",
                    marginRight: "11px",
                  }}
                >
                  -14%
                </span>
                Since last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={3}>
          <Card sx={{ maxWidth: 230 }} elevation={0}>
            <CardContent
              sx={{
                "&:last-child": {
                  paddingBottom: "16px",
                },
              }}
            >
              <Typography
                component="span"
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: " 1rem",
                  lineHeight: 1.25,
                  color: "rgba(0, 0, 0, 0.87)",
                  //   margin: "0px 0px 16px",
                }}
              >
                Total Earnings
              </Typography>
              <span>
                <Chip
                  label="Monthly"
                  size="small"
                  sx={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(71, 130, 218)",
                    fontSize: "85%",

                    borderRadius: "6px",
                    marginLeft: "30px",
                    height: "20x",

                    "& .MuiChip-label": {
                      pl: 1,
                      pr: 1,
                    },
                    "& .MuiChip-root": {
                      height: "20x",
                    },
                  }}
                />
              </span>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  lineHeight: 1.25,
                  color: "rgba(0, 0, 0, 0.87)",
                  margin: "12px 0px 12px",
                }}
              >
                $ 24.300
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  lineHeight: 1.57,
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,

                    padding: "2px",
                    borderRadius: "3px",
                    marginRight: "11px",
                    color: "rgb(76, 175, 80)",

                    background: "rgba(76, 175, 80, 0.1)",
                  }}
                >
                  +18%
                </span>
                Since last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={3}>
          <Card
            sx={{ maxWidth: 230, backgroundColor: "rgba(55, 111, 208, 0.125)" }}
            elevation={0}
          >
            <CardContent
              sx={{
                "&:last-child": {
                  paddingBottom: "16px",
                },
              }}
            >
              <Typography
                component="span"
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: " 1rem",
                  lineHeight: 1.25,
                  color: "rgb(55, 111, 208)",
                  //   margin: "0px 0px 16px",
                }}
              >
                Pending Orders
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  lineHeight: 1.25,
                  color: "rgb(55, 111, 208)",
                  margin: "12px 0px 12px",
                }}
              >
                45
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  lineHeight: 1.57,
                  color: "rgb(55, 111, 208)",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,

                    padding: "2px",
                    borderRadius: "3px",
                    marginRight: "11px",
                    color: "rgb(244, 67, 54)",

                    background: "rgba(244, 67, 54, 0.1)",
                  }}
                >
                  -9%
                </span>
                Since last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    // </Paper>
  );
};

export default StatCards;
