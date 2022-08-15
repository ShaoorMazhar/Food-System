import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const columns = [
  {
    field: "index",
    headerName: "No",
    flex: 1,
    key: 1,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "userName",
    headerName: "User Name",
    flex: 1,
    key: 2,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "items",
    headerName: "Items",
    flex: 1,
    key: 3,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "roti",
    headerName: "Roti",
    flex: 1,
    key: 3,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "amountPaid",
    headerName: "Amount Paid",
    flex: 1,
    key: 3,
    headerClassName: "super-app-theme--header"
  }
];

export default function LunchData() {
  const result = useSelector((state) => state?.lunch?.record[0]);
  const sum = result?.map((el) => {
    return {
      sumValue: el?.rotiQuantity
    };
  });

  const totalRotti = sum.reduce((a, v) => (a = a + v.sumValue), 0);
  var modifiedRows =
    result.length > 0
      ? result?.map((element, index) => {
          return {
            ...element,
            userName: element?.employeeName,
            index: index + 1,
            items: element?.extras,
            roti: element?.rotiQuantity,
            amountPaid: element?.amount
          };
        })
      : "";

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: "100%",
          border: "1px solid black ",
          height: "500px"
        }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px"
            }}>
            <b> Lunch </b>
          </Typography>

          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                key={(row) => (row.id = uuidv4())}
                rows={modifiedRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => (row.id = uuidv4())}
              />
              <Grid item>
                Total Rotti : <b>{totalRotti}</b>
              </Grid>
            </div>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
