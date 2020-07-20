import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  template: `<div header>
                I'am header
            </div>
            <div body>
              I'am body
            </div>`
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}