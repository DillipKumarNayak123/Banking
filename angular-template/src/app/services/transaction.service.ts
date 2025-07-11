import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TransactionService {
  constructor(private http: HttpClient) {}

  transferFunds(data: any) {
    return this.http.post('/api/transfer', data);
  }

  getTransactions(accountId: string) {
    return this.http.get(`/api/transactions/${accountId}`);
  }
}
