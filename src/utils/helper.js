import moment from "moment";
export function wait(time = 3000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function dateFormat(date) {
  return moment(date).format("Do MMM YY");
}
