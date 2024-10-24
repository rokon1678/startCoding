

// keep it cll up cause it's so important to make a very good website.

let DATA = "secure Data";
class User{
    constructor(name, email,address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
    viewData () {
   
        console.log("data =", DATA);
    }
}

class Admin extends User  {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
       
    }
}

    let student1 = new User("Rokonuzzaman", "rokon@gmiail.com", "Mashinda shikar Para.", 20);
    let student2 = new User ("Abid", "abid@gmail.com");

    let admin1 = new Admin("Admin", "admin@gmil.com");

    // const stuInformation = {
    //     name: "Rokonuzzaman",
    //     address: "Mashinda Shikar Para",
    //     email:"rokon@gmail.com",

    // }
    // console.log(stuInformation);
