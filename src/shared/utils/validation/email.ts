import { ValidatorFn } from "./models/ValidatiorFn";

export const validateEmail: ValidatorFn = (email: string) : boolean => {

    // validating email input against regular expression
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    return re.test(email.trim());
}