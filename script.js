// function displayDoctors(doctors) {
//     if (doctors.length === 0) {
//       outputContainer.innerHTML = '<p>No matching doctors found.</p>';
//     } else {
//       const doctorInfo = doctors.map(doctor => `
//         <h2 class="text-wrapper-3">${doctor.name}</h2>
//         <p>Specialization: ${doctor.specialization}</p>
//         <p>${doctor.information}</p>
//         <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">`
//       ).join('');
//       outputContainer.innerHTML = doctorInfo;

//       // Get references to the dynamically created elements
//       const doctorNameElements = document.querySelectorAll('.text-wrapper-3');
//       const doctorSpecializationElements = document.querySelectorAll('p');
//       const doctorImageElements = document.querySelectorAll('.doctor-image'); // Updated selector

//       // Customize CSS styles based on user input
//       doctorNameElements.forEach(element => {
//         element.style.fontSize = '24px'; // Example font size
//         element.style.color = '#333'; // Example text color
//       });

//       doctorSpecializationElements.forEach(element => {
//         element.style.fontSize = '18px';
//         element.style.color = '#666';
//       });

//       doctorImageElements.forEach(element => {
//         element.style.width = '200px'; // Example image width
//         element.style.height = 'auto'; // To maintain aspect ratio
//       });
//     }
//   }

// // Get references to the form elements
// const specializationForm = document.querySelector('#specialization-form');
// const doctorNameForm = document.querySelector('#doctor-name-form');
// const outputContainer = document.querySelector('.content-container');

// // Function to fetch and parse the JSON data
// async function getDoctorsData() {
//   try {
//     const response = await fetch('doctors.json');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error loading JSON data:', error);
//     return null;
//   }
// }

// // Event listener for the specialization form
// specializationForm.addEventListener('submit', async function (event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the specialization input value
//   const specializationInput = specializationForm.querySelector('input').value;

//   // Fetch JSON data
//   const doctorsData = await getDoctorsData();

//   // Process the data and display the output
//   if (doctorsData) {
//     const matchingDoctors = findDoctorsBySpecialization(specializationInput, doctorsData.doctors);
//     displayDoctors(matchingDoctors);
//   }
// });

// // Event listener for the doctor's name form
// doctorNameForm.addEventListener('submit', async function (event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the doctor's name input value
//   const doctorNameInput = doctorNameForm.querySelector('input').value;

//   // Fetch JSON data
//   const doctorsData = await getDoctorsData();

//   // Process the data and display the output
//   if (doctorsData) {
//     const matchingDoctors = findDoctorsByName(doctorNameInput, doctorsData.doctors);
//     displayDoctors(matchingDoctors);
//   }
// });

// // Add the findDoctorsBySpecialization, findDoctorsByName, and displayDoctors functions here
// function findDoctorsBySpecialization(specialization, doctors) {
//   // Filter the doctors array based on specialization
//   return doctors.filter(doctor => doctor.specialization.toLowerCase() === specialization.toLowerCase());
// }

// function findDoctorsByName(name, doctors) {
//   // Filter the doctors array based on name
//   return doctors.filter(doctor => doctor.name.toLowerCase() === name.toLowerCase());
// }

// function displayDoctors(doctors) {
//   if (doctors.length === 0) {
//     outputContainer.innerHTML = '<p>No matching doctors found.</p>';
//   } else {
//     const doctorInfo = doctors.map(doctor => `
//       <h2 class="text-wrapper-3">${doctor.name}</h2>
//       <p>Specialization: ${doctor.specialization}</p>
//       <p>${doctor.information}</p>
//       <img src="${doctor.image}" alt="${doctor.name}">`
//     ).join('');
//     outputContainer.innerHTML = doctorInfo;
//   }
// }

// Get references to the form elements
const specializationForm = document.querySelector("#specialization-form");
const doctorNameForm = document.querySelector("#doctor-name-form");
const outputContainer = document.querySelector(".content-container");

// Function to fetch and parse the JSON data
async function getDoctorsData() {
  try {
    const response = await fetch("doctors.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading JSON data:", error);
    return null;
  }
}

// Event listener for the specialization form
specializationForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the specialization input value
  const specializationInput = specializationForm.querySelector("input").value;

  // Fetch JSON data
  const doctorsData = await getDoctorsData();

  // Process the data and display the output
  if (doctorsData) {
    const matchingDoctors = findDoctorsBySpecialization(
      specializationInput,
      doctorsData.doctors
    );
    displayDoctors(matchingDoctors);
  }
});

// Event listener for the doctor's name form
doctorNameForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the doctor's name input value
  const doctorNameInput = doctorNameForm.querySelector("input").value;

  // Fetch JSON data
  const doctorsData = await getDoctorsData();

  // Process the data and display the output
  if (doctorsData) {
    const matchingDoctors = findDoctorsByName(
      doctorNameInput,
      doctorsData.doctors
    );
    displayDoctors(matchingDoctors);
  }
});

// Add the findDoctorsBySpecialization, findDoctorsByName, and displayDoctors functions here
function findDoctorsBySpecialization(specialization, doctors) {
  // Filter the doctors array based on specialization
  return doctors.filter(
    (doctor) =>
      doctor.specialization.toLowerCase() === specialization.toLowerCase()
  );
}

function findDoctorsByName(name, doctors) {
  // Filter the doctors array based on name
  return doctors.filter(
    (doctor) => doctor.name.toLowerCase() === name.toLowerCase()
  );
}

function displayDoctors(doctors) {
  if (doctors.length === 0) {
    outputContainer.innerHTML = "<p>No matching doctors found.</p>";
  } else {
    const doctorInfo = doctors
      .map(
        (doctor) => `
      <div class="doctor-card">
        <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
        <h2 class="doctor-name">${doctor.name}</h2>
        <p class="doctor-specialization">Specialization: ${doctor.specialization}</p>
        <p class="doctor-information">${doctor.information}</p>
      </div>`
      )
      .join("");
    outputContainer.innerHTML = doctorInfo;

    // Get references to the dynamically created elements
    const doctorCards = document.querySelectorAll(".doctor-card");
    const doctorNameElements = document.querySelectorAll(".doctor-name");
    const doctorSpecializationElements = document.querySelectorAll(
      ".doctor-specialization"
    );
    const doctorInformationElements = document.querySelectorAll(
      ".doctor-information"
    );
    const doctorImageElements = document.querySelectorAll(".doctor-image");

    // Customize CSS styles based on user input
    doctorCards.forEach((card) => {
      card.style.textAlign = "center"; // Center the content
      card.style.margin = "20px";
      card.style.backgroundColor = "#f0f0f0"; // Add a background color to the card
      card.style.padding = "20px";
      card.style.borderRadius = "10px";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    doctorNameElements.forEach((element) => {
      element.style.fontSize = "24px";
      element.style.color = "#333";
    });

    doctorSpecializationElements.forEach((element) => {
      element.style.fontSize = "18px";
      element.style.color = "#666";
    });

    doctorInformationElements.forEach((element) => {
      element.style.fontSize = "16px"; // Adjust the information font size
      element.style.color = "#444"; // Modify text color
    });

    doctorImageElements.forEach((element) => {
      element.style.width = "150px"; // Set the image size
      element.style.height = "150px"; // Create a square image
      element.style.borderRadius = "50%"; // Make the image circular
      element.style.objectFit = "cover"; // Maintain aspect ratio
      element.style.margin = "0 auto"; // Center the image
      element.style.display = "block"; // Ensure it's a block element
    });
  }
}
