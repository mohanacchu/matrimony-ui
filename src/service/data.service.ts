import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getNakshatra(){
    let nakshatra = [ 
      {
          "value":"Anuradha",
          "label":"Anuradha"
      },
      {
          "value":"Ardra",
          "label":"Ardra"
      },
      {
          "value":"Ashlesha",
          "label":"Ashlesha"
      },
      {
        "value":"Ashwini",
        "label":"Ashwini"
      },
      {
        "value":"Bharani",
        "label":"Bharani"
      },
      {
        "value":"Chitra",
        "label":"Chitra"
      },
      {
        "value":"Anuradha",
        "label":"Anuradha"
    },
    {
        "value":"Ardra",
        "label":"Ardra"
    },
    {
        "value":"Ashlesha",
        "label":"Ashlesha"
    },
    {
      "value":"Hastha",
      "label":"Hastha"
    },
    {
      "value":"Jyesta",
      "label":"Jyesta"
    },
    {
      "value":"Krithika",
      "label":"Krithika"
    },

    {
      "value":"Makha",
      "label":"Makha"
    },
    {
      "value":"Moola",
      "label":"Moola"
    },
    {
      "value":"Mrigasira",
      "label":"Mrigasira"
    },

    {
      "value":"Poorvabadrapada",
      "label":"Poorvabadrapada"
    },
    {
      "value":"Poorvapalguni",
      "label":"Poorvapalguni"
    },
    {
      "value":"Poorvashada",
      "label":"Poorvashada"
    },

    {
      "value":"Punarvasu",
      "label":"Punarvasu"
    },
    {
      "value":"Pushya",
      "label":"Pushya"
    },
    {
      "value":"Revathi",
      "label":"Revathi"
    },

    {
      "value":"Rohini",
      "label":"Rohini"
    },
    {
      "value":"Satabisha",
      "label":"Satabisha"
    },
    {
      "value":"Shravana",
      "label":"Shravana"
    },

    {
      "value":"Uttarabadra",
      "label":"Uttarabadra"
    },
    {
      "value":"Uttarapalguni",
      "label":"Uttarapalguni"
    },
    {
      "value":"Uttarashada",
      "label":"Uttarashada"
    },
    {
      "value":"Vishaka",
      "label":"Vishaka"
    }
      ]

    return nakshatra
    }
    getRashis(){
      let rashis = [

        
      ]
    }
}
