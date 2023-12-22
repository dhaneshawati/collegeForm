export const createStudent = async (
  studentName,
  studentNumber,
  sscMarks,
  hscMarks,
  studentAddress
) => {
  try {
    fetch("/api/auth/registration", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentName: studentName,
        studentPhoneNumber: studentNumber,
        sscMarks: sscMarks,
        hscMarks: hscMarks,
        address: studentAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  let stuData = [];
  // ** It is an API for getData from DB and send response of all documents as json
  const response = await fetch("/api/auth/studentData", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Getting the data from database",
    }),
  });
  const studentData = await response.json();
  stuData = studentData.data;
  return stuData;
};
