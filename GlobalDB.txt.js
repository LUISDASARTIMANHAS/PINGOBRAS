let db = [
{"nomeCad": "administrador",
 "userCad": "equipe",
 "senhaCad": "administrador",
 "saldoCad": 1500.90,
 "PerfilIMG":"",
 "Token":"192.168.100.1",
 "UserBG":""
},

{"nomeCad": "Florisvaldo de Oliveira Schulz", 
 "userCad": "Valdo", 
 "senhaCad": "96451290", 
 "saldoCad": 88,
 "PerfilIMG":"https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/valdo.jpg?v=1665316103313",
 "Token":"192.168.100.22",
 "UserBG":"#FF0000"
},

{"nomeCad": "Luis Augusto de Souza Carvalho", 
 "userCad": "LUIS DAS ARTIMANHAS", 
 "senhaCad": "998774163", 
 "saldoCad": 24,
 "PerfilIMG":"https://cdn.discordapp.com/avatars/533042065408262164/33fa87caed0f1a449be530fef6a1d71b.webp?size=2048",
 "Token":"192.168.100.11",
 "UserBG":"#9900ff"
},

{"nomeCad": "José Eduardo Batista de Souza", 
 "userCad": "notfound", 
 "senhaCad": "10062002", 
 "saldoCad": 1,
 "PerfilIMG":"",
 "Token":"192.168.100.45",
 "UserBG":""
},
  
{"nomeCad": "Diogo Antonio Nienke Batista", 
 "userCad": "did zin", 
 "senhaCad": "z0mbieltr2", 
 "saldoCad": 7,
 "PerfilIMG":"https://cdn.discordapp.com/attachments/946172847108264026/1023227651223207966/306100080_633632671438689_3474531611291345899_n.jpg",
 "Token":"192.168.100.47",
 "UserBG":""
},
  
{"nomeCad": "Vinícius Lopes", 
 "userCad": "AbDomineEst", 
 "senhaCad": "826961415130185749", 
 "saldoCad": 2,
 "PerfilIMG":"https://cdn.discordapp.com/attachments/1022972920517099580/1028807372484915302/d4d8e81995754e103fa84926b7e069d4.jpg",
 "Token":"192.168.100.2",
 "UserBG":""
},
  
{"nomeCad": "Marquinhos",
 "userCad": "Marq",
 "senhaCad": "9595",
 "saldoCad": 2,
 "PerfilIMG": "https://w7.pngwing.com/pngs/41/1022/png-transparent-lightning-mcqueen-disney-infinity-3-lightning-mcqueen-mater-cars-cars-orange-car-pixar-thumbnail.png",
 "Token":"192.168.100.3",
 "UserBG":""
}
  
];
const dbString = JSON.stringify(db);
localStorage.setItem("GlobalDB",dbString)
