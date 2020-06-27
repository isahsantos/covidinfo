/* Interface para definir o tipo de objeto que vou extrair do Json, do link url pais, que é filtrado atraves do 
link da api */ 
export interface Data {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: any;
  Lon: any;
  Cases: number;
  Status: string;
  Date: string;
}
