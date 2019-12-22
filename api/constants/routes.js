const routes = {
    port: process.env.PORT || 4000,
    health: '/health',
    addNote: "/addNote",
    getNotes: "/getNotes"
};

module.exports = routes;
