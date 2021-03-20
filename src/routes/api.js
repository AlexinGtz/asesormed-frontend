const request = require("request");
const router = require("express").Router();

router.get("/getProfile/:id") = (req, res, next) => {
  return new Promise((resolve, reject) => {
    request.get(
      `http://localhost:3001/getUser/${req.params.id}`,
      (response) => {
        console.log(response);
        resolve(response);
      }
    );
  });
};

/*
// /getDoctorAppointments/:doctorId
getDoctorAppointments;
// /getAppointment/:appointmentId
getAppointment;
// /payAppointment
payAppointment;
// /createAppointment
createAppointment;
// /createPayment
createPayment;
// /getReport
doctorReports;
// /getUser/:id
getUser;
// /updateUser
updateUser;
// /createUser
createUser;
*/
