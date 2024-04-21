// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metaData = data.metadata;
    
    // Filter the metadata for the object with the desired sample number
    let sampleData = metaData.filter(row => row.id == sample); 
    
    console.log("sampleData:",sampleData);
    let panel= d3.select("#sample-metadata");
    panel.selectAll("p").remove();

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    sampleData.forEach((row) => {
      Object.entries(row).forEach(([key,value]) => {
        console.log(key + ": " + value);
        panel.append("p").text(key + ": " + value);
        
      });
    });





    

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let metaData = data.samples;

    // Filter the samples for the object with the desired sample number
    let sampleData = metaData.filter(row => row.id == sample); 
    
    console.log("sampleData:",sampleData);


    // Get the otu_ids, otu_labels, and sample_values

    let otu_ids =sampleData [0].otu_ids;
    let sample_values= sampleData [0].sample_values;
    let otu_lables = sampleData [0].otu_labels;
    
    let xvalues = sample_values.slice(0,10).reverse();
    
    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yvalues = otu_ids.map(y => `OTU ${y}`).slice(0,10).reverse();
    let lables = otu_lables.slice(0,10).reverse();


    // Build a Bubble Chart   
    let trace1 = {
      x: otu_ids ,
      y: sample_values,
      text: otu_lables,
      mode: "markers",
      marker: {
       size: sample_values,
       color: otu_ids,
       colorscale: "Earth"  
      }
    
    };
   


    // Render the Bubble Chart
    
    let data1= [trace1];
    let bubble_layout = {
      title: "OTU  Samples",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Sample Values"}
    };
       



    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace2 = {
      x: xvalues,
      y: yvalues,
      text: lables,
      type: "bar",
      orientation: "h"
      
    };


    // Render the Bar Chart
    let data2 = [trace2];
    
    let bar_layout = {
      title: "Top 10 OTUs ",
      xaxis: {title: "Sample Values"},
      yaxis: {title: "OTU ID"}
    
      
    };

    
    Plotly.newPlot("bubble",data1,bubble_layout);
    Plotly.newPlot("bar", data2, bar_layout);  

  });
  
};

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field

    let names = data.names;
    console.log("ID:",names)
    // Use d3 to select the dropdown with id of `#selDataset`
    let dropDown= d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(id => {
      option=dropDown.append("option");
      option.text(id);
      option.property("value",id);
      //option.style.padding=0;

     });

    // Get the first sample from the list
    // Build charts and metadata panel with the first sample
    buildMetadata(names[0]);
    buildCharts(names[0]);
     
  });

    
  
  


}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Initialize the dashboard
init();



