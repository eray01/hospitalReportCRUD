import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-export-to-excel',
  templateUrl: './export-to-excel.component.html',
  styleUrls: ['./export-to-excel.component.scss']
})
export class ExportToExcelComponent implements OnInit {
  @Input() jsonData: any = [];
  @Input() fileName: any;
  constructor() { }

  ngOnInit() { }

  ConvertToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    for (const index of Object.keys(objArray[0])) {
      row += `${index};`;
    }
    row = row.slice(0, -1);
    str += `${row}\r\n`;

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (const index of Object.keys(array[i])) {
        if (line !== '') {
          line += ';';
        }
        line += array[i][index];
      }
      str += `${line}\r\n`;
    }
    return str;
  }

  download() {
    const csvData = this.ConvertToCSV(this.jsonData);
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.fileName + '.csv';
    a.click();
    return 'success';
  }
}
