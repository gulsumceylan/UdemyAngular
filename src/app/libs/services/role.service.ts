import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  connection = environment.api.nestjs.role + '/role';

  constructor(private httpClient: HttpClient) { }

  getAllRoles(){
   return this.httpClient.get<any>(this.connection);
  }

  addRole(role:any){
    return this.httpClient.post<any>(this.connection,role);
  }

  editRole(role:any){
    return this.httpClient.put<any>(this.connection +`/${role.id}`,role)
  }

  deleteRole(role:any){
    return this.httpClient.delete<any>(this.connection +`/${role.id}`,role)
  }
}
