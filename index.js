// alert("funguje");

$("form").submit(function () {
	alert("Submitted");
});

// $(document).ready(function () {
// 	$("#ozveteSeForm").submit(function (event) {
// 		event.preventDefault(); // Prevent the default form submission

// 		var phoneNumber = $("#phoneNumber").val();
// 		var emailAddress = $("#emailAddress").val();

// 		// Send the data via AJAX
// 		$.ajax({
// 			type: "POST",
// 			url: "your-backend-endpoint-url", // Replace with your actual backend endpoint
// 			data: {
// 				phoneNumber: phoneNumber,
// 				emailAddress: emailAddress,
// 			},
// 			success: function (response) {
// 				alert("Form data sent successfully!");
// 			},
// 			error: function (xhr, status, error) {
// 				console.error("Error sending form data:", error);
// 			},
// 		});
// 	});
// });
