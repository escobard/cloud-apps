/** This file is used to run tests in a specific order
 * @dev CI/CD driven tests will use this file, tests stops if any one test fails
 */

// pre-req
import "../config.test";

// service availability checks
import "./health.test";

// critical happy service paths
import "./addNote.test"
import "./getNotes.test"

// critical sad service paths - no real sad end to end integration paths until phase 4