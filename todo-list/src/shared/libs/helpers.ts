/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @return {String} Combined classes
 */
export const composeClasses = (...styles: string[]): string => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) classes += `${arg} `;
  });

  return classes.trim();
};

/**
 * Button properties for the custom button
 */
export const ButtonProperties = {
  SIZES: {
    small: "small",
    medium: "medium",
    big: "big",
  },
  ICON_POSITION: {
    start: "start",
    end: "end",
  },
  VARIANT: {
    primary: {
      name: "primary",
      background: "purple-500",
      hover: "purple-700",
      disabled: "purple-300",
      focused: "purple-500",
      loader: "purple-300",
    },
  },
};

export const CheckBoxProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SHAPE: {
    square: "square",
    rounded: "rounded",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

/**
 * Separate classes with space between
 * This is used to separate a list of classes that are separated by commas to a list
 * classes that are separated by space
 * @param {string[]} classes
 * @return {string} classNames
 */
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const errorMessages = {
  email: "Email is not valid",
  maxChar: (num: number) =>
    `This field cannot have more than ${num} characters`,
  minChar: (num: number) => `This field must be at least ${num} characters`,
  minLowerCase: (num: number) =>
    `This field must be at least ${num} lower case character`,
  minUpperCase: (num: number) =>
    `This field must be at least ${num} upper case character`,
  minNumber: (num: number) => `This field must be at least ${num} number`,
  minSymbol: (num: number) =>
    `This field must be at least ${num} special character`,
  required: "This field is compulsory",
  passwordMatch: "Passwords dont match",
};

/**
 * Return sanitized HTML to be rendered to prevent XSS attacks from user generated content
 * Rationale: https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html
 * @param {String} content HTML content from server
 * @return {Object} Sanitized content
 */
export const getSanitizedHtml = (content: string) => ({ __html: content });

export const statusOptions = [
  {
    text: "All",
    value: "all",
  },
  {
    text: "Incomplete",
    value: "incomplete",
  },
  {
    text: "Completed",
    value: "completed",
  },
];

export const formatDate = (_date) =>{
  let date = new Date(_date);

  let options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}
