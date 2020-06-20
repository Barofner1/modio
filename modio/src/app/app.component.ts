import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modio';

  playAudio(){
    var file = document.getElementById("AudioFile");
    var sound = document.getElementById("audio");
    sound.src = URL.createObjectURL(file.files[0]);
  }
}
