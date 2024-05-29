import { validateNameLength, validatePasswordLength } from "./length";



describe('Field length validation', () => {

    describe('Name length validation', () => {
        let name = '';
        test('An empty name input should not be valid', ()=> {
            expect(validateNameLength(name)).toEqual(false);
        });
        test('Name should fail validation if it is less than 2 characters', ()=> {
            name = 'J';
            expect(validateNameLength(name)).toEqual(false);
        });
        test('A name input should pass if it is at least 2 characters', ()=> {
            name= "Jo";
            expect(validateNameLength(name)).toEqual(true);
        });
        test('A name input should pass if it is more than 2 characters', ()=> {
            name= "Joe";
            expect(validateNameLength(name)).toEqual(true);
        });

    });

    describe('Password length validation', () => {
        let password =" ";

        test('An empty password should fail validation', () => {
            expect(validatePasswordLength(password)).toEqual(false);
        })

        test('A password should fail validation if it is less than 6 characters', () => {
            password = "12345";
            expect(validatePasswordLength(password)).toEqual(false);
        });

        test('A password should pass validation if it is between 6 and 20 characters', () => {
            password = "123456789";
            expect(validatePasswordLength(password)).toEqual(true);
        })

    })

    // describe('Name length validation', () => {

    //     let name = '';
    //     test('An empty name input should not be valid', ()=> {
    //         expect(validateNameLength(name)).toEqual(false)
    //     });

    // },

 


    // test('Email should have an @ symbol', ()=> {
    //     email = 'jason@gmail.com'
    //     expect(email.includes('@')).toEqual(true);
    // });

    // test('A valid email should pass validation', ()=> {
    //     expect(validateEmail(email)).toEqual(true);
    // });

    // test('An invalid input should not pass validation', ()=> {
    //     email= 'jason@gmail'
    //     expect(validateEmail(email)).toEqual(false);
    // });

})