This project is a basic network packet analyzer tool that allows users to capture and analyze network packets from a specified network interface. 
It provides a simple web interface for capturing packets and displaying basic packet information.

Key Features:

Packet Capture: Capture network packets in real-time from a specified network interface.
Packet Decoding: Decode captured packets to extract basic information such as source and destination IP addresses, protocol types, port numbers, and packet lengths.
Web Interface: Provide a user-friendly web interface for interacting with the network packet analyzer tool.
Packet Visualization: Visualize captured packets with basic packet information displayed in a list format.
Packet Filtering: Allow users to filter captured packets based on specific criteria to focus on relevant network traffic.
How to Use:

Install required Python libraries: pyshark and flask.
Run the Flask app by executing python app.py.
Open your web browser and navigate to http://localhost:5000/.
Click the "Capture Packets" button to start capturing packets from the specified network interface (replace 'eth0' with your actual interface name).
