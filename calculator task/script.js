		
		// Function that display value 
		function dis(val) { 
			document.getElementById("result").value += val 
		} 

		function myFunction(event) { 
			if (event.key == '0' || event.key == '1' 
				|| event.key == '2' || event.key == '3' 
				|| event.key == '4' || event.key == '5' 
				|| event.key == '6' || event.key == '7' 
				|| event.key == '8' || event.key == '9' 
				|| event.key == '+' || event.key == '-' 
				|| event.key == '*' || event.key == '/') 
				document.getElementById("result").value += event.key; 
		} 

		let cal = document.getElementById("calcu"); 
		cal.onkeyup = function (event) { 
			if (event.keyCode === 13) { 
				console.log("Enter"); 
				let x = document.getElementById("result").value 
				console.log(x); 
				solve(); 
			} 
		} 

		// Function that evaluates the digit and return result 
		function solve() { 
			let x = document.getElementById("result").value 
			let y = math.evaluate(x) 
			document.getElementById("result").value = y 
		} 

		// Function that clear the display 
		function clr() { 
			document.getElementById("result").value = "" 
		} 
        // function for backspace
        function backspace() {
            let result = document.getElementById("result");
            result.value = result.value.slice(0, -1);
        }
        //allow only numbers
        function isNumber(evt) {
            evt = (evt) ? evt : window.Event;
            let charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                alert("only numbers are allowed");

                return false;
            }
                return true;
        }


          