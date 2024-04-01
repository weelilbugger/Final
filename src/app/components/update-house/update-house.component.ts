import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-update-house',
templateUrl: './update-house.component.html',

styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent implements OnInit {
Form: FormGroup;

constructor(
public formBuilder: FormBuilder,
private router: Router,
private ngZone: NgZone,
private crudService: CrudService,
private route: ActivatedRoute
) {
this.Form = this.formBuilder.group({
isbn: [''],
title: [''],
author: [''],
description: [''],
published_year: [''],
publisher: ['']
})
}
ngOnInit(): void { 
  // Accessing the parameter value from the URL
  const houseId = this.route.snapshot.paramMap.get('id');
  console.log('House ID:', houseId);}
onSubmit(): void {
  
    this.crudService.UpdateHouse(this.route.snapshot.paramMap.get('id'), this.Form.value)
      .subscribe(() => {
        console.log('House updated successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/houses-list'));
      });
  
}
}
