import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent{
  @Input() title: string | undefined;
  searchText:any;
  @Output() search = new EventEmitter<any>();

  onSearch() {
    this.search.emit(this.searchText);
  }

  
}
