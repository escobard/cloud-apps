// health route
// TODO - update with environment when that's working
const health = {response:{ healthy: true, DB: true, /* environment: testing */ }};

// addNote route
const addNote = {
  request:{
    "user_id":1,
    "subject":"aasdfas",
    "note":"asdfasdfsddsfasdasdfasdfsddsfasdasdfasdfsddsfasdas…dasdfasdfsddsfasdasdfasdfsddsfasdasdfasdfsddsfasd"
  },
  response:{}
}

module.exports = {
  addNote,
  health
}