class Human {
    name;
    job;
    skills=[];
    constructor(){
        this.name="Aziz";
        this.job="batal";
        this.skills=["dhamer","maalem","competent"];
        }


        getJob(newJob){this.job=newJob;}
        learnNewSkill(newSkills){this.skills.push("maths");}
        forgetSkill(newSkills){skills.slice(1);}
        leaveJob()

} 
class Student extends Human{
    

}
const me = new Student();

me.getJob("Web developer");
console.log(me.job);

me.learnNewSkill("React");
console.log(me.skills)
me.forgetSkill("React");
console.log(me.skills)
me.leaveJob();
export default Human