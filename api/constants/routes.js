const routes = {
    port: process.env.PORT || 4000,
    health: '/health',
    postForm: '/postForm',
    values: "/values/all",
    newValue: "/newValue",
    addNote: "/addNote"
};

module.exports = routes;
