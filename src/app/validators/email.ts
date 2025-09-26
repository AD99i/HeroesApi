import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailEniValidator(): ValidatorFn {
    return (control: AbstractControl<string>) => {
        if(!control.value) return null;

        const forbidden = !control.value.endsWith('eni.fr')
        return forbidden ? { emailEniTruc: { value: control.value } } : null
    };
}