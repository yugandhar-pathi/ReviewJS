export class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age
    }

    getGrade() {
        if (this.age > 5) {
            return "school going kid"
        } else {
            return "kindergarden kid"
        }

    }
}

export class Grade5Students extends Student {
    constructor(name, age, percentage) {
        super(name, age)
        this.percentage = percentage;
    }

    getPercentage() {
        return this.percentage;
    }

    getGrade() {
        console.log(super.getGrade());
        return 5;
    }
}