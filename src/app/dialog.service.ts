import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private visibleSubject = new BehaviorSubject<boolean>(false);
  visible$ = this.visibleSubject.asObservable();

  showDialog() {
    
    this.visibleSubject.next(true);
  }

  hideDialog() {
    this.visibleSubject.next(false);
  }
}
