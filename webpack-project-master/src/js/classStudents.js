export default class Sudents {
    constructor(enrollee, isSelfPayment=true){
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.isSelfPayment = isSelfPayment;
        this.id = Math.floor(Math.random() * 100);
        
    }
    static id = 1;
}
