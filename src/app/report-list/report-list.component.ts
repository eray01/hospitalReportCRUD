import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ReportsService } from '../reports.service';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})

export class ReportListComponent implements OnInit {
  userList: any = [];
  searchList: any = [];
  displayedColumns: string[] = ['date', 'tc', 'name', 'fileId', 'blood', 'display', 'edit', 'pdf'];
  dataSource: MatTableDataSource<any>;
  selection: any = new SelectionModel<any>(true, []);
  sendValue: any = [];
  isLoading = true;
  token: any;
  showList = false;
  reportList: any = [];
  exportData: any = [];
  date: Date = new Date();
  constructor(public dataService: ReportsService) { }

  ngOnInit() {

    //  this.token = data.error.error.text;
    this.getUser();
    this.getAllReport();
  }

  /*Kullanıcı Listesini alıyoruz */
  public async getUser() {
    this.selection.clear();
    this.sendValue = [];
    await this.dataService.getUser().then((data: any) => {
      //   console.log(data, 'userList');
      this.userList = data;
      this.dataSource = new MatTableDataSource(data);
      this.isLoading = false;
    });

  }
  getAllReport() {
    this.dataService.getAllReports().then((val: any) => {
      //  console.log(val, 'allreports');
      this.reportList = val;
      console.log(this.reportList, 'report', this.userList, 'user');
      this.userList.forEach(element => {
        this.reportList.forEach(el => {
          if (element.fileId === el.dosyaNo) {
            this.exportData.push({
              'Dosya No': element.fileId,
              'Ad Soyad': element.name,
              'TC No': element.tcId,
              'Kan Grubu': element.blood,
              'Tarih': element.date,
              'Adres': element.address,
              'Tanı': el.tani,
              'RaporEden': el.raporEden,
              'Rapor': el.rapor,
              'Myloblast': el.myloblast,
              'Promyelosit': el.promyelosit,
              'Myelosit': el.myelosit,
              'Metamyelosit': el.metamyelosit,
              'Comak': el.comak,
              'Parcali': el.parcali,
              'BazofilikSeri': el.bazofilikSeri,
              'EozinofilikSeri': el.eozinofilikSeri,
              'Lenfosit': el.lenfosit,
              'Promonosit': el.promonosit,
              'Monosit': el.monosit,
              'PlazmaHucresi': el.plazmaHucresi,
              'Proeritroblast': el.proeritroblast,
              'BazofilikErit': el.bazofilikErit,
              'PolikromalofilikErit': el.polikromalofilikErit,
              'OrtokromantofilikErit': el.ortokromantofilikErit,
              'Megakaryositler': el.megakaryositler,
              'Sellulerite': el.sellulerite,
            });
          }
        });

      });
    });
  }
  /*search işlemi */
  search(searhquery: string[]) {
    this.isLoading = true;
    if (searhquery.length >= 3) {
      this.selection.clear();
      this.sendValue = [];
      this.dataSource = null;
      this.dataService.getUserSearch(searhquery).then((data: any) => {
        // console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(this.userList);
    }
  }
  /* detay sayfasına id gönderme ve tekrar eden array fix */
  sendCheckList() {
    // const reduced = Object.keys(this.sendValue.reduce((p, c) => (p[c] = true, p), {}));
    // console.log(reduced);
    this.dataService.saveIds(this.sendValue);
  }

  isAllSelected() {
    this.sendValue = [];
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.selection._selection.forEach(element => {
      //   console.log(element, 'secilen tüm elemanlar');
      this.sendValue.push(element.fileId);
    });
    // console.log(this.selection._selection);
    console.log(this.sendValue, 'seçilen id');
    return numSelected === numRows;
  }

  pdfExport(id, name, address, blood, tc, date) {
    const doc = new jsPDF();
    this.dataService.getReportWithFileId(id).then((data: any) => {
      // tslint:disable-next-line:quotemark
      console.log(data);

      // tslint:disable-next-line:quotemark
      doc.text(id + " No'lu Hasta Raporu", 105, 30, null, null, 'center');
      doc.text(date + '', 200, 30);

      doc.text('Ad Soyad: ' + name + '', 20, 40);
      doc.text('TC No: ' + tc + '', 20, 50);
      doc.text('Adres: ' + address + '' + '', 20, 60);
      doc.text('Kan Grubu: ' + blood + '', 20, 70);
      doc.text('Tanı: ' + data.tani, 20, 75);
      doc.text('Rapor Eden: ' + data.raporEden, 20, 80);

      // 'Tanı': el.tani,
      // 'RaporEden': el.raporEden,
      // 'Rapor': el.rapor,
      // 'Myloblast': el.myloblast,
      // 'Promyelosit': el.promyelosit,
      // 'Myelosit': el.myelosit,
      // 'Metamyelosit': el.metamyelosit,
      // 'Comak': el.comak,
      // 'Parcali': el.parcali,
      // 'BazofilikSeri': el.bazofilikSeri,
      // 'EozinofilikSeri': el.eozinofilikSeri,
      // 'Lenfosit': el.lenfosit,
      // 'Promonosit': el.promonosit,
      // 'Monosit': el.monosit,
      // 'PlazmaHucresi': el.plazmaHucresi,
      // 'Proeritroblast': el.proeritroblast,
      // 'BazofilikErit': el.bazofilikErit,
      // 'PolikromalofilikErit': el.polikromalofilikErit,
      // 'OrtokromantofilikErit': el.ortokromantofilikErit,
      // 'Megakaryositler': el.megakaryositler,
      // 'Sellulerite': el.sellulerite,
      doc.save(id + '.pdf');
    });


  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.sendValue = [];
      console.log(this.sendValue, 'sendValueSilindi');

    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }
  // showAll() {
  //   this.dataSource = new MatTableDataSource(this.showAllList);
  //   this.showList = true;
  // }

  logout() {
    localStorage.clear();
    this.dataService.getToken();
  }
}
