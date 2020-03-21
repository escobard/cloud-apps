// TODO - add global test configs for jest in here after all unit tests are written
// necessary to allow testing globally of jest snapshots

// TODO - retire enzyme when form tests have been converted
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
