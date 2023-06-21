const entry1Fields = document.querySelectorAll("#firstName1, #lastName1, #address1, #country1, #state1, #zip1, #phone1");
const entry2Fields = document.querySelectorAll("#firstName2, #lastName2, #address2, #country2, #state2, #zip2, #phone2");
const sameAsEntry1Checkbox = document.getElementById("sameAsEntry1");

sameAsEntry1Checkbox.addEventListener("change", function() {
  if (this.checked) {
    copyEntry1Data();
  } else {
    clearEntry2Data();
  }
});

function copyEntry1Data() {
  entry2Fields.forEach((field, index) => {
    field.value = entry1Fields[index].value;
    field.checkValidity(); // Trigger validation check
  });
}

function clearEntry2Data() {
  entry2Fields.forEach(field => {
    field.value = "";
    field.checkValidity(); // Trigger validation check
  });
}

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission, for demonstration purposes only

  // Perform any desired processing or validation here

  // Example: Validate and show custom error message for required fields
  entry1Fields.forEach(field => {
    if (!field.checkValidity()) {
      field.setCustomValidity("Please fill out this field.");
      field.classList.add("invalid-input"); // Add invalid-input class
    } else {
      field.setCustomValidity(""); // Clear custom error message
      field.classList.remove("invalid-input"); // Remove invalid-input class
    }
  });

  // Example: Log the values if the form is valid
  if (this.checkValidity()) {
    console.log("Entry 1");
    entry1Fields.forEach(field => {
      console.log(`${field.id}: ${field.value}`);
    });

    console.log("Entry 2");
    entry2Fields.forEach(field => {
      console.log(`${field.id}: ${field.value}`);
    });
  }
});
