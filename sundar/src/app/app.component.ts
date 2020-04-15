import { 
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

    constructor() {
      console.log(" Constructor called");
    }


  ngOnChanges(): void {
    console.log("1. on changes is called");
  }

  ngOnInit(): void {
    console.log("2. on init is called");
  }

  ngDoCheck(): void {
    console.log("3. do check is called");
  }

  ngAfterContentInit(): void {
    console.log("4. after content init called");
  }

  ngAfterContentChecked(): void {
    console.log("5. after content check called");
  } 

  ngAfterViewInit(): void {
    console.log('6. after view init called');
  }
 
  ngAfterViewChecked(): void {
    console.log('7. after view init checked');
  }

  ngOnDestroy(): void {
    console.log('8. on destroy called');
  }
  title = 'hooks';

}