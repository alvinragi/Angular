import { inject } from "@angular/core"
import { ListService } from "./login-page/login.service"
import { Router } from "@angular/router";

export const authGuard = () => {
    const authService = inject(ListService); //acts like constructor
    const router = inject(Router);
    if(authService.isLoggedIn){
        return true;
    }
    else{
        router.navigate(['']);    //where username is entered
        return false;
    }
}