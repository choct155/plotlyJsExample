# [Plotly.js](https://plotly.com/javascript/) Example

Just an example of how to deploy Plotly.js to chart data from a file. The motivation is to visualize data outside of ObservableHQ, which is not necessarily permitted in a work environment. This example shows how to marry the HTML scaffolding with a javascript file that does the actual work of manipulating and visualizing the code.

To run this example:

1. Clone the repo to your local machine
2. Use the command line to navigate to the project root
3. Use Python to initialize a local http server (e.g. `python -m http.server 1234`)
4. Open your browser to view the content being served (e.g. at `http://localhost:1234`)
5. Open `rabbit.html`