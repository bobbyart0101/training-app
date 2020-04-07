import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    tableStyle = 'material';

    rows = [
        {weight: 'Austin', rep: 'Male'},
        {weight: 'Dany', rep: 'Male'},
        {weight: 'Molly', rep: 'Female'},
    ];
    columns = [
        {name: 'Weight'},
        {name: 'Rep'}
    ];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.searchResult.subscribe((res) => {
            const tableResult = res[1];
            const updateRows = [];
            console.log(tableResult);
            tableResult.forEach((row) => {
              const updateRow = {weight: row[0], rep: row[1]};
              updateRows.push(updateRow);
            });
            this.rows = [...updateRows];
        });
    }

}
