// TODO - add global test configs for jest in here after all unit tests are written
// necessary to allow testing globally of jest snapshots
import React from "react";
import { act, render, fireEvent, cleanup } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios';

global.React = React;

global.render = render;
global.fireEvent = fireEvent;
global.cleanup = cleanup;
global.renderHook = renderHook;
global.act = act;
jest.mock('axios');
global.axios = axios;

afterEach(() =>{
  jest.clearAllMocks()
})