// IIFE -- Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App Started...");
        let deletebuttons = document.querySelectorAll(".btn-danger");
        for (button of deletebuttons) {
            button.addEventListener("click", (event) => {
                if (!confirm("Are you sure you want to delete this survey?")) {
                    event.preventDefault();
                    window.location.assign("/survey-list");
                }
            });
        }

       //let submitForm = document.querySelectorAll(".btn-primary");
        let submitForm = document.getElementsByName("submitForm");
        for(button of submitForm) {
            button.addEventListener("click", (event) => {
               if (confirm("Do you want to save the survey in a pdf file?")) {
                    GeneratePdf();
                    setTimeout(Submit, 2000);
                    
               } else {
                document.getElementById("form-print").submit()
               }
            });
        }
        function Submit() {
            document.getElementById("form-print").submit()
        }

        // GeneratePdf
        function GeneratePdf() {
            var element = document.getElementById('form-print');
            var opt = {
              margin:       1,
              filename:     'survey.pdf',
              image:        { type: 'jpeg', quality: 0.98 },
              html2canvas:  { scale: 2 },
              jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf(element,opt);

        }
    }
    window.addEventListener("load", Start);
})();