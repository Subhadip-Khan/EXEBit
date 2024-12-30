const imageInput = document.getElementById("image");
const previewImageContainer = document.getElementById("previewImageContainer");
const previewImage = document.getElementById("previewImage");
const submitbtn = document.getElementById("uploadbtn");

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  
  if (file) { 
    const reader = new FileReader();
    reader.onload = function (event) {
      // Update the image preview in the second column (outside form)
      previewImage.src = event.target.result;
      previewImageContainer.style.display = "block"; // Show preview in the second column
    };
    reader.readAsDataURL(file);
  } else {
    previewImageContainer.style.display = "none"; // Hide preview in the second column if no file selected
  }
});

// Handle form submission
const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(uploadForm);
  const imageFile = formData.get("image");
  const imageName = formData.get("imageName"); // Get the image name from the form input

  if (imageFile) {
    const reader = new FileReader();

    reader.onload = async () => {
      const base64Image = reader.result; // Extract Base64 part of the image

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        imageTitle: imageName, // Use the value from the input field
        imageBase64Data: base64Image,
      };
      
      try {
        submitbtn.textContent = "Uploading your data...";
        submitbtn.toggleAttribute("disabled");
        submitbtn.style.backgroundColor = "#8f94fb";
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyjxGjH6HaW1RnR2J2h1zL7CmPIjeKcWxOqp_T1CwoO300IyMAyttcNkzy3tS1oqeKH/exec",
          {
            method: "POST",
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          alert("Your data has been uploaded successfully!");
          uploadForm.reset();
          previewImageContainer.style.display = "none";
          submitbtn.textContent = "Upload";
          submitbtn.toggleAttribute("disabled");
          submitbtn.style.backgroundColor = "#4e54c8";
        } else {
          alert("Failed to upload data. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while uploading data. > "+error);
      }
    };

    reader.readAsDataURL(imageFile);
  } else {
    alert("Please select an image before submitting.");
  }
});
