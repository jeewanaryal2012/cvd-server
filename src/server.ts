import app from "./routes/routes";
const PORT = process.env.PORT || 4040;
app.listen(PORT, function () {
    console.log('Express server listening on port: ' + PORT);
});
