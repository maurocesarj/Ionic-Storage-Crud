import { Component } from '@angular/core';

// import storage 
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    // Criando objeto Storage dentro do constructor 
    private storage: Storage
  ) {}

  async ngOnInit() {
    // Cria o Storage quando o arquivo for carregado 
    await this.storage.create();
  }
}
