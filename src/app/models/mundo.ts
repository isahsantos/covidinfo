/* Interface para  auxiliar na extração dos objeto */ 
import { Global } from './global';
import { Countries } from './countries';

export interface Mundo {
  Global: Global;
  Countries: Countries[];
  Date: any;
}
