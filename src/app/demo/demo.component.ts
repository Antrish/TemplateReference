import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  sayHello(inputElemValue : HTMLInputElement){
   // alert('Hello ' +inputElemValue.value)
    console.log(inputElemValue) // this shows that a html element object is added in the dom
                                // "<input _ngcontent-tkc-c0="" type="text">"
  }
}
