class Player {
  constructor(){
    this.rank = null;
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  readVal(){
    database.ref('CarRank').on("value",(data)=>{this.rank = data.val();})
    
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  static updateRank(rank){
    database.ref("/").update({CarRank:rank})
  }

  static deletePlayers(){
    var playersNode = "players"
    database.ref(playersNode).set("");
  }
}
