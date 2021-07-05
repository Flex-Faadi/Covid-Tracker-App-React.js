import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CountUp from "react-countup";
import {GetAllData} from "../api/index";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function BasicTable() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const CovidData = state.data;

  useEffect(() => {
    GetAllData(dispatch);
  }, [dispatch]);

  const classes = useStyles();
  const SelectCountry=sessionStorage.getItem("Selected Country")
  return (
    <TableContainer component={Paper} className="my-5 container">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Confirmed</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CovidData.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {SelectCountry}
                </TableCell>
                <TableCell align="right">
                  <CountUp
                    start={0}
                    end={e.confirmed.value}
                    duration={2}
                    separator=","
                  />
                </TableCell>
                <TableCell align="right">
                  <CountUp
                    start={0}
                    end={e.recovered.value}
                    duration={2}
                    separator=","
                  />
                </TableCell>
                <TableCell align="right">
                  <CountUp
                    start={0}
                    end={e.deaths.value}
                    duration={2}
                    separator=","
                  />
                </TableCell>
                <TableCell align="center">
                  {new Date(e.lastUpdate).toDateString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
