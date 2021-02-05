import React from "react";
import "./index.css";
import {reRenderDomTree} from "./render";
import state from "./redux/state";

reRenderDomTree(state);

