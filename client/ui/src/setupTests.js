// TODO - add global test configs for jest in here after all unit tests are written
// necessary to allow testing globally of jest snapshots
import React from "react";
import {
  act,
  render,
  fireEvent,
  cleanup,
  waitForDomChange,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { act as actHook, renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

global.React = React;
global.render = render;
global.fireEvent = fireEvent;
global.cleanup = cleanup;
global.renderHook = renderHook;
global.waitForDomChange = waitForDomChange;
global.waitForElementToBeRemoved = waitForElementToBeRemoved;
global.act = act;
global.actHook = actHook;
global.mockApi = axios;
global.MemoryRouter = MemoryRouter;

afterEach(() => {
  jest.clearAllMocks();
});
