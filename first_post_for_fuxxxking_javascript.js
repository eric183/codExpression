/*ok, tall about youself*/

function WhoAmI(age, name, gender, fn) {
    this.age = age;
    this.name = name;
    this.gender = gender;
    fn();
};

var _Me = new WhoAmI(25, 'kuang', 'male', function(){
    alert('awesome');
});

