//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (input.toUpperCase() == input && input.toLowerCase() != input){
        return "Whoa, chill out!";
    }
    if (input.endsWith("?")){
        return "Sure.";
    }
    if (input.trim() == ""){
        return "Fine. Be that way!";
    }
    return "Whatever."
};

module.exports = Bob;
