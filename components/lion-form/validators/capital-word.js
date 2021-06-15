import { Validator } from '@lion/form-core';

export class CapitalWord extends Validator {
  static get validatorName() {
    return 'CapitalWord';
  }

  static get properties() {
    return {
      hasError: {
        attribute: false,
      },
    };
  }

  execute(value) {
    this.hasError = false;
    if (!value[0].match(/[A-Z]/)) {
      this.hasError = true;
    }
    return this.hasError;
  }

  static getMessage({ fieldName }) {
    return `Please start with a capital letter for ${fieldName}.`;
  }
}
