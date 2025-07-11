import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccounts(userId: string) {
    return this.http.get(`/api/accounts/${userId}`);
  }
}
