const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    

class Driver {
  
  constructor (name, joinDate) {
    this.name=name
    this.joinDate=new Date(joinDate)
  }
  
  
  yearsExperienceFromBeginningOf(year){
    const endDate = new Date( year, 1, 1 );
    return parseInt(( endDate - this.joinDate ) / ( 365 * 24 * 60 * 60 * 1000 ));
  }
}

class Route {
  
  constructor(beginningLocation, endingLocation){
    this.beginningLocation=beginningLocation
    this.endingLocation=endingLocation
  }
  
  avenueToInteger( avenue ) {
    return eastWest.indexOf( avenue );
  }
  
  blocksTravelled(){
    const vDistance=Math.abs(this.beginningLocation.vertical-this.endingLocation.vertical)
    const hDistance=Math.abs(this.beginningLocation.horizontal)
  }
  
}