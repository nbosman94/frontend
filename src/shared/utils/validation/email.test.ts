
import { validateEmail } from "./email";

describe('Email validation', () => {
    let email = '';
    test('An empty input should not be valid', ()=> {
        expect(validateEmail(email)).toEqual(false);
    });

    test('Email should have an @ symbol', ()=> {
        email = 'jason@gmail.com'
        expect(email.includes('@')).toEqual(true);
    });

    test('A valid email should pass validation', ()=> {
        expect(validateEmail(email)).toEqual(true);
    });

    test('An invalid input should not pass validation', ()=> {
        email= 'jason@gmail'
        expect(validateEmail(email)).toEqual(false);
    });

})