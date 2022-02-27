import { FormControl } from "@angular/forms"
import { switchMap, timer } from "rxjs"
import { map } from "rxjs/operators"

export const UserNameExistValidator = (
    userService:any,
    time:number = 500
) => {
    return(input:FormControl) => {
        return timer(time).pipe(
            switchMap(()=> userService
            .isExistName(input.value)),
            map(response => {
                return !response ? null : {userNameExist:true};
            })
        );
    }
}