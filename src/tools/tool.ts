import * as fs from 'fs';
import * as json2csv from 'json2csv';

/**
 * Function that writes to a local file by the parms you get from the User:
 * @param data
 * @param path
 * @param type
 */
export function writeToFile(data: string, path: string, type: string) {
  fs.writeFile(`./${path}.${type}`, data, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
}

/**
 * Function that checks if a date is less the a week ago
 * @param date
 */
export function isLessThanAWeekAgo(date) {
  var today = new Date();
  today.setDate(today.getDate() - 7);
  var mydate = new Date(date);
  var difference = today.getTime() - mydate.getTime(); // difference in milliseconds
  const msInWeek = 1000 * 60 * 24 * 7;
  if (Math.floor(difference / msInWeek) >= 7) {
    return false;
  }
  return true;
}

/**
 * Function that converts a JSON to CSV
 * @param data
 * @param path
 */
export function writeToCSV(data: any[], path: string) {
  if (data.length > 0) {
    try {
      const parser = new json2csv.Parser();
      const csv = parser.parse(data);
      writeToFile(csv, path, 'csv');
    } catch (err) {
      console.error(err);
    }
  } else {
    console.error('No campaign found with the desired information');
  }
}
