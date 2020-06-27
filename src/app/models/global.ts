/* Interface para definir o tipo de objeto que vou extrair as informações mundialmente */ 
export interface Global {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}