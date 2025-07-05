# Smart Data Flow Validator Using SPL2 Pipelines

This project showcases a complete observability and log intelligence system built around the capabilities of SPL2 (Search Processing Language). Designed specifically for Track 3 of the Splunk Hackathon – *Data Management (SPL2 Pipelines)* – the dashboard validates real-time data flow across multiple sources, identifies log anomalies, and converts raw logs into insightful metrics to support scalable monitoring.

---

## Overview

Modern systems generate massive volumes of logs every minute. This data, while rich in information, often becomes difficult to manage, interpret, or scale. The **Smart Data Flow Validator** solves this by intelligently processing and visualizing logs using SPL2 pipelines. 

This tool enables engineers, site reliability teams, and system administrators to detect missing logs, anomalies, spikes, and log inconsistency in a clean, actionable format — backed by a real SPL2 health scoring pipeline and an interactive, cyberpunk-themed dashboard interface.

---

## Core Features

- **SPL2-Based Log Health Engine**
  - Detects log gaps and event spikes
  - Calculates per-source metrics: error rate, warning rate, and consistency
  - Produces a composite health score based on multiple penalty models

- **Logs-to-Metrics Conversion**
  - Converts high-volume logs into time-based summaries
  - Extracts meaningful metrics to reduce storage cost and improve alert readiness

- **Interactive Dashboard**
  - Animated visualization of log data flow, event volumes, spikes, and health score
  - Responsive design suitable for desktop and mobile
  - Real-time style refresh controls and alert indicators

- **Modular File Structure**
  - Clean separation of logic (CSS, JavaScript, SPL2, sample data)
  - Scalable codebase for future integrations (API, real Splunk backend, observability platforms)

---

## File Structure

```

Smart-Data-Flow-Validator-Using-SPL2-Pipelines/
├── assets/
│   ├── logo.svg
│   └── bg-grid.png
│
├── styles/
│   └── dashboard.css
│
├── scripts/
│   └── interactions.js
│
├── spl2/
│   └── health_score_pipeline.spl2
│
├── data/
│   └── sample_logs.json
│
├── diagrams/
│   └── Architecture Diagram.png
│
├── index.html
├── README.md


````

---

## How It Works

1. **Ingest Logs (Sample or Real)**
   - Input comes from simulated JSON logs (`data/sample_logs.json`)
   - Logs include fields like `timestamp`, `source`, and `log_level`

2. **SPL2 Pipeline Processing**
   - The logic inside `spl2/health_score_pipeline.spl2` processes logs
   - Computes metrics per source and per minute (event count, error rate)
   - Flags gaps (missing logs), spikes (volume surges), and calculates penalties

3. **Health Score Computation**
   - Uses a weighted model combining:
     - Log gap penalty
     - Spike severity
     - Error/warning density
     - Consistency ratio
   - Returns a final score between 0–100 with qualitative labels:
     - OPTIMAL, STABLE, DEGRADED, or CRITICAL

4. **Visualization**
   - `index.html` renders the full dashboard with animated charts, scorecards, spike logs, and log level breakdowns
   - All visuals are powered by data summaries (not raw logs), aligning with the goal of log volume reduction

---

## Sample SPL2 Pipeline (Simplified View)

```spl
from splunk_logs
| timechart span=1m count, errors, warnings
| eval is_gap = ...
| eval is_spike = ...
| eval health_score = ...
| stats ...
````

Full version available in `spl2/health_score_pipeline.spl2`

---

## Use Case Alignment (Track 3)

This project directly addresses both Track 3 problem statements:

1. **Reduce Log Volume**

   * Converts thousands of raw log lines into summarized metrics
   * Filters only relevant data anomalies and trends

2. **Convert Logs to Metrics**

   * Calculates real-time metrics from logs (event counts, rates, severity)
   * Renders metrics visually to support alerting and observability

---

## Dataset

The project uses a simulated dataset (`data/sample_logs.json`). You can generate your own using any logging tool or use the provided script to generate logs with timestamps, sources, and varying log levels.

---

## Future Enhancements

* Integration with live Splunk instance or Metrics Index
* Alerts via Slack or email based on anomaly spikes
* Real-time streaming using WebSockets
* Export features (PDF/CSV reports)

---

## License

This project is for demonstration purposes as part of the Splunk Hackathon challenge. Feel free to fork, improve, and adapt it for educational or engineering use.

---
