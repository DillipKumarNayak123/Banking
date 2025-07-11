import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  freezeAccount(userId: string) {
    return this.http.patch(`/api/admin/freeze/${userId}`, {});
  }

  unfreezeAccount(userId: string) {
    return this.http.patch(`/api/admin/unfreeze/${userId}`, {});
  }
}
