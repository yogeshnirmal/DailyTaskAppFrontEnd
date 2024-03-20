import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hoilday } from 'src/app/hoilday';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-create-holiday',
  templateUrl: './create-holiday.component.html',
  styleUrls: ['./create-holiday.component.css']
})
export class CreateHolidayComponent implements OnInit {

  holiday: Hoilday = new Hoilday();

  constructor(private holidayService: HolidayService, private router: Router) { }

  ngOnInit(): void {
  }

  saveHoliday(value: any) {
    this.holiday.holidayDate = new Date(value);
    this.holidayService.createHoilday(this.holiday).subscribe(data => {
      console.log(data);
      this.goToHolidayList();
    },
      error => console.log(error));
  }

  goToHolidayList() {
    this.router.navigate(['/admin/holiday']);
  }

  onSubmit(value: any) {
        this.saveHoliday(value);
  }
}
