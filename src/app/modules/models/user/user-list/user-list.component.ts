// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';


// ##################################################################################################
// ## CLASE UserListComponent
// ##################################################################################################
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [
    './user-list.component.css',
    '../../styles/style.css',
  ],
})
export class UserListComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  @Input() userList : User[] = [];
  selectedUser      : EventEmitter<User> = new EventEmitter();

  ELEMENT_DATA      : User[] = [];
  dataSource!       : MatTableDataSource<User>;

  displayedColumns: string[] = [
    'name',
    'firstSurname',
    'secondSurname',
    'login',
    'isCustomer',
    'flexibleSchedule',
    'contacts',
    'userSchedule',
  ];

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false })
  sort!: MatSort;

  @ViewChild("inputTableSearch", { static: false })
  inputTableSearch!: ElementRef;

  filter            : string = '';
  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
  ) { }

  // ************************************************************************************************
  // ** MÉTODOS DE ANGULAR
  // ************************************************************************************************
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Empregase o setTimeout() para deixar tempo a que se cargue a vista
    setTimeout(() => {
      this.inputTableSearch.nativeElement.focus();

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  // ************************************************************************************************
  // ** MÉTODOS PROPIOS
  // ************************************************************************************************
  loadData() {
    this.ELEMENT_DATA = [];
    this.ELEMENT_DATA = this.userList;

    this.dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data: User, filter: string): boolean => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return (currentTerm + (data as { [key: string]: any })[key] + '◬');
      },'').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      const transformedFilter = filter.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      return dataStr.indexOf(transformedFilter) !== -1;
    };
  }

  /**
  * Devolve o obxecto User selecionado (que se fai click sobre el).
  * @param user obxecto User selecionado
  */
   returnUser(user: User): void {
    this.selectedUser.emit(user);
  }

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
  getContact(element: User) {
    return (element.contacts)
      ? element.contacts[0]
      : '';
  }

  getUserSchedule(element: User) {
    return (element.userSchedule)
      ? element.userSchedule.description
      : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
