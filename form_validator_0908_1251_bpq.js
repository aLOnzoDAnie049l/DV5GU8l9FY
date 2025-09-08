// 代码生成时间: 2025-09-08 12:51:48
class FormValidator {

  constructor(rules = {}) {
    // Store the validation rules
    this.rules = rules;
  }

  /**
   * Validates a given value against a rule.
   * @param {string} value The value to be validated.
   * @param {string} rule The rule to apply.
   * @returns {boolean} Whether the value is valid or not.
   */
  validateValue(value, rule) {
    switch (rule.type) {
      case 'required':
        return value.trim() !== "";
      case 'email':
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      case 'minLength':
        return value.length >= rule.minLength;
      case 'maxLength':
        return value.length <= rule.maxLength;
      case 'number':
        return !isNaN(Number(value));
      default:
        return true;
    }
  }

  /**
   * Validates all form fields.
   * @param {Object} formData An object containing the form data.
   * @returns {Object} An object containing the validation results.
   */
  validateForm(formData) {
    const validationResults = {};

    for (let field in this.rules) {
      const rule = this.rules[field];
      const value = formData[field];
      const isValid = this.validateValue(value, rule);

      if (!isValid) {
        validationResults[field] = `Field ${field} failed validation with rule ${rule.type}`;
      }
    }

    return validationResults;
  }
}

// Example usage:
const formRules = {
  username: { type: 'required' },
  password: { type: 'minLength', minLength: 8 },
  email: { type: 'email' }
};

const validator = new FormValidator(formRules);
const formData = {
  username: 'johndoe',
  password: 'password123',
  email: 'johndoe@example.com'
};

const results = validator.validateForm(formData);
console.log(results); // Should log validation results