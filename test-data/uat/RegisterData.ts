import { error } from "node:console";

const RegisterData = {
    validUser: {
        firstName: "UAT_John",
        lastName: "UAT_Doe",
        address: "123 Main St, Anytown, USA",
        email: "UAT_john.doe@example.com",
        phone: "UAT_1234567890",
        gender: "Male",
        hobby: "Cricket",
        language: "English",
        skills: "Java",
        country: "India",
        dob_year: "1990",
        dob_month: "January",
        dob_day: "1",
        password: "UAT_Pass123@",
        confirmPassword: "UAT_Pass123@",
        errorMessage: "Please select an item in the list."
    },

    invalidUser: {
        firstName: "QA_Jane",
        lastName: "QA_Doe",
        address: "QA-456 Oak Ave, Somewhere, USA",
        email: "QA_jane.doe@example.com",
        phone: "QA_Wrong123",
        gender: "Female",
        hobby: "Reading",
        language: "Spanish",
        skills: "Python",
        country: "Mexico",
        dob_year: "1995",
        dob_month: "June",
        dob_day: "15",
        password: "QA_Wrong123",
        confirmPassword: "QA_Wrong123",
        errorMessage: "Please select an item in the list."
    }
};

export default RegisterData;