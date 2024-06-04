import { reducer } from "../../../shared/utils/test-utils";
import axios from 'axios';

import SigninForm from "./SigninForm";

describe("Signin Form", () => {
    
    let signInButton = null;

    beforeEach(() => {
        reducer(<SigninForm/>)
        signInButton = sreen.getByRole('button', {name: /login/, i})
    })
    test("Login button should be in the document", () => {
        expect(signInButton).toBeInTheDocument();
    })
})