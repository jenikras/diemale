        function changepMethod() {

            const m = document.getElementById("theme").value;
            const t = document.getElementById("themeText");

            switch (m) {
                case "Prepayment":
                    t.textContent = "method";
                    break;
                case "Paypal":
                    t.textContent = "art@";
                    break;
                case "Bank payment":
                    t.textContent = "details";
                    break;

                default:
                    t.textContent = "Choose";
            }

        }


        /*generat*/
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

        // Set background color
        ctx.fillStyle = '#f0f0f0'; // Light gray
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text properties
        ctx.font = '14px Arial';
        ctx.fillStyle = 'blue';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        let num = Math.floor(Math.random() * (1000 - (-100) + 1)) - 100;


        const paintColors = ["Titanium", "Zinc", "Ivory", "Mars", "Paynes", "Umber", "Sienna", "Ochre",
            "Naples", "Lemon", "Cadmium", "Indian", "Hansa", "Gold", "Venetian",
            "Alizarin", "Rose", "Crimson", "Carmine", "Vermilion", "Ultramarine",
            "Cobalt", "Cerulean", "Phthalo", "Prussian", "Indigo", "Viridian", "Sap",
            "Hookers", "Olive", "Chromium", "Emerald", "Terre", "Dioxazine", "Violet",
            "Magenta", "Mauve", "Lavender", "Sepia", "Caput", "Oxide", "Turquoise",
            "Teal", "Mint", "Ocean", "Sky", "Forest", "Sandstone", "Slate", "Stone"
        ];

        // Get a random color
        const randomColor = paintColors[Math.floor(Math.random() * paintColors.length)];
        let p = randomColor

        // Draw text on the canvas
        ctx.fillText(p + num, canvas.width / 2, canvas.height / 2);

        // Optional: Add additional styling
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.strokeText(p, canvas.width / 2, canvas.height / 1.2);

        /*
        block valid check
        */

        let captchaVal = document.getElementById("captcha").value
        let captchaValInstant = p + num

        let form = {
            userName: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            tel: document.getElementById("tel").value,
            theme: document.getElementById("theme").value,
            agreepolicy: document.getElementById("agreepolicy").value
        }


        function validateUserName() {
            if (form.userName)
                console.log(`Hello, ${form.userName}`)
        }

        function validateEmail() {
            if (form.email)
                console.log(`+ ${form.email}`);
        }
        function validatePassword() {
            if (form.password)
                console.log(`+ ${form.password}`);
        }
        function validateTel() {
            if (form.tel)
                console.log(`+ ${form.tel}`);
        }
        function validateTheme() {
            if (form.theme)
                console.log(`+ ${form.theme}`);
        }
        function validateAgreePolicy() {
            if (form.agreepolicy)
                console.log(`agree ${form.agreepolicy}`);
        }
        function validateCaptcha() {
            if (captchaVal === captchaValInstant)
                console.log(`Captcha ok ${captchaVal}`);
        }

        const popup = document.getElementById("popupPolicy");
        const openBtn = document.getElementById("openPopupPolicy");
        const closeBtn = document.getElementById("closePopupPolicy");

        openBtn.onclick = () => popup.style.display = "flex";
        closeBtn.onclick = () => popup.style.display = "none";


        function myFunctionCheck() {
            let u = document.getElementById("userName").value;
            console.log(`user ${u}`);
            let c = document.getElementById("captcha").value;
            if (c === captchaValInstant)
                console.log(`Captcha ok ${c}`);
            console.log(`${c}, ${captchaValInstant}`)
            validateUserName();
            validateEmail();
            validatePassword();
            validateTel();
            validateTheme();
            validateAgreePolicy();
            validateCaptcha();
        }

         function myFunctionSubmit() {
            console.log(`Submit button pressed`)
         }


    