<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GrowInFaith</title>
    <style>
        {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #DA70D6, #FF69B4);
            color: white;
            text-align: center;
            overflow-x: hidden;
        }

        .hero {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 6rem 10%;
            min-height: 100vh;
        }

        .hero-content {
            max-width: 50%;
            text-align: left;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }

        .hero-buttons a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #00C9FF, #92FE9D);
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            transition: 0.3s;
        }

        .hero-buttons a img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }

        .hero-buttons a:hover {
            transform: scale(1.05);
        }

        .hero-image {
            max-width: 40%;
        }

        .hero-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }

        .features, .plans, .contact {
            padding: 5rem 10%;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
            color: white;
            text-align: center;
            border-radius: 20px;
            margin: 4rem 2rem 2rem;
            backdrop-filter: blur(10px);
        }

        .features h2, .plans h2 {
            margin-bottom: 2rem;
        }

        .feature-box, .plan-box {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .feature, .plan {
            background: white;
            color: black;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: 0.3s;
            width: 200px;
        }

        .feature:hover, .plan:hover {
            transform: scale(1.05);
        }

        footer {
            background: rgba(0, 0, 0, 0.3);
            padding: 2rem;
            font-size: 1rem;
            text-align: center;
            color: white;
        }

        @media (max-width: 768px) {
            .hero {
                flex-direction: column;
                text-align: center;
            }
            .hero-content, .hero-image {
                max-width: 100%;
                text-align: center;
            }
            .feature-box, .plan-box {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1>Grow Your Faith with GrowInFaith</h1>
            <p>Begin your journey with features designed to deepen your faith and spiritual growth.</p>
            <div class="hero-buttons">
                <a href="#"><img src="appstore_logo.png" alt="Google Play Icon">Download on Google Play</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="onboard.png" alt="GrowInFaith App Screenshot">
        </div>
    </section>

    <section class="features">
        <h2>Explore Our Features</h2>
        <div class="feature-box">
            <div class="feature">📖 Daily Devotional</div>
            <div class="feature">🗣️ Share the Gospel</div>
            <div class="feature">🤝 Community</div>
            <div class="feature">✨ And More...</div>
        </div>
    </section>

    <section class="plans">
        <h2>Subscription Plans</h2>
        <div class="plan-box">
            <div class="plan">Monthly: ₱49</div>
            <div class="plan">Quarterly: ₱149</div>
            <div class="plan">Annual: ₱499</div>
        </div>
    </section>

    <section class="contact">
        <h2>Contact Us</h2>
        <p>Email: support@growinfaithapp.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Follow us on social media</p>
    </section>

    <footer>
        &copy; 2025 GrowInFaith. All Rights Reserved.
    </footer>
</body>
</html>
