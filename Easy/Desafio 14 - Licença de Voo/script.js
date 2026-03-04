class GenerateLicense {
  constructor(name, lastname, birthday) {
    this.name = name;
    this.lastname = lastname;
    this.birthday = birthday;
    this.flyingLicense = false;
  }

  verifyExistence() {
    if (this.flyingLicense == false) {
      this.flyingLicense = true;
    }
  }

  generingLicense() {
    return `Pilot { 
    firstName: '${this.name}',
    lastName: '${this.lastname}',
    birthday: ${this.birthday},
    flyingLicense: '${this.flyingLicense}'
    }`;
  }
}
