import { inject } from "@angular/core"
import { ListService } from "./ser-rou-auth/login-page/login.service"
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { ResolveListService } from "./Resolve_Demo/resolve-child/users.service";
import { PostService } from "./ASSESSMENT/post.service";

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

export const authoResolve = (route : ActivatedRouteSnapshot) =>{
    const postData = inject(PostService); 
    const postId = route.queryParams['postId'];   
    return postData.getAData(postId);
    //we can get postData.id because we are injecting and all the values can be got
}