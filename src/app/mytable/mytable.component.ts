import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent {

  title = 'sampleapp1';

  students: Object[] = [
    { name: 'manikanta', marks: '82' },
    { name: 'tejaswi', marks: '60' },
    { name: 'dileep', marks: '70' },
    { name: 'sarath', marks: '50' },
    { name: 'kumar', marks: '60' },
    { name: 'munna', marks: '28' },
    { name: 'kiran', marks: '40' },
    { name: 'drona', marks: '45' },
    { name: 'vasu', marks: '60' },
    { name: 'ashok', marks: '25' },

  ]
}
