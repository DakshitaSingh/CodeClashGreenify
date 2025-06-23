# 🌿 Greenify – Sustainable Shopping Simplified

**Greenify** is a sustainability-focused web application designed to help users make eco-conscious shopping decisions. Using machine learning, the app predicts whether a product is sustainable based on its brand and material. Users can browse filtered product suggestions, track sustainability insights, and shop smarter — all in one place.

---

## 🌐 Live Demo

[https://code-clash-greenify.vercel.app/green](https://code-clash-greenify.vercel.app/green)

---

## 🚀 Features

* 🧠 AI-based sustainability prediction model
* 🛒 Product filtering by brand, material, and delivery time
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
* **Node.js**
* **Random Forest Classifier** via **scikit-learn**
* **Pandas**, **NumPy**, **Joblib**

### Tools

* **VS Code**
* **GitHub**
* **Postman** (API Testing)

---

## 📆 Folder Structure

```
Greenify/
├── client/              # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/             # Flask Backend
│   ├── model/
│   │   ├── train_model.py
│   │   └── sustainability_model.pkl
│   └── app.py
├── data/                # Dataset CSVs
├── README.md
└── requirements.txt
```

---

## 🧑‍💻 Getting Started

### Prerequisites

* Node.js v18+
* Python 3.10+
* pip / virtualenv

### Installation

```bash
# Clone the repository
git clone https://github.com/DakshitaSingh/CodeClashGreenify.git
cd Greenify

# Setup backend
cd backend
pip install -r requirements.txt
python app.py

# Setup frontend (in new terminal)
cd ../client
npm install
npm run dev
```

---

## 🧠 ML Model

The ML model is trained using a sustainable fashion dataset.
It takes the following as input:

* **Brand Name**
* **Material Type**

...and returns a prediction: **Sustainable** or **Non-Sustainable**.

---

## 📸 Screenshots
##   Home page
![image](https://github.com/user-attachments/assets/23e73f78-7086-40cf-83ee-86dcf6c27c94)
##   Tags for greenovation
>![image](https://github.com/user-attachments/assets/cc192769-5752-4cbc-a75d-cb9f00eb7804)
## Group buying for more sustainable enviroment
![image](https://github.com/user-attachments/assets/c9708df2-e15e-496f-a593-ab6be4f81ca9)
## ML Model to check sustainablity rating
![image](https://github.com/user-attachments/assets/99292103-91ed-4629-ad8c-6df4403f78ab)

---

## 🤝 Contributors

* [Dakshita Singh](https://github.com/DakshitaSingh)
* [Astha Singh](https://github.com/)
* [Manya Rawat](https://github.com/manya014)
* [Nancy Singh](https://github.com/)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Feedback

If you have any feedback, issues, or feature requests, feel free to open an [issue](https://github.com/DakshitaSingh/CodeClashGreenify/issues) or submit a pull request.

---

> Built with 🌍 love and ML by the Greenify Team.
