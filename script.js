 // Pre-defined email address
        const predefinedEmail = "cjmcnurlan@gmail.com";
        
        function createEmailForm() {
            const formContainer = document.getElementById('form-container');
            
            // Clear any existing form
            formContainer.innerHTML = '';
            
            // Create the email form
            const form = document.createElement('form');
            form.className = 'email-form';
            form.onsubmit = handleSubmit;
            
            form.innerHTML = `
                <div class="form-group">
                    <label for="email-to">To:</label>
                    <input type="email" id="email-to" value="${predefinedEmail}" readonly>
                </div>
                
                <div class="form-group">
                    <label for="email-subject">Subject:</label>
                    <input type="text" id="email-subject" required placeholder="Enter email subject">
                </div>
                
                <div class="form-group">
                    <label for="email-body">Body:</label>
                    <textarea id="email-body" required placeholder="Enter your message"></textarea>
                </div>
                
                <button type="submit" class="portfolio-btn">Send Email</button>

                <br>
                <p style="padding-top: 25px;"> or leave a message at: </p>
                <h1> 815-608-6761 </h1>
            `;
            
            formContainer.appendChild(form);
        }
        
        function handleSubmit(event) {
            event.preventDefault();
            
            const subject = document.getElementById('email-subject').value;
            const body = document.getElementById('email-body').value;
            
            // Create mailto link (this will open the user's default email client)
            const mailtoLink = `mailto:${predefinedEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Optional: Show confirmation message
            alert('Your email client will open with the composed message. Please send it from there.');
        }