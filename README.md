# bellybutton_dashboard

## Interactive Biological Sample Dashboard

## Overview

This dashboard visualizes biological sample data using D3.js to read and handle data and Plotly.js to create interactive charts. It features a dynamic bar chart and a bubble chart based on the data from each selected sample, alongside displaying demographic information relevant to each sample.

# Features

- Bar Chart: Displays the top 10 OTUs (Operational Taxonomic Units) found in the selected individual.
- Utilizes sample_values for the values.
- Uses otu_ids as the labels.
- Shows otu_labels as the hover text.
## Bubble Chart: Represents each sample point, showing relationships between OTU IDs, sample values, and labels.
- X values: otu_ids
- Y values: sample_values
- Marker size: sample_values
- Marker colors: otu_ids
- Text values: otu_labels
- Sample Metadata Display: Shows demographic information of the sample selected.
- Data is displayed in key-value pair format in a designated panel.

## Getting Started

## Prerequisites
- Any modern web browser capable of interpreting JavaScript.
- Internet access to load external data dynamically.
## Installation
No installation is needed. To view the dashboard:

1- Visit the hosted version at [GitHub Pages URL] (you will need to replace this placeholder with the actual URL of your deployment).
2- Optionally, to run locally, clone the repository and open the index.html file in your browser.

## Usage

Select a sample from the dropdown menu at the top of the dashboard to view the data visualized in the bar and bubble charts and the sample's metadata in the demographic info panel.

## Deployment
Github Pages:
https://bakbash.github.io/bellybutton_dashboard/
