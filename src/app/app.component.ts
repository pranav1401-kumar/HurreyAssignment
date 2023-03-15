import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  playerName = "";

  avatarList = ['assets/image/Avatar1.png', 'assets/image/Avatar2.png', 'assets/image/Avatar3.png', 'assets/image/Avatar6.png', 'assets/image/Avatar7.png']

  selectedAvatar = '';

  roomCode:string =  '';

  roomName: string = '';

  numberOfPlayers: string = '';

  private stepper!: Stepper;  

  ngOnInit(): void {
   this.stepper = new Stepper(document.querySelector('#step1')!, {
    linear: false,
    animation: true
   }) 
  }

  next(){
    this.stepper.next();
  }
  

  stepperTo(to: number){
    this.stepper.to(5);
  }

  setName(playerName: string){
    this.playerName = playerName;
  }

  setAvatar(avatar: string){
    this.selectedAvatar = avatar;
  }

  setRoomCode(event: any){
    if(this.roomCode.length == 6){
      return false;
    }
    if(event.keyCode >= 48 && event.keyCode <= 57){
      return true;
    }
    return false;
  }

  setNumberOfPlayers(event: any){
    if(this.numberOfPlayers.length == 1){
      return false;
    }
    if(event.keyCode >= 49 && event.keyCode <= 53){
      return true;
    }
    return false;
  }
  

  error(){
    alert('Not Implemented');
  }
}
