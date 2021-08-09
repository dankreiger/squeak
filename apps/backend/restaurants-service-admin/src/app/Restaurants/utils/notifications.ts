export const getInvalidOpeningTimesNotification = (
  getSource: (str: string) => string
) =>
  `Something is wrong with the opening times schema. Source is: ${getSource(
    ''
  )}`;

export const getSourceGetterNotAFunction = (getSource: any) =>
  `react-admin getSource function is not a function. Received: ${getSource} `;
