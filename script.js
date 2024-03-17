function calculateAge() {
  const dob = new Date(
    parseInt(document.getElementById("yob").value),
    parseInt(document.getElementById("mob").value) - 1, // Subtract 1 from month for correct indexing
    parseInt(document.getElementById("dob").value)
  );

  // Validate input and check if the date is valid
  if (isNaN(dob.getTime())) {
    alert("Please enter a valid date of birth.");
    return;
  }

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = `Your age is ${age} years.`;
}
