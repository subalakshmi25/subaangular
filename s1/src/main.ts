import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { map, filter, take } from "rxjs/operators";
import { interval, pipe,of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
class AppComponent {
  constructor() {}

  ngOnInit() {
    const nums = of(1, 2, 3);

    const squareValues = map((val: number) => val + val);
    const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x))
interval(500)
      .pipe(
        take(20),
        map(s => Date.now())
      )
      .subscribe(value => console.log("the value of subscriber is " + value));

    ;

    }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
