import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FixedTerms } from '@core/model/user.data';
import { UserDataService } from '@core/services/user-data.service';

@Component({
  selector: 'ab-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {
  displayedColumns: string[] = ['accountId', 'userId', 'id', 'amount', 'closing_date', 'createdAt','creation_date', 'eliminar'];
  PlazosFijos!:FixedTerms
  plazosForm!: FormGroup;
  dataSource!:MatTableDataSource<FixedTerms[]>

  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator




  constructor(private plazos:UserDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.plazosForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      accountId: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      creationDate: ['', [Validators.required]],
      closeDate: ['', [Validators.required]]
    })

    this.plazosFijos()
    this.getPlazos()
  }
  plazosFijos(){
    const plazos: FixedTerms = this.plazosForm.value;
    this.plazos.postFixedDeposits(plazos).subscribe(data => {
      console.log(data)
    })
  }

  eliminarPlazo(id:number){
    this.plazos.deleteFixedDeposits(id).subscribe(data => {
      location.reload()
    })
  }

  getPlazos(){
    this.plazos.getFixedDeposits().subscribe(lista => {
      const {data} = lista
      this.dataSource = new MatTableDataSource(data)
      console.log(data)
      console.log(this.dataSource)
    })
  }

}
