import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string = new Date().toISOString()

  distributionDropdownList = [];

  ngOnInit() {
    this.distributionDropdownList = [
      { item_text: "RSCP VP", item_id: 1 },
      { item_text: "WWP SVP", item_id: 2 },
      { item_text: "GOE", item_id: 3 },
      { item_text: "GSM Manager", item_id: 4 }
    ];
  }
}
