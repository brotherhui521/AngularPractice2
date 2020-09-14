import { FormControl } from '@angular/forms';

export class CustomValidators {
    static titlecased(input:FormControl):(null|{titlecased}){
        let text=input.value;
        if (text.match("^[A-Z][a-zA-Z]*$")) return null;
        else return {titlecased:"First letter should be uppercase"};
    } 
}
