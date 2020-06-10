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
    case "S":
      metricStr = "Seconds";
    default:
      metricStr = "Minutes";
  }
  return `${time} ${metricStr}`;
};
