import { Component, inject, OnInit } from '@angular/core';
import { salesdata } from '../../model/sales';
import { Chart, registerables } from 'chart.js';
import { ProductsService } from '../../service/products.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  chartdata: salesdata[] = []
  labeldata: number[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  propertyList: any[] = [];

  productService = inject(ProductsService)


  ngOnInit(): void {
    this.loadchartdata();
    this.getAllpropertyList();
  }

  getAllpropertyList(){
     this.productService.getAllproperties().subscribe((res:any) => {
         this.propertyList = res;  
     })
  }

  loadchartdata() {
    this.productService.loadsalesdata().subscribe(item => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.map(o => {
          this.labeldata.push(o.year);
          this.realdata.push(o.amount);
          this.colordata.push(o.colorcode)
        })
        this.Renderbarchart(this.labeldata, this.realdata, this.colordata);
        this.Renderpiechart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  Renderbarchart(labeldata: any, valuedata: any, colordata: any){
    this.Renderchart(labeldata,valuedata,colordata,'barchart','bar')
  }
  Renderpiechart(labeldata: any, valuedata: any, colordata: any){
    this.Renderchart(labeldata,valuedata,colordata,'piechart','pie')
  }

  Renderchart(labeldata: any, valuedata: any, colordata: any,chartid:string,charttype:any) {
    const mychar = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No. Of Students',
            data: valuedata,
            backgroundColor: colordata,

          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }

    });
  }
}
