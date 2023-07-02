"use strict";

function calculateAge(e) {
  e.preventDefault();

  // Get the input values for day, month, and year
  const dayInput = document.querySelector('input[name="day"]').value;
  const monthInput = document.querySelector('input[name="month"]').value;
  const yearInput = document.querySelector('input[name="year"]').value;

  // Calculate the current date
  const currentDate = new Date();

  // Validate the input values
  const isValid = validateInputs(dayInput, monthInput, yearInput);
  if (!isValid) {
    return; // Exit the function if inputs are not valid
  }

  // Create a new date object with the user's input
  const birthDate = new Date(yearInput, monthInput - 1, dayInput);

  // Calculate the age in milliseconds
  const ageInMilliseconds = currentDate - birthDate;

  // Convert milliseconds to years, months, and days
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const ageYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
  const ageMonths = Math.floor((ageInMilliseconds % millisecondsPerYear) / (1000 * 60 * 60 * 24 * 30.44));
  const ageDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

  // Display the age in the results div

  const ageYearsElement = document.querySelector(".age-years .result-number");
  const ageMonthsElement = document.querySelector(".age-months .result-number");
  const ageDaysElement = document.querySelector(".age-days .result-number");
  ageYearsElement.textContent = `${ageYears}`;
  ageMonthsElement.textContent = `${ageMonths}`;
  ageDaysElement.textContent = `${ageDays}`;
}

function validateInputs(day, month, year) {
  let isValid = true;

  // Validate the day
  const dayLabel = document.querySelector('label[for="day"]');
  const dayErrorSpan = document.querySelector(".day-error");
  if (day < 1 || day > 31) {
    dayErrorSpan.style.display = "block";
    dayErrorSpan.classList.add("error-message");
    dayLabel.style.color = "red";
    document.querySelector('input[name="day"]').style.color = "red";
    document.querySelector('input[name="day"]').style.borderColor = "red";
    isValid = false;
  } else {
    dayErrorSpan.style.display = "none"; // Hide the error message
    dayLabel.style.color = ""; // Reset label color
    document.querySelector('input[name="day"]').style.color = ""; // Reset input color
    document.querySelector('input[name="day"]').style.borderColor = ""; // Reset input border color
  }

  // Validate the month
  const monthLabel = document.querySelector('label[for="month"]');
  const monthErrorSpan = document.querySelector(".month-error");
  if (month < 1 || month > 12) {
    monthErrorSpan.style.display = "block";
    monthErrorSpan.classList.add("error-message");
    monthLabel.style.color = "red";
    document.querySelector('input[name="month"]').style.color = "red";
    document.querySelector('input[name="month"]').style.borderColor = "red";
    isValid = false;
  } else {
    monthErrorSpan.style.display = "none"; // Hide the error message
    monthLabel.style.color = ""; // Reset label color
    document.querySelector('input[name="month"]').style.color = ""; // Reset input color
    document.querySelector('input[name="month"]').style.borderColor = ""; // Reset input border color
  }

  // Validate the year
  const currentYear = new Date().getFullYear();
  const yearLabel = document.querySelector('label[for="year"]');
  const yearErrorSpan = document.querySelector(".year-error");
  if (year > currentYear) {
    yearErrorSpan.textContent = "Must be in the past";
    yearErrorSpan.style.display = "block";
    yearErrorSpan.classList.add("error-message");
    yearLabel.style.color = "red";
    document.querySelector('input[name="year"]').style.color = "red";
    document.querySelector('input[name="year"]').style.borderColor = "red";
    isValid = false;
  } else if (year < 1900) {
    yearErrorSpan.textContent = "Must be after 1900";
    yearErrorSpan.style.display = "block";
    yearErrorSpan.classList.add("error-message");
    yearLabel.style.color = "red";
    document.querySelector('input[name="year"]').style.color = "red";
    document.querySelector('input[name="year"]').style.borderColor = "red";
  } else {
    yearErrorSpan.style.display = "none"; // Hide the error message
    yearLabel.style.color = ""; // Reset label color
    document.querySelector('input[name="year"]').style.color = ""; // Reset input color
    document.querySelector('input[name="year"]').style.borderColor = ""; // Reset input border color
  }

  return isValid;
}

// Add an event listener to the button

const button = document.querySelector(".btn button");

button.addEventListener("click", calculateAge);
