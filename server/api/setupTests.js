/** Configuration file for tests
 * @dev source of truth for all unit tests in the application
 */
import supertest from "supertest";

import server from "./";

import { routes } from "./constants";

// timeout is necessary to unit test swagger middleware
beforeAll(done => {
  const { health } = routes;

  // sets port to something else to avoid clashes with local dev, nyc fails when port changes
  // process.env.PORT = 5555;

  // setup global environment variable for server + request builder
  global.request = supertest;

  // routes
  global.health = health;
  global.server = server;

  // test utils - maybe better as an external module
  global.mockRequest = data => {
    return {
      body: data
    };
  };

  global.mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.type = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  // TODO - try to eliminate this workaround, only thing that seems to work
  // necessary workaround to give swagger middleware to initialize
  setTimeout(done, 100);
});

afterEach(done => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  server.close();
  done();
});

afterAll(done => {
  done();
});
