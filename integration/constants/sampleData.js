// health route
// TODO - update with environment when that's working
const health = {response:{ healthy: true, DB: true, /* environment: testing */ }};

// addNote route
const addNote = {
  request:{
    user_id:1,
    subject:"create-app integration automated test subject",
    note:"create-app integration automated test note"
  }
};

const sampleData = { health, addNote }

export default sampleData;