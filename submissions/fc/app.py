from flask import Flask, render_template, request
from forex_python.converter import CurrencyRates
import requests

currency = CurrencyRates()



app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def convert():
    return render_template("forex_converter.html")


@app.route('/convert', methods=['GET', 'POST'])
def show_result():
    f = request.args["from"]
    print(f)
    t = request.args["to"]
    a = float(request.args["amount"])
    r = currency.convert(f, t, a)
    print(r)
    # if request.method =="POST": 
    return render_template("front.html", result=round(r, 2))






app.run(debug=True)