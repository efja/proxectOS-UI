// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { CommentApp } from 'src/app/models/commentapp.model';
import { User } from '../../../../models/user.model';
import { checkType } from '../../../../helpers/check-types.helper';

// ##################################################################################################
// ## CLASE CommentAppListComponent
// ##################################################################################################
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: [
    '../../styles/style.css',
  ],
})
export class CommentListComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  @Input() commentsList     : CommentApp[] = [];
  @Input() title            : string = 'Comentarios';

  selectedCommentApp        : EventEmitter<CommentApp> = new EventEmitter();

  ELEMENT_DATA              : CommentApp[] = [];
  dataSource!               : MatTableDataSource<CommentApp>;

  @Input() displayedColumns : string[] = [
    'expirationDate',
    'title',
    'message',
    'createdBy',
    'visibleToUserGroups',
  ];

  @ViewChild(MatPaginator, { static: false })
  paginator!                : MatPaginator;

  @ViewChild(MatSort, { static: false })
  sort!                     : MatSort;

  @ViewChild('inputTableSearch', { static: false })
  inputTableSearch!         : ElementRef;

  filter                    : string = '';

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
    private spinner: NgxSpinnerService
  ) {}

  // ************************************************************************************************
  // ** MÉTODOS DE ANGULAR
  // ************************************************************************************************
  ngOnInit(): void {}

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
    this.ELEMENT_DATA = this.commentsList;

    this.dataSource = new MatTableDataSource<CommentApp>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (
      data: CommentApp,
      filter: string
    ): boolean => {
      const dataStr = Object.keys(data)
        .reduce((currentTerm: string, key: string) => {
          return currentTerm + (data as { [key: string]: any })[key] + '◬';
        }, '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      const transformedFilter = filter
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      return dataStr.indexOf(transformedFilter) !== -1;
    };
  }

  /**
   * Devolve o obxecto CommentApp selecionado (que se fai click sobre el).
   * @param commentApp obxecto CommentApp selecionado
   */
  returnCommentApp(commentApp: CommentApp): void {
    this.selectedCommentApp.emit(commentApp);
  }

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
  getUser(user: User | any) {
    const userType = checkType(user);
    let result = '';

    if (userType.isObjectID) {
      result = user.toString();
    } else {
      result = `${user.name} ${user.firstSurname} ${user.secondSurname}`;
    }

    return result;
  }

  getUserGroup(element: CommentApp) {
    return element.visibleToUserGroups && element.visibleToUserGroups.length > 0
      ? element.visibleToUserGroups[0].name
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
