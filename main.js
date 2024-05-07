//Function to display the message according to the selected buyer type
function showMessage() {
    // Get the selected buyer type
    const buyerType = document.getElementById("buyerType").value;

    // Show the message
    if (buyerType === "occasional") {
        alert("You've been registered. Soon you'll have access to a web catalog of technology products.");
    } else if (buyerType === "wholesale") {
        alert("You will be sent a welcome email and agreement of terms and conditions of this type of membership.");
    } else {
        alert("Please select a buyer type.");
    }
}
// Example usage
const userManager = new UserManager();

// Register users
const user1 = new User("Juliana", "1973242849", "Condominio El Carmelo", "3132338284", "juliana@gmail.com", "occasional buyer");
const user2 = new User("Juan", "9837124583", "Barrio Villa Alejandra", "3103238291", "juan@hotmail.com", "wholesale buyer");
userManager.registerUser(user1);
userManager.registerUser(user2);

// Show registered users
console.log("Registered users:");
console.log(userManager.users);

// Update user data
userManager.updateUser("1973242849", { address: "Barrio Santa Rita", phone: "3113412220" });

// Show users after updating data
console.log("Users after update:");
console.log(userManager.users);

// Delete a user
userManager.deleteUser("9837124583");

// Show users after deleting
console.log("Users after deletion:");
console.log(userManager.users);

// Classify users by type
const occasionalBuyers = userManager.classifyUsersByType("occasional buyer");
console.log("Occasional buyers:");
console.log(occasionalBuyers);

const wholesaleBuyers = userManager.classifyUsersByType("wholesale buyer");
console.log("Wholesale buyers:");
console.log(wholesaleBuyers);