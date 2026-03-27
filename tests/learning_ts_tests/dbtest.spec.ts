import { test } from '@playwright/test';
import { executeQuery } from '../../utils/dbUtil';


test('Get customer by runtime id @feature:DB_Testing @story:Validate customer Table @severity:medium', async () => {

    const customerId = 52; // runtime value (can come from UI/API/test data)

    const result = await executeQuery(
        `select first_name, last_name, email 
     from customer 
     where customer_id = $1`,
        [customerId]
    );

    const firstName = result.rows[0].first_name;
    const lastName = result.rows[0].last_name;
    const email = result.rows[0].email;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

});