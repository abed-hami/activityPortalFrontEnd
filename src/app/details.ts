class Details{
  about:any

  setAbout(value:any){

    this.about=value

  }

  main:any

  setMain(value:any) {this.main=value}

  address:any

  setAddress(value:any){this.address=value}

  email :any

  setEmail(value:any){this.email=value}

  phone:any
  setPhone(value:any){this.phone=value}

  service1:any
  service2:any
  service3:any
  service4:any

  setS1(value:any){this.service1=value}
  setS2(value:any){this.service2=value}
  setS3(value:any){this.service3=value}
  setS4(value:any){this.service4=value}

  getAbout(){
    return this.about
  }
  getAddress(){
    return this.address
  }
  getPhone(){
    return this.phone
  }
  getS1(){
    return this.service1
  }
  getS2(){
    return this.service2
  }
  getS3(){
    return this.service3
  }
  getS4(){
    return this.service4
  }
  getMain(){
    return this.main
  }
  getEmail(){
    return this.email
  }
}
