from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Route for the home page
@app.route('/index')
def home():
    return render_template('index.html')

# Route for the cart page
@app.route('/cart')
def cart():
    return render_template('cart.html')

# Route for the sign in page
@app.route('/sign')
def sign():
    return render_template('sign.html')

# Route to handle form submissions (e.g., contact form)
@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        message = request.form['message']
        # Process form data here (e.g., save to database, send email, etc.)
        return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
