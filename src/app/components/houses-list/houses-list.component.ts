import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {

  Houses:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetHouses().subscribe(res => {
      console.log(res)
      this.Houses =res;
    });    
  }
  onUpdate(id: any): any {
    this.crudService.setHouseId(id);
  }

  onDelete(id: any): any {
    this.crudService.DeleteHouse(id)
    .subscribe(res => {
    console.log(res)
    })
    location.reload();
    }
}
