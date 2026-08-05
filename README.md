# Tradescape – Trader Risk Dashboard

## Live Demo

Add your deployed link here:

**Live:** https://your-live-demo-link.com

## GitHub Repository

Add your GitHub repository link here:

**GitHub:** https://github.com/yourusername/trader-risk-dashboard

---

# Overview

Trader Risk Dashboard is a responsive React application that helps traders monitor their account performance and risk limits in real time.

The dashboard calculates all trading statistics directly from trade data instead of using hardcoded values. It provides an easy way for traders to understand whether they are close to violating their trading rules.

---

# Features

* Responsive UI
* Light & Dark Mode
* Account Summary
* Trading Statistics
* Risk Indicator
* Equity Curve Chart
* Trade History Table
* Performance by Asset
* Reusable React Components
* Dynamic Calculations from Trade Data

---

# Tech Stack

* React
* Vite
* Tailwind CSS
* Recharts
* React Icons



---

# Installation

Clone the repository.

```bash
git clone https://github.com/yourusername/trader-risk-dashboard.git
```

Go to the project folder.

```bash
cd trader-risk-dashboard
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Build the project.

```bash
npm run build
```

---

# What I Built

I built a responsive Trader Risk Dashboard that displays:

* Starting Balance
* Current Balance
* Maximum Drawdown
* Daily Loss Limit
* Total Profit & Loss
* Winning Trades
* Losing Trades
* Win Rate
* Largest Winning Trade
* Largest Losing Trade
* Current Drawdown
* Remaining Drawdown
* Current Day Loss
* Remaining Daily Loss Limit
* Trade History
* Equity Curve
* Performance by Asset

All values are calculated dynamically from the supplied trade data.

---

# Additional Feature

## Equity Curve

I added an Equity Curve using Recharts.

### Why?

The equity curve allows traders to quickly understand how their account balance changes after each trade instead of only looking at the final P&L.

It helps identify trading consistency and overall account growth.

---

# Product Questions

## 1. What is drawdown in trading?

Drawdown is the decrease in a trading account's value from its highest balance to a lower balance. It measures how much money has been lost before the account recovers.

---

## 2. Why would a trader care about remaining drawdown instead of only current P&L?

Current P&L only shows today's profit or loss.

Remaining drawdown tells the trader how much loss is still allowed before violating the account rules. This helps traders manage risk and avoid failing their trading evaluation.

---

## 3. If you had another day to improve the dashboard, what would you add?

I would add:

* Trade filtering by asset
* Date range filtering
* Profit/Loss pie chart
* Real-time trading API integration
* Export trades as CSV
* Better animations
* User preferences
* Mobile performance improvements

---

# Responsive Design

The application is fully responsive and works on:

* Desktop
* Tablet
* Mobile

---

# Author

**Piyush Amola**

Full Stack Web Developer

GitHub: https://github.com/yourusername
