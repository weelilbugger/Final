import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
@Component({
selector: 'app-add-house',
templateUrl: './add-house.component.html',
styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
houseForm: FormGroup;
constructor(
public formBuilder: FormBuilder,
private router: Router,
private ngZone: NgZone,
private crudService: CrudService
) {
this.houseForm = this.formBuilder.group({
    year: [''],
    censustakername: [''],
    numberofpeople: [''],
    city: [''],
    state: [''],
    zip: ['']
})
}
ngOnInit(): void { }
onSubmit(): any {
this.crudService.AddHouse(this.houseForm.value)
.subscribe({
error: (err) => console.log(err)
})
this.ngZone.run(() => this.router.navigateByUrl('/houses-list'));
}
}
