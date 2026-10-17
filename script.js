// ================= MODAL =================

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");


// ================= OPEN MODAL =================

function openModal(content) {

    modalContent.innerHTML = content;

    modal.style.display = "flex";
}


// ================= CLOSE MODAL =================

function closeModal() {

    modal.style.display = "none";
}


// Close when clicking outside

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeModal();

    }

});


// ================= LOGIN =================

function openLogin() {

    openModal(`

        <h2>Welcome Back 👋</h2>

        <form onsubmit="loginUser(event)">

            <input
                type="email"
                placeholder="Email Address"
                required
            >

            <input
                type="password"
                placeholder="Password"
                required
            >

            <button type="submit">
                Login
            </button>

        </form>

    `);

}


function loginUser(event) {

    event.preventDefault();

    alert(
        "Login functionality will be connected with backend later."
    );

    closeModal();
}


// ================= REGISTER =================

function openRegister() {

    openModal(`

        <h2>Create Your DonateX Account</h2>

        <form onsubmit="registerUser(event)">

            <input
                type="text"
                placeholder="Full Name"
                required
            >

            <input
                type="email"
                placeholder="Email Address"
                required
            >

            <input
                type="tel"
                placeholder="Phone Number"
                required
            >

            <select required>

                <option value="">
                    Select Account Type
                </option>

                <option>
                    Donor
                </option>

                <option>
                    Organization
                </option>

            </select>

            <input
                type="password"
                placeholder="Create Password"
                required
            >

            <input
                type="password"
                placeholder="Confirm Password"
                required
            >

            <button type="submit">
                Create Account
            </button>

        </form>

    `);

}


function registerUser(event) {

    event.preventDefault();

    alert(
        "Registration successful! Backend will be connected later."
    );

    closeModal();
}


// ================= CLOTH DONATION =================

function openClothForm() {

    openModal(`

        <h2>👕 Donate Clothes</h2>

        <form onsubmit="submitCloth(event)">

            <input
                type="text"
                placeholder="Your Name"
                required
            >

            <input
                type="tel"
                placeholder="Phone Number"
                required
            >

            <select required>

                <option value="">
                    Select Clothing Category
                </option>

                <option>
                    Men
                </option>

                <option>
                    Women
                </option>

                <option>
                    Kids
                </option>

            </select>

            <input
                type="number"
                placeholder="Number of Clothes"
                min="1"
                required
            >

            <select required>

                <option value="">
                    Select Condition
                </option>

                <option>
                    New
                </option>

                <option>
                    Good Condition
                </option>

            </select>

            <input
                type="text"
                placeholder="Pickup Address"
                required
            >

            <input
                type="date"
                required
            >

            <button type="submit">
                Request Pickup
            </button>

        </form>

    `);

}


function submitCloth(event) {

    event.preventDefault();

    alert(
        "Cloth donation pickup request submitted successfully!"
    );

    closeModal();
}


// ================= FUND DONATION =================

function openFundForm() {

    openModal(`

        <h2>💰 Donate Funds</h2>

        <form onsubmit="submitFund(event)">

            <select required>

                <option value="">
                    Select Cause
                </option>

                <option>
                    Medical
                </option>

                <option>
                    Education
                </option>

                <option>
                    Orphanage
                </option>

                <option>
                    Emergency
                </option>

            </select>

            <input
                type="number"
                placeholder="Donation Amount ₹"
                min="1"
                required
            >

            <input
                type="text"
                placeholder="Donor Name"
                required
            >

            <input
                type="email"
                placeholder="Email Address"
                required
            >

            <button type="submit">
                Continue to Payment
            </button>

        </form>

    `);

}


function submitFund(event) {

    event.preventDefault();

    alert(
        "Payment gateway will be connected with backend later."
    );

    closeModal();
}


// ================= REQUEST DONATION =================

function donateRequest(requestName) {

    openModal(`

        <h2>Donate to ${requestName}</h2>

        <p style="margin-bottom:20px;color:#687080;">
            Enter the amount you want to donate.
        </p>

        <form onsubmit="processDonation(event)">

            <input
                type="number"
                placeholder="Donation Amount ₹"
                min="1"
                required
            >

            <input
                type="text"
                placeholder="Your Name"
                required
            >

            <input
                type="email"
                placeholder="Email Address"
                required
            >

            <button type="submit">
                Continue
            </button>

        </form>

    `);

}


function processDonation(event) {

    event.preventDefault();

    alert(
        "Thank you for supporting this cause ❤️"
    );

    closeModal();
}


// ================= CONTACT =================

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Your message has been sent successfully!"
    );

    event.target.reset();
}


// ================= SCROLL =================

function scrollToDonate() {

    document
        .getElementById("donate")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToRequests() {

    document
        .getElementById("requests")
        .scrollIntoView({
            behavior: "smooth"
        });

}