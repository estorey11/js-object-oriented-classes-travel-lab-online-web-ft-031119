class Driver {
  
  constructor (name, joinDate) {
    this.name=name
    this.joinDate=joinDate
  }
  
  startDate(){
    return new Date(this.joinDate)
  }
  
  yearsExperienceFromBeginningOf(year){
    console.log(this.startDate())
    return year - this.startDate().year
  }
}
