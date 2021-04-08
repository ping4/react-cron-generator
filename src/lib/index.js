import cronstrue from 'cronstrue';
import Cron from './cron';
import { HEADER } from './meta';

function convertToReadable(cronExpr, opts) {
  return cronstrue.toString(cronExpr, opts);
}
export { HEADER, convertToReadable };
export default Cron;