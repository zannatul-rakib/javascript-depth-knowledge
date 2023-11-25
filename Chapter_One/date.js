var date = new Date();
console.log(date); // 2023-11-22T02:36:32.206Z
console.log(date.toDateString()); // Wed Nov 22 2023
console.log(date.toTimeString()); // 08:37:38 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleDateString()); // 11/22/2023
console.log(date.toLocaleString()); // 11/22/2023, 8:38:45 AM
console.log(date.getDate()); // 22 [showing here only current date and time]
console.log(date.getFullYear()); // 2023
console.log(date.getMonth()); // 10(November) [javascript array start from 0]
console.log(date.getHours()); // 8(8am) [showing current time only]
console.log(date.getMinutes()); // 42 [showing current time only]
console.log(date.getSeconds()); // 32 [showing current time only]
