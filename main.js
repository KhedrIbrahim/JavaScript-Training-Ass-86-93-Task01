        //Get the same element in 4 ways using querySelector
        let myDiv1 = document.querySelector("div");
        let myDiv2 = document.querySelector("#elzero")
        let myDiv3 = document.querySelector(".element")
        let myDiv4 = document.querySelector(`[name= "js"]`);
        
        console.log(myDiv1);
        console.log(myDiv2);
        console.log(myDiv3);
        console.log(myDiv4);
        
        //Get the same element in 4 ways using querySelector
        let myDivA1 = document.querySelectorAll("div");
        let myDivA2 = document.querySelectorAll("#elzero");
        let myDivA3 = document.querySelectorAll(".element");
        let myDivA4 = document.querySelectorAll(`[name= "js"]`);

        console.log(myDivA1[0]);
        console.log(myDivA2[0]);
        console.log(myDivA3[0]);
        console.log(myDivA4[0]);