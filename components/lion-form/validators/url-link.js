import { Validator } from '@lion/form-core';

export class IsRightUrl extends Validator {
  static get validatorName() {
    return 'isRightUrl';
  }

  static get properties() {
    // eslint issue
    return {
      hasError: {
        attribute: false,
      },
    };
  }

  execute(value) {
    this.hasError = false;
    if (!value.startsWith('https://imgur.com/')) {
      this.hasError = true;
    }
    return this.hasError;
  }

  static getMessage({ fieldName }) {
    return `Please enter a valid imgur URL for ${fieldName}.
        That is https://imgur.com/ followed by your id upload.`;
  }
}
