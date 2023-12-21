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
