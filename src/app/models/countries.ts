/* Interface para definir o tipo de objeto que vou extrair do Json, do link url mundo*/ 
export interface Countries {
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: Date,
}