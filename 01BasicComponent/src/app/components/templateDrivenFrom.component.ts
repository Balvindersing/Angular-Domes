import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-template-driven-form",
    templateUrl: '../components/templateDrivenFrom.component.html'
})
export class TemplateDrivenForm implements OnInit {
    userName: string = "";
    password: string = "";

    login_Model = {
        userName: "",
        password: ""
    }
    constructor() {

    }
    ngOnInit(): void {

    }

    formSubmitHandler(formData: any) {
        debugger
        let formDataObj = {
            userName: formData.elements.username.value,
            password: formData.elements.password.value
        }
        console.log(formDataObj);

    }
    loginFormSubmit() {
        console.log(this.login_Model)
    }

}