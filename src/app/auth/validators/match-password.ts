import { FormGroup, ValidationErrors, Validator } from '@angular/forms';

export class MatchPassword implements Validator {
  validate(formGroup: FormGroup): ValidationErrors | null {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return {
        passwordDoesntMatch: true,
      };
    }
  }
}
