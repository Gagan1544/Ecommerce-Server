const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
//config
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

//Handling unCaught exception

// process.on("uncaughtException", (err) => {
//   console.log(`Error:${err.message}`);
//   console.log(`Shutting down the server due to uncaught exception `);
//   process.exit(1);
// });

// app.listen(process.env.PORT, () => {
// const server = app.listen(4000, () => {
app.listen(4000, () => {
  // console.log(`Server is working on http://localhost:${process.env.PORT}`);
  console.log(`Server is working on http://localhost:4000`);
});

// //unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error:${err.message}`);
//   console.log(`Shutting down the server due to unhandled promis rejection`);
//   server.close(() => {
//     process.exit(1);
//   });
// });

//5:02:00 Starting with FrontEnd
