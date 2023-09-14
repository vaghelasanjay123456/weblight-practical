import moment from 'moment'
import { appendFileSync } from 'fs'

export async function writeErrorLog(req, error) {
  const requestURL = req.protocol + "://" + req.get('host') + req.originalUrl;
  const requestBody = JSON.stringify(req.body);
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  appendFileSync('errorLog.log', "REQUEST DATE : " + date + "\n" + "API URL : " + requestURL + "\n" + "API PARAMETER : " + requestBody + "\n" + "Error : " + error + "\n\n");
}