import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  buttonFlag=false;
  updateFlag=false;
  selectindex= '';
  RegistrationForm:FormGroup;
  user={firstName:'',lastName:'',email:'',password:'',Date:'',phoneNumber:''};
  users:any[]=[];


  constructor(private fb: FormBuilder) { }
  
  

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.RegistrationForm=this.fb.group({
  firstName:[''],
  lastName:[''],
  email:[''],
  password:[''],
  Date:[''],
  phoneNumber:['']
});



  }

    myfuntion(){ 
      this.user={firstName:'',lastName:'',email:'',password:'',Date:'',phoneNumber:''};
      this.buttonFlag=true;

    } 
    

    login() {
      this.buttonFlag=false;
      if(this.updateFlag){
        this.users[this.selectindex]=this.user;
      }
      else{
        this.users.push(this.user);
      }
     
      //this.users.push(this.user);
      console.log(this.users);
    }
    deleteme(index){
      
      this.users.splice(index,1);
    }
    updateme(index){
      this.buttonFlag=true;
      this.updateFlag=true;
      this.users[index];
    }
    cancelme(){
      this.buttonFlag=false;
      this.updateFlag=false;
    }
    
  }
    
    
    
   
  
  


