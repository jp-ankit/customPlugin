import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Plugin, Cordova} from "@ionic-native/core";

@Plugin({
  pluginName: 'customPlugin',
  plugin: 'cordova-plugin-customPlugin',   // copy plugin id from plugin.xml of customPlugin
  pluginRef: 'customPlugin',
  repo: 'https://github.com/ankit-jft/Dummy-plugin.git',
  platforms: ['Android', 'ios']
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstNumber;
  secondNumber;

  constructor(public navCtrl: NavController) {

  }

  @Cordova()
  add(args: any): Promise<String> {
    return;
  }

  sum() {
    let data = {
      param1: this.firstNumber,
      param2: this.secondNumber
    };

    this.add(data).then((result) => {
      alert('Sum of two number is ' + result);
    }).catch((error) => {
      alert('Error ' + error);
    })
  }

}
