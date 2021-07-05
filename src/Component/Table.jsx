import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import CountUp from "react-countup";
import { GetAllData } from "../api/index";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});
export default function BasicTable() {
  const cors_allower = "https://murmuring-crag-22473.herokuapp.com/";
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const CovidData = state.data;

  const selectedCuntry = state.selectCountry;
  const url = `${cors_allower}https://covid19.mathdro.id/api/countries/${selectedCuntry}`;

  useEffect(() => {
    GetAllData(dispatch, url);
  }, [url]);

  const classes = useStyles();

  return (
    <>
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
                      {selectedCuntry}
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
    </>
  );
}
