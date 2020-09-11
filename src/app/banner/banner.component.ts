import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  images: string[] = ['rout1', 'rout2', 'routimage3'];

  constructor() {}

  ngOnInit(): void {}
}
