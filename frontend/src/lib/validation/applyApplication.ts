interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  fitnessLevel: string;
  incomeGoal: string;
  motivation: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateApplication(data: ApplicationFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // First Name
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required.';
  } else if (data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters.';
  }

  // Last Name
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  } else if (data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters.';
  }

  // Email
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Age
  if (!data.age.trim()) {
    errors.age = 'Age is required.';
  } else {
    const ageNum = parseInt(data.age, 10);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      errors.age = 'Please enter a valid age between 18 and 100.';
    }
  }

  // Fitness Level
  if (!data.fitnessLevel) {
    errors.fitnessLevel = 'Please select your current fitness level.';
  }

  // Income Goal
  if (!data.incomeGoal.trim()) {
    errors.incomeGoal = 'Income goal is required.';
  } else if (data.incomeGoal.trim().length < 5) {
    errors.incomeGoal = 'Please provide more detail about your income goal.';
  }

  // Motivation
  if (!data.motivation.trim()) {
    errors.motivation = 'Please tell us why you want to join RICHUAL.';
  } else if (data.motivation.trim().length < 50) {
    errors.motivation = 'Please provide at least 50 characters explaining your motivation.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
