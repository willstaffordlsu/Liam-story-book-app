import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | Going To The Game",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Tiger Stadium",
      url: "/chapter2"
    },
    { 
      title: "Chapter 3 | Getting To Our Seats",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Game Time",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | Mike The Tiger",
      url: "/chapter5"
    },
    {
      title: "Chapter 6 | Victory For LSU!",
      url: "/chapter6"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
