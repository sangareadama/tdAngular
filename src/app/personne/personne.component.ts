import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PersonneServiceService } from '../services/personne-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from '../Model/Personne';
import {ConfirmationService, PrimeNGConfig,ConfirmEventType, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';


@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss'],
  styles: [`
        .outofstock {
            font-weight: 700;
            color: #FF5252;
            background-color: #64aa0d !important;
            text-decoration: line-through;
        }

        .lowstock {
            background-color: #64d50d !important;
            border-radius:1em;
            color: #FFA726;
        }

        .instock {
           
            color: #66BB6A;
        }

        :host ::ng-deep .row-accessories {
            background-color: rgba(0,0,0,.15) !important;
        }
    `
    ],
  providers: [ConfirmationService,MessageService]
})
export class PersonneComponent implements OnInit {
  component: any;
  cols!: any[];

  _selectedColumns!: any[];

  ngOnInit(): void { 
    
    this.onGetpersonne();
    this.onGetDepartement();
    this.cols = [
      { field: 'nom', header: 'Nom' },
      { field: 'prenom', header: 'Prenom' },
      { field: 'age', header: 'Age' },
      { field: 'status', header: 'Status' }
    ];

  this._selectedColumns = this.cols;

  }  

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
}

  constructor(private toast: ToastrService,private messageService: MessageService,private personneService: PersonneServiceService,private confirmationService: ConfirmationService){}

  public personnes!: Personne[];
  public personnes1!: Personne[];
  public departements!:any[];
  savePersonne!: boolean; 
  updatePersonne!: boolean;  
  deletePersonne!: boolean;
  submitted!:boolean;

  personneForm!:FormGroup;  
  personneFormUpdate!:FormGroup;
  personne:Personne = new Personne(0,"","",0,0)
  personneUpdate:Personne = new Personne(0,"","",0,0)

  nodes1!: any[];    
  selectedNodes1: any[] = [];
  valeur="super";
    
  msgs: Message[] = [];
  position!: string;

  public fonctionCalcul(a:number,b:number){
    return a*b;
  }
  
  onDeleteConfirmation(position: string,personneToDelete:any) {
    this.position = position;

    this.confirmationService.confirm({
        message: 'Voulez vous supprimer ce element ?',
        header: 'Confirmation de suppression',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.onDeletePersonne(personneToDelete)
        },
        reject: (type: any) => { 
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'warn', summary:'Rejeté', detail:'Vous avez rejeté'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Annulé', detail:'Vous avez annulé'});
                break;
            }
        },
        key: "positionDialog"
    });
  }

  
 
    
  public onGetpersonne(){
    this.personneService.getPersonne().subscribe(
      (response:any[])=>{
        this.personnes=response;
        this.personnes1=response;
        console.log(this.personnes)
      },
      (error:HttpErrorResponse)=>{  
          // alert(error.message);
      }
    );
  } 

  public onGetDepartement(){
    this.personneService.getDepartement().subscribe(
      (response:any[])=>{
        this.departements=response;
        console.log(this.personnes)
      },
      (error:HttpErrorResponse)=>{  
          // alert(error.message);
      }
    );
  } 

  openPersonnedialog() {
    this.initFormPersonne(); 
    this.submitted = false;
    this.savePersonne = true;
  }

  initFormPersonne() {  
    this.personneForm = new FormGroup({
    id:new FormControl(null, Validators.required) ,
    nom:new FormControl(null, Validators.required) ,
    prenom:new FormControl(null, Validators.required) ,
    age:new FormControl(null, Validators.required) ,
    departementId:new FormControl(null, Validators.required)
    })  
  } 
  initFormUptadePersonne() {  
    this.personneFormUpdate = new FormGroup({
    id:new FormControl(null, Validators.required) ,
    nom:new FormControl(null, Validators.required) ,
    prenom:new FormControl(null, Validators.required) ,
    age:new FormControl(null, Validators.required) ,
    departementId:new FormControl(null, Validators.required)
    })  
  }

  UpdatePersonne(personneSelected:any){

    this.submitted = false;
    this.updatePersonne=true;
    this.initFormUptadePersonne();
    this.personneFormUpdate.patchValue({
      id: personneSelected.id
    });
    this.personneUpdate.id = personneSelected.id;
    this.personneUpdate.nom = personneSelected.nom;
    this.personneUpdate.prenom = personneSelected.prenom;
    this.personneUpdate.age = personneSelected.age;
    this.personneUpdate.departementId = personneSelected.departement.id;
  }
  
  public onSavePersonne(){ 
    this.submitted = true;       
    this.personneService.savePersonne(this.personneForm.value).subscribe(
      (response)=>{
        this.onGetpersonne()
        this.messageService.add({severity:'success', summary:'Confirmed', detail:'Operation effectuée avec succès !'});
        this.initFormPersonne();
      },  
      (error)=>{ 
        this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreure à survenue !'});
        
      }
    ) 
  }

  public onUpdatePersonne(personneFormUpdate : Personne){  
    this.submitted = true;   
    this.personneService.CompleteUpdatePersonne(personneFormUpdate).subscribe(
      (response)=>{
        this.onGetpersonne()
        this.toast.success("operation effectuée avec succès !")
         this.initFormUptadePersonne();
      },  
      (error)=>{  
        this.toast.error("Une erreure à survenue");
        
      } 
    ) 
  }

  public onDeletePersonne(personneToDelete:any){
    this.personneService.deletePersonne(personneToDelete).subscribe(
      (response)=>{
        this.onGetpersonne()
        // this.toast.success("operation effectuée avec succès !")
        this.messageService.add({severity:'success', summary:'Confirmed', detail:'Operation effectuée avec succès !'});
      },   
      (error)=>{ 
        // this.toast.error("Une erreure à survenue");
        this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreure à survenue !'});
        
      }
    );
  }

  clonedProducts: { [s: string]: Personne; } = {};
  

  onRowEditInit(personne: Personne) {
    this.clonedProducts[personne.id] = {...personne};
  }

  onRowEditSave(personne: Personne) {
    if (personne.age > 0) {  
        console.log(personne);
        this.onUpdatePersonne(personne);
        delete this.clonedProducts[personne.id];
        this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }
    else {
        this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    }
  }

onRowEditCancel(personne: Personne, index: number) {
    this.personnes1[index] = this.clonedProducts[personne.id];
    delete this.clonedProducts[personne.id];
}

  


}
