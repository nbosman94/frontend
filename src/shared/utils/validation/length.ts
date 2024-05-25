import { LengthOptiions } from "./models/options/length";
import { ValidatorFn } from "./models/ValidatiorFn";

const _validateLength: ValidatorFn = (text: string, options?: LengthOptiions): boolean => {
        const textLength = text.trim().length;
        if(options?.min && textLength < options.min) return false;
        if(options?.max && textLength > options.max) return false;
        return true;

}

export const validatePasswordLength: ValidatorFn = (text: string): boolean => {
        return _validateLength(text, {min: 6, max: 12});
}

export const validateNameLength: ValidatorFn = (text: string): boolean => {

        return _validateLength(text, { min: 2 });
      };