export const isEmpty = (str) => str.trim() === "";

export const getPreparationTime = (str) => {
  const timeStr = str.toUpperCase().split("PT")[1];
  const time = timeStr.split(/[HMS]/)[0];
  const metric = timeStr[timeStr.length - 1];
  let metricStr = "";
  switch (metric) {
    case "M":
      metricStr = "Minutes";
      break;
    case "H":
      metricStr = "Hours";
      break;
    case "S":
      metricStr = "Seconds";
      break;
    default:
      metricStr = "Minutes";
      break;
  }
  return `${time} ${metricStr}`;
};

export const formatToken = (token) => `Bearer ${token}`;
