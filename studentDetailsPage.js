function submitForm() {
    // Fetch values from the form
    const studentName = document.getElementById("studentName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const percentage = parseFloat(document.getElementById("percentage").value);
    if (!validatePhoneNumber(phone)) {
        // If validation fails, show a popup
        alert("Please enter a valid 10-digit phone number.");

        // Assign an empty value to the phone field
        document.getElementById("phone").value = "";
        return;
    }
    if (percentage > 90) {
        // Set Top Class to True
        document.getElementById('topClass').checked = true;

        // Calculate scheduled date
        const registeredDate = new Date();
        const scheduledDate = new Date(registeredDate);
        scheduledDate.setDate(scheduledDate.getDate() + 3);

        // Send email
        const emailContent = `Thanks for your Registration. Your Interview will be scheduled on ${scheduledDate.toDateString()}.`;
        sendEmail(email, emailContent);
    }

    // Display the submitted details
    const submissionResult = document.getElementById("submissionResult");
    submissionResult.innerHTML = `
        <h2>Submitted Details</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Percentage Obtained:</strong> ${percentage}%</p>
    `;

    // Generate and display the Student Details Report
    generateStudentDetailsReport(studentName, email, phone, address, percentage);

}

function generateStudentDetailsReport(name, email, phone, address, percentage) {
    const reportContainer = document.getElementById("studentDetailsReportContainer");
    reportContainer.innerHTML = `
        <h2>Student Details Report</h2>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Percentage Obtained:</strong> ${percentage}%</p>
        <!-- Additional report details can be added here -->
    `;
}

function validatePhoneNumber(phone) {
    // Regular expression to match a 10-digit phone number
    const phoneRegex = /^\d{10}$/;

    // Check if the phone number is empty or doesn't match the regex
    return phone && phoneRegex.test(phone);
}
function sendEmail(email, content) {
    console.log(`Sending email to ${email} with content: ${content}`);
}


