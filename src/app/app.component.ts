import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello_World ';
  imgUrl="../assets/Bridgelabz_logo.png";
  url="https://www.bridgelabz.com/";
  userName:String="";
  ngOnInit(): void {
    this.title="Hello from BridgeLabz.";
  }

  onClick($event: any){
    console.log("save button is clicked!",$event);
    window.open(this.url,"_blank");

  }
}
