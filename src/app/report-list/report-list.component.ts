import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ReportsService } from '../reports.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})

export class ReportListComponent implements OnInit {
  userList: any = [];
  searchList: any = [];
  displayedColumns: string[] = ['select', 'date', 'tc', 'name', 'fileId', 'blood', 'display', 'edit', 'pdf'];
  dataSource: MatTableDataSource<any>;
  selection: any = new SelectionModel<any>(true, []);
  sendValue: any = [];
  isLoading = true;
  constructor(public dataService: ReportsService) { }
  ngOnInit() {
    this.getUser();
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    // this.selection._selection.forEach(element => {
    //   console.log(this.selection.selected, 'selected');
    //   console.log(element);
    //   this.sendValue.push(element.fileId);
    // });

    return numSelected === numRows;
  }
  /*Kullanıcı Listesini alıyoruz */
  public async getUser() {
    await this.dataService.getUser().then((data: any) => {
       console.log(data, 'data');
      for (let i = 0; i < 20; i++) {
        this.userList.push(data[i]);
        // this.dataService.getReportWithFileId(data[i].fileId).then((element: any) => {
        //   console.log(element);

        // });
      }
      this.isLoading = false;
    });
    this.dataSource = new MatTableDataSource(this.userList);
    // console.log(this.dataSource);
  }
  /*search işlemi */
  search(searhquery: string[]) {
    this.isLoading = true;
    if (searhquery.length >= 3) {
      //  this.dataSource = null;
      this.dataService.getUserSearch(searhquery).then((data: any) => {
        console.log(data);
        this.isLoading = false;
        this.searchList.push(data);
        this.dataSource = this.searchList;
      });
    } else {
      this.isLoading = false;
      this.dataSource = this.userList;
    }
  }
  /* detay sayfasına id gönderme ve tekrar eden array fix */
  sendCheckList() {
    const reduced = Object.keys(this.sendValue.reduce((p, c) => (p[c] = true, p), {}));
    console.log(reduced);
    this.dataService.saveIds(reduced);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.selection._selection.forEach(element => {
      console.log(element, 'secilen tüm elemanlar');
      this.sendValue.push(element.name);
    });
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
