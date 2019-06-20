class Driver {
  
  constructor (name, joinDate) {
    this.name=name
    this.joinDate=new Date(this.joinDate)
  }
  
  
  yearsExperienceFromBeginningOf(year){
    
    return year - this.startDate().year
  }
}
