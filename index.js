class Driver {
  
  constructor (name, joinDate) {
    this.name=name
    this.joinDate=joinDate
  }
  
  startDate(){
    return new Date(this.joinDate)
  }
  
  yearsExperienceFromBeginningOf(year){
    console.log(this.startDate().year)
    return year - this.startDate().year
  }
}
