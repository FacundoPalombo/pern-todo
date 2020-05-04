import React from "react";
import actions from "./actions";
import { connect } from "react-redux";
import { Home } from "modules";
const stpSchema = {};
const dtpSchema = { ...actions };

const mapStateToProps = () => stpSchema;
const mapDispatchToProps = () => dtpSchema;
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
