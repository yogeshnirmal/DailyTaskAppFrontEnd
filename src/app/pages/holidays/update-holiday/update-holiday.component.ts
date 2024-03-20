import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hoilday } from 'src/app/hoilday';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.css']
})
export class UpdateHolidayComponent implements OnInit {
  id!: number;

  holiday: Hoilday = new Hoilday();

  constructor(private holidayService: HolidayService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.holidayService.getHoildayById(this.id).subscribe(data => {
      this.holiday = data;
    }, error => console.log(error));
  }

  onSubmit(value: any) {
    this.holiday.holidayDate = new Date(value);
    this.holidayService.updateHoilday(this.id, this.holiday).subscribe(data => {
      this.goToEmployeeList();
    }
      , error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/admin/holiday']);
  }
}

