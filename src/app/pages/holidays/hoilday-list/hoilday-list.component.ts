import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from 'src/app/services/holiday.service';
import { Hoilday } from '../../../hoilday';
@Component({
  selector: 'app-hoilday-list',
  templateUrl: './hoilday-list.component.html',
  styleUrls: ['./hoilday-list.component.css']
})
export class HoildayListComponent implements OnInit {

  holidays!: Hoilday[];

  constructor(private holidayService: HolidayService, private router: Router) { }

  ngOnInit(): void {
    this.getHolidays();
  }
  private getHolidays() {
    this.holidayService.getHolidayList().subscribe(data => {
      this.holidays = data;
      console.log(data);
    });
  }

  updateHoliday(id: number) {
    this.router.navigate(['/admin/update-holiday', id]);
  }

  deleteHoliday(id: number) {
    this.holidayService.deleteHoilday(id).subscribe(data => {
      console.log(data);
      this.getHolidays();
    })
  }
}


