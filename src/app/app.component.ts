import { Component } from '@angular/core';
import { Data } from './models/data';
import { SarscovDashboardService } from './services/sarscov-dashboard.service';
import { from } from 'rxjs';
import { Mundo } from './models/mundo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testeAnimaFrontend';
  /**
   * pais = 
   * pais = {}  - Definir o tipo do objeto que recebo da api para os casos brasileiros ;
  mundo = {} as Mundo - Definir o tipo para obter os casos  mundialmente e  o top de 10 paises;
  total_brasil: number - variavel para passar o total de casos do brasil por interpolation;
  total_mundo: number - variavel para passar o total de casos mundialmente pos interpolation;
  cases_order: any; array para o top 10 de pais  

   */
  pais = {} as Data;
  mundo = {} as Mundo;
  total_brasil: number;
  total_mundo: number;
  last_date: any;
  cases_order: any;

  paises: Data[];
  mundial: Mundo[];

  ngOnInit() {
    this.getCasosnoBrasil(); 
    this.getCasosMundo();
    /*
    Métodos utilizado para extrair as informações através do Service 
    */ 
  }
  constructor(private sarscovService: SarscovDashboardService) {
    this.total_brasil = 0;
    this.total_mundo = 0;
  }

  getCasosnoBrasil() {
    this.sarscovService.getCasosnoBrasil().subscribe((paises: Data[]) => {
      this.paises = paises;
      console.log('Paises', this.paises);

      var keyCount = paises.length - 1;
      var total = paises[keyCount].Cases;
      this.total_brasil = total;
      this.last_date = paises[keyCount].Date;
    });
  }

  async getCasosMundo() {
    console.log('iniciou => getCasosMundo');

    this.sarscovService.getCasosMundo().subscribe((mundo: any) => {
      console.log('mundo => ', mundo);
      this.mundial = mundo;
/* const  para receber o tipo da classe, cada classe é referente a um objeto do json*/ 

      const { Global, Date, Countries } = mundo;

    /** Ordenação do top dez numero de casos por pais */
      const contriesOrdened = Countries.sort((a, b) => {
        return b.TotalConfirmed - a.TotalConfirmed;
      }).slice(0, 10);

      this.cases_order = contriesOrdened;
      console.log('Cases Order =>', this.cases_order);

      const {
        NewConfirmed,
        TotalConfirmed,
        NewDeaths,
        TotalDeaths,
        NewRecovered,
        TotalRecovered,
      } = Global;
      this.total_mundo = TotalConfirmed;
    });
  }
}
