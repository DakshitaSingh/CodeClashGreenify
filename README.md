# 🌿 Greenify – Sustainable Shopping Simplified

**Greenify** is a sustainability-focused web application designed to help users make eco-conscious shopping decisions. Using machine learning, the app predicts whether a product is sustainable based on its brand and material. Users can browse filtered product suggestions, track sustainability insights, and shop smarter — all in one place.

---

## 🌐 Live Demo

[https://code-clash-greenify.vercel.app/green]


---

## 🚀 Features

* 🧠 AI-based sustainability prediction model
* 🛍️ Product filtering by brand, material, and delivery time
* 🟢 Dashboard for eco-friendliness insights
* ⚡ Fast, responsive interface with real-time feedback
* 📱 Mobile-optimized user experience

---

## 🛠 Tech Stack

### Frontend

* **React** (Vite)
* **Tailwind CSS**
* **Axios**, **Heroicons**, etc.

### Backend

* **Flask (Python)**
* **Nodejs**
* **Random Forest Classifier** via **scikit-learn**
* **Pandas**, **NumPy**, **Joblib**


### Tools

* **VS Code**
* **GitHub**
* **Postman** (API Testing)

---

## 📦 Folder Structure

Greenify/
├── client/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
├── backend/ # Flask Backend
│ ├── model/
│ │ ├── train_model.py
│ │ └── sustainability_model.pkl
│ └── app.py
├── data/ # Dataset CSVs
├── README.md
└── requirements.txt

shell
Copy
Edit

---

## 🧑‍💻 Getting Started

### Prerequisites

* Node.js v18+
* Python 3.10+
* pip / virtualenv

### Installation

```bash
# Clone the repository
$ git clone https://github.com/DakshitaSingh/CodeClashGreenify.git
$ cd Greenify

# Install backend dependencies
$ cd backend
$ pip install -r requirements.txt
$ python app.py

# In another terminal, run frontend
$ cd ../client
$ npm install
$ npm run dev
ML Model
The ML model is trained using a sustainable fashion dataset. It takes:

Brand Name

Material Type

...as input and returns whether the product is Sustainable or Non-Sustainable.

📸 Screenshots
(Add app UI screenshots below)



🤝 Contributors
Dakshita Singh
Astha Singh
Manya Rawat
Nancy Singh

📄 License
This project is licensed under the MIT License.

📬 Feedback
For issues, suggestions, or contributions, open an issue or submit a pull request.

Built with 🌍 love and ML by the Greenify Team.
