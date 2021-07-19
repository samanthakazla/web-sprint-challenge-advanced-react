import React from "react";
import { render,screen,waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();

    test("form shows success message on submit with form details", () => {
        render(<CheckoutForm/>);
    
        const firstName = screen.getByLabelText(/first name:/i);
        const lastName = screen.getByLabelText(/last name:/i);
        const address = screen.getByLabelText(/address:/i);
        const city = screen.getByLabelText(/city:/i);
        const state = screen.getByLabelText(/state:/i);
        const zipcode = screen.getByLabelText(/zip:/i);
        const btn = screen.getByRole("button");
    
        userEvent.type(firstName, "sam");
        userEvent.type(lastName, "kazla");
        userEvent.type(address, "606 something street ");
        userEvent.type(city, "chicago");
        userEvent.type(state, "illinois");
        userEvent.type(zipcode, "60007");
        userEvent.click(btn);
    
        const success = screen.getByTestId(/successMessage/i);
        expect(success).toBeInTheDocument();
    
    
    
    
    
    });