

        // First name validation nulity
        document.getElementById("submit").addEventListener("click", myFunction);

        function myFunction() {

            var name = document.getElementById('name').value;  
            if (name == "" || name==undefined)  
            {  
                document.getElementById("name_field").style="display:block;color:red";
                
            }

            var email = document.getElementById('email').value;  
            if (email == "" || email==undefined)  
            {  
                document.getElementById("email_field").style="display:block;color:red";
            }

            var product = document.getElementById('product').value;  
            if (product == "" || product==undefined)  
            {  
                document.getElementById("product_field").style="display:block;color:red";
            }

            var address = document.getElementById('address').value;  
            if (address == "" || address==undefined)  
            {  
                document.getElementById("address_field").style="display:block;color:red";
            }




        }


        // last name validation nulity