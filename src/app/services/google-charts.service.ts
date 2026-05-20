
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GoogleChartsService {

  private loaded = false;

  load(): Promise<void> {
    if (this.loaded) return Promise.resolve();

    return new Promise((resolve) => {
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(() => {
        this.loaded = true;
        resolve();
      });
    });
  }

  query(url: string): Promise<any[]> {
    return this.load().then(() => {
      return new Promise((resolve, reject) => {
        const query = new google.visualization.Query(url);
        query.send((response: any) => {
          if (response.isError()) {
            reject(response.getMessage());
          } else {
            resolve(response.getDataTable());
          }
        });
      });
    });
  }
}
