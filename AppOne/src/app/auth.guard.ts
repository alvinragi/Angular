import { inject } from "@angular/core"
import { ListService } from "./ser-rou-auth/login-page/login.service"
import { Router } from "@angular/router";
import { ResolveListService } from "./Resolve_Demo/resolve-child/users.service";

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
};
export const authResolve = () => {
    const userData = inject(ResolveListService);
    return userData.getUsers();
}