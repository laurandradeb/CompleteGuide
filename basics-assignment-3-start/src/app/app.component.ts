import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  display: boolean = false;
  log = [];
  count: number = 1;

  onDisplay() {
    this.display = !this.display;
    this.log.push(this.count++);
  }
}
