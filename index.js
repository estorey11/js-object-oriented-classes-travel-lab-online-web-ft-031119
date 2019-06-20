class Driver {
  
  constructor (name, joinDate) {
    this.name=name
    this.joinDate=new Date(this.joinDate)
  }
  
  
  yearsExperienceFromBeginningOf(year){
    const endDate = new Date( year, 1, 1 );
    console.log(endDate)
    console.log(this.joinDate)
    return parseInt(( endDate - this.joinDate ) / ( 365 * 24 * 60 * 60 * 1000 ));
  }
}
