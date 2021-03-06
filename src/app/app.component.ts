import { Component, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  openModalWithClass(template: TemplateRef<any>) {
   
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray custom-modal modal-lg ' })
    );
  }
}
