var users = JSON.parse(localStorage.getItem("users"));
console.log(true);
        function logSubmit(event) {
            console.log(true);
            console.log('hello from submit');
            let compmail = logmail.value 
            let compPass = password.value
            if (compmail==""&&compPass=="" ){
                document.getElementById("err").style.display = 'block'
                document.getElementById("err").innerHTML = "**please inter your email and password"
            console.log(true);
            }
            users.map(e => {
            if (compmail !== e.mail && compPass !== e.password ){
                document.getElementById("err").style.display = 'block'
                document.getElementById("err").innerHTML = "**please inter correct your email and password"
            console.log(true);
            }
            })
        
            users.map(e => {
                
            if(e.mail === compmail && e.password == compPass && compmail !== "" && compPass !== ""){
                // sessionStorage.setItem("loname", JSON.stringify(e.name));
                // sessionStorage.setItem("lomail", JSON.stringify(e.mail));
                // localStorage.setItem('users')
                console.log(true);
                window.location=("./index.html")
                // sessionStorage.setItem()
            }
            })
            
            event.preventDefault();
        }

        const logmail = document.getElementById('mail')
        const password = document.getElementById('pass')
        const form = document.getElementById('form')
        form.addEventListener('click', logSubmit)